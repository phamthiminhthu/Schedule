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

export default function CalendarNotes() {

  CalendarNotes.propTypes = {
    onSubmit: propTypes.func,

  }
  CalendarNotes.defaultProps = {
    onSubmit: null,
  }


  const [weekendsVisible, setweek] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([])
  const [show, setShow] = useState(false);

  const [valueTime, setValueTime] = React.useState(new Date());
  const [valueTime2, setValueTime2] = React.useState(new Date());
  const [title, setTitle] = React.useState('');

  const [selectInfo, setSelectInfo] = React.useState('');

  const [timeStart, setTimeStart] = React.useState('');
  const [timeEnd, setTimeEnd] = React.useState('');


  function handleShow(selectInfo) {
    setShow(true);
    setSelectInfo(selectInfo);
  }

  function handleSave() {
    setShow(false);
    if (selectInfo) {
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect()
      let dateClick = selectInfo.startStr;
      setTitle('');

      if (title != '') {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: valueTime.toISOString().slice(0, 19),
          end: valueTime2.toISOString().slice(0, 19)
        })
      }
    }

  }

  function handleClose(e) {
    setShow(false);
    console.log("abc", valueTime.toISOString().slice(0, 19));
  }

  function handelValueTitle(e) {
    setTitle(e.target.value);
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText} &nbsp;</b>
        <i> {eventInfo.event.title}</i>
      </>
    )
  }

  const handleEvents = (events) => {
    setCurrentEvents(events)
  }

  const [clickInfo, setClickInfo] = useState('');
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  function handleShowDelete(clickInfo) {
    setShowDelete(true);
    setClickInfo(clickInfo)
  }
  function handleEventClick() {
    
    if (clickInfo) {
      clickInfo.event.remove()
    }
    setShowDelete(false)

  }

  

  return (
    <div className="time-table" style={{ 'width': '80%', 'margin': '0 auto' }}>
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
        select={handleShow}
        eventClick={handleShowDelete}
        eventContent={renderEventContent} // custom render function
        eventsSet={handleEvents}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-2 mb-3">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={title} onChange={handelValueTitle} />
          </div>
          <div className="mt-2 mb-3">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={valueTime}
                onChange={(newValueTime) => {
                  setValueTime(newValueTime);
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="mt-2 mb-3">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={valueTime2}
                onChange={(newValueTime2) => {
                  setValueTime2(newValueTime2);
                }}
              />
            </LocalizationProvider>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="saveChange" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEventClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}









