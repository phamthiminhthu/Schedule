import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Table, Nav, Row, Col } from 'react-bootstrap';
import './ChildAddClass.scss';


export default function ChildAddClass() {



    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="form-add-class p-3 mb-4 mt-3">
            <h3 className="title text-center mb-5 mt-3">Thông tin lớp học</h3>
            <Table >
                <tbody>
                    <tr>
                        <td className="name-input-class">Mã lớp học phần : </td>
                        <td className="input-form-class"><TextField label="Mã lớp" variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td className="name-input-class">Người giảng dạy : </td>
                        <td className="input-form-class"> <TextField label="Teacher" variant="outlined" /></td>

                    </tr>
                    <td className="name-input-class"> WeekDays : </td>
                    <td>

                        <Box>
                            <FormControl fullWidth>
                                <InputLabel>Day</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >

                                    <MenuItem value="2">Thứ 2</MenuItem>
                                    <MenuItem value="3">Thứ 3</MenuItem>
                                    <MenuItem value="4">Thứ 4</MenuItem>
                                    <MenuItem value="5">Thứ 5</MenuItem>
                                    <MenuItem value="6">Thứ 6</MenuItem>
                                    <MenuItem value="7">Thứ 7</MenuItem>
                                    <MenuItem value="8">Chủ Nhật</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </td>
                    <tr>

                    </tr>
                    <tr>
                        <td className="name-input-class">Thời gian bắt đầu : </td>
                        <td className="startime-input">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Startime"
                                    value={startTime}
                                    onChange={(newValue) => {
                                        setStartTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </td>
                        <td className="name-input-class">Thời gian kết thúc : </td>
                        <td >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="EndTime"
                                    value={endTime}
                                    onChange={(newValue) => {
                                        setEndTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </td>

                    </tr>

                </tbody>
            </Table>

            <div>

            </div>

            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link>Edit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Save</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Delete</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    )

}
