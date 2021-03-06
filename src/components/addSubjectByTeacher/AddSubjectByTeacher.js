import React from 'react';
import { TextField, Button } from '@mui/material';
import './AddSubjectByTeacher.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Nav, Row, Col } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AddSubjectByTeacher() {

    const [listClass, setListClass] = React.useState(
        [{
            maLop: "",
            teacher: "",
            weekDays: "",
            startime: new Date(),
            endtime: new Date()
        }]
    );
    function addClassSubject() {
        const newList = [...listClass, {
            maLop: "",
            teacher: "",
            weekDays: "",
            startime: new Date(),
            endtime: new Date()
        }]
        setListClass(newList)
    }
    function deleteClassSubject(classSub) {
        const index = listClass.findIndex(x => x.id === classSub.id);
        if (index < 0) return;
        const newListClass = [...listClass];
        newListClass.splice(index, 1);
        setListClass(newListClass);

    }

   
    const handleEditFieldOfItem = (index, name) => e => {
        let newListClass = listClass.map((item, i) => {
            if (index === i) {
                return { ...item, [name]: e.target.value }
            } else {
                return item;
            }
        });
        setListClass(newListClass);
    }
    const handleEditFieldOfItemTime = (index, name) => e => {
        let newListClass = listClass.map((item, i) => {
            if (index == i) {
                return { ...item, [name]: e }
            } else {
                return item;
            }
        });
        setListClass(newListClass);
    }

    console.log(listClass);
    console.log(new Date());
    const showListClass = (listClass) => {

        return (
            <>
                {
                    listClass.map((item, index) => {
                        return (
                            <div className="form-add-class mb-4 mt-4" key={index}>
                                <h3 className="title text-center mb-3 mt-3">Th??ng tin l???p h???c {index + 1}</h3>

                                <div>
                                    <Row>
                                        <Col xs="2 mb-3">
                                            <p className="name-title-form">M?? l???p HP:</p>
                                        </Col>
                                        <Col xs="2">
                                            <TextField fullWidth label="M?? l???p" variant="outlined" value={item.maLop} onChange={handleEditFieldOfItem(index, 'maLop')} />
                                        </Col>
                                        <Col xs="2">
                                            <p className="name-title-form">Gi??o vi??n:</p>
                                        </Col>
                                        <Col xs="6">
                                            <TextField fullWidth label="Teacher" variant="outlined" value={item.teacher} onChange={handleEditFieldOfItem(index, 'teacher')} />
                                        </Col>
                                        <Col xs="2">
                                            <p className="name-title-form">WeekDays:</p>
                                        </Col>
                                        <Col xs="2">
                                            <Box>
                                                <FormControl fullWidth >
                                                    <InputLabel>Day</InputLabel>
                                                    <Select
                                                        fullWidth
                                                        labelId="demo-simple-select-label"
                                                        value={item.weekDays}
                                                        label="weekday"
                                                        className="form-select-week"
                                                        onChange={handleEditFieldOfItem( index, 'weekDays')}
                                                    >

                                                        <MenuItem value="2">Th??? 2</MenuItem>
                                                        <MenuItem value="3">Th??? 3</MenuItem>
                                                        <MenuItem value="4">Th??? 4</MenuItem>
                                                        <MenuItem value="5">Th??? 5</MenuItem>
                                                        <MenuItem value="6">Th??? 6</MenuItem>
                                                        <MenuItem value="7">Th??? 7</MenuItem>
                                                        <MenuItem value="8">Ch??? Nh???t</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Col>
                                        <Col xs="2">
                                            <p className="name-title-form">TG b???t ?????u:</p>
                                        </Col>
                                        <Col xs="2">
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <TimePicker
                                                    fullWidth
                                                    label="Startime"
                                                    value={item.startime}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    onChange={ handleEditFieldOfItemTime(index, 'startime')}
                                                />
                                            </LocalizationProvider>
                                        </Col>
                                        <Col xs="2">
                                            <p className="name-title-form">TG k???t th??c:</p>
                                        </Col>
                                        <Col xs="2">
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <TimePicker
                                                    fullWidth
                                                    label="EndTime"
                                                    value={item.endtime}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    onChange={handleEditFieldOfItemTime( index, 'endtime')}
                                                />
                                            </LocalizationProvider>
                                        </Col>
                                    </Row>


                                </div>

                                <div>

                                </div>

                                <Nav className="justify-content-end" activeKey="/home">
                                    <Nav.Item>
                                        <Nav.Link onClick={deleteClassSubject}><DeleteIcon /></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </div>
                        );
                    })

                }
            </>
        )
    }


    return (
        <div className="create-new-subject">
            <h3 className="mt-4 mb-4 text-center title">Create New Subject</h3>
            <div className="form-create-new-subject">
                <div className="form-input-subject">
                    <Row>
                        <Col xs="2">
                            <p className="name-title-form">M?? HP:</p>
                        </Col>
                        <Col xs="3 mb-3">
                            <TextField fullWidth label="M?? h???c ph???n" variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">T??n HP: </p>
                        </Col>
                        <Col xs="5">
                            <TextField fullWidth label="T??n h???c ph???n" variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">TC h???c ph???n: </p>
                        </Col>
                        <Col xs="2">
                            <TextField
                                fullWidth
                                type="number"
                                inputProps={{ inputMode: 'numeric', min: "0", pattern: '[0-9]*' }}
                                label="T??n ch???"
                                variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">TC h???c ph??: </p>
                        </Col>
                        <Col xs="2">
                            <TextField
                                fullWidth
                                type="number"
                                inputProps={{ inputMode: 'numeric', min: "0", pattern: '[0-9]*' }}
                                label="T??n ch???"
                                variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">H??? s??? ??i???m: </p>
                        </Col>
                        <Col xs="2">
                            <TextField
                                fullWidth
                                inputProps={{ min: "0", max: "1", pattern: '[0-1].[1-9]' }}
                                label="H??? s???"
                                variant="outlined" />
                        </Col>

                    </Row>
                </div>
                <div className="add-class-of-subject mt-4 mb-3">
                    <div className="d-flex flex-row-reverse bd-highlight mb-3">
                        <Button variant="contained" onClick={addClassSubject} className="bd-highlight" ><AddCircleOutlineIcon></AddCircleOutlineIcon> &nbsp; Add Class</Button>
                    </div>

                    <div>
                        {console.log(typeof listClass)}
                        {showListClass(listClass)}
                    </div>
                </div>
            </div>
            <div>
                <Button variant="contained">Save</Button>
            </div>

        </div>



    )
}