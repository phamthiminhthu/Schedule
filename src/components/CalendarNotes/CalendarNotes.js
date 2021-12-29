import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { Modal } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';
import propTypes from 'prop-types';
import './CalendarNotes.scss';
import { Row, Col } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

export default function CalendarNotes() {

  CalendarNotes.propTypes = {
    onSubmit: propTypes.func,

  }
  CalendarNotes.defaultProps = {
    onSubmit: null,
  }

  const [currentEvents, setCurrentEvents] = useState([])
  const handleEvents = (events) => {
    setCurrentEvents(events)
  }
  const [checkAction, setCheckAction] = useState(false)

  const [events, setEvents] = useState(
    {
      title: '',
      description: '',
      startime: null,
      endtime: null
    }
  );

  const handleChange = (props) => (e) => {
    setEvents({ ...events, [props]: e.target.value })
  }

  const handleChangeTime = (props) => (e) => {
    setEvents({ ...events, [props]: e })
  }

  const [selectInfo, setSelectInfo] = React.useState('');
  const [show, setShow] = useState(false);

  //update notes
  const handleOpenModalUpdate = (clickInfo) => {
    setShow(true);
    setCheckAction(false);
    setSelectInfo(clickInfo);
    setEvents({
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      startime: clickInfo.event.start,
      endtime: clickInfo.event.end
    });
    console.log(clickInfo);
    if (moment(clickInfo.start, 'YYYY-dd-mm', true).isValid()) {
      clickInfo.start.setHours(clickInfo.event.start.getHours() + 7)
      clickInfo.start.toISOString().slice(0, 19)

    }
    if (moment(events.endtime, 'YYYY-dd-mm', true).isValid()) {
      events.endtime.setHours(events.endtime.getHours() + 7)
      events.endtime.toISOString().slice(0, 19)

    }

  }

  //edit notes
  function handleEdit() {
    selectInfo.event.setProp('title', events.title);
    selectInfo.event.setStart(events.startime);
    selectInfo.event.setEnd(events.endtime);
    selectInfo.event.setExtendedProp('description', events.description);
    setShow(false);
  }

  //create new note
  function handleCreateNewNote(selectInfo) {
    setCheckAction(true);
    setShow(true);
    setSelectInfo(selectInfo);
    setEvents({
      title: '',
      description: '',
      startime: selectInfo.start,
      endtime: selectInfo.start
    });
  }

  //add event new notes
  function handleSave() {
    setShow(false);
    if (selectInfo) {
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect()

      if (events.title != '') {
        if (moment(events.startime, 'YYYY-dd-mm', true).isValid()) {
          events.startime.setHours(events.startime.getHours() + 7)
          events.endtime.setHours(events.endtime.getHours() + 7)
          events.startime.toISOString().slice(0, 19)
          events.endtime.toISOString().slice(0, 19)
        }

        calendarApi.addEvent({
          id: createEventId(),
          title: events.title,
          start: events.startime,
          end: events.endtime,
          extendedProps: {
            description: events.description
          }
        })
      }
    }

  }


  //close notes
  function handleClose(e) {
    setShow(false);
  }
  //delete notes
  function handleDelete() {
    if (selectInfo) {
      selectInfo.event.remove()
    }
    setShow(false);

  }

  //render timetable
  function renderEventContent(eventInfo) {
    return (
      <Tooltip title={<Typography color="white">{eventInfo.event.extendedProps.description}</Typography>}
        placement="top" arrow>
        <div>
          <b>{eventInfo.timeText} &nbsp;</b>
          <i>{eventInfo.event.title}</i> <br />
        </div>
      </Tooltip>

    )
  }

  return (
    <div className="time-table" style={{ 'width': '80%', 'margin': '0 auto' }}>
      <h3 className="mt-5 mb-5 text-center title">Lịch học và ghi chú</h3>
      <div className="calendar-notes mb-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'

          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleCreateNewNote}
          eventClick={handleOpenModalUpdate}
          eventContent={renderEventContent}// custom render function
          eventsSet={handleEvents}


        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='title-notes-modal'>
          {
            checkAction ? 
            (<Modal.Title>Create New Note</Modal.Title>) : (<Modal.Title>Edit Note</Modal.Title>)
          }
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <div className="mt-2 mb-2">
                <h6>Title</h6>
                <TextField fullWidth label="Title" variant="outlined" value={events.title} onChange={handleChange('title')} />
                <h6>Desription</h6>
                <TextField fullWidth label="Title" variant="outlined" value={events.description} onChange={handleChange('description')} />
              </div>
            </Col>
            <Col xs="6">
              <div className="">
                <h6>Startime Event</h6>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Startime"
                    value={events.startime}
                    onChange={handleChangeTime('startime')}
                  />
                </LocalizationProvider>
              </div>
            </Col>
            <Col xs="6">
              <div className="">
                <h6>Endtime Event</h6>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Endtime"
                    value={events.endtime}
                    onChange={handleChangeTime('endtime')}
                  />
                </LocalizationProvider>
              </div>
            </Col>
          </Row>



        </Modal.Body>
        <Modal.Footer>

          {
            checkAction ?
              (
                <div className="d-flex flex-row-reverse bd-highlight">
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" className="saveChange" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              ) : (
                <Row>

                  <Col xs="3">
                    <Button variant="primary" className="saveChange" onClick={handleDelete}>
                      <DeleteIcon></DeleteIcon>
                    </Button>
                  </Col>

                  <Col xs="9">
                    <div className="d-flex flex-row-reverse bd-highlight">
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="primary" className="saveChange" onClick={handleEdit}>
                        Edit
                      </Button>
                    </div>
                  </Col>

                </Row>
              )
          }


        </Modal.Footer>
      </Modal>

    </div>
  )
}









