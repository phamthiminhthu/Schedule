import React from 'react';
import { TextField, Button } from '@mui/material';
import { Table } from 'react-bootstrap';
import './AddSubjectByTeacher.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChildAddClass from './ChildAddClass';




export default function AddSubjectByTeacher() {

    const [countClass, setCountClass] = React.useState(0);
    const [listClass, setListClass] = React.useState([]);
    function addClassSubject() {
        // setCountClass(countClass++)
        // const newList = [...listClass]
        // newList.push(<childComponent />)
        // setListClass(newList)
    }
    return (
        <div className="create-new-subject text-center">
            <h3 className="mt-4 mb-4 text-center">Create New Subject</h3>
            <div className="form-create-new-subject">
                <Table size="sm">
                    <tbody>
                        <tr>
                            <td class="name-input">Mã học phần : </td>

                            <td><TextField style={{ 'width': '400px' }} label="Mã học phần" variant="outlined" /></td>


                        </tr>
                        <tr>
                            <td class="name-input">Tên học phần :</td>

                            <td> <TextField style={{ 'width': '400px' }} label="Tên học phần" variant="outlined" /></td>


                        </tr>
                        <tr>
                            <td class="name-input">Tín chỉ học phần: </td>
                            <td>
                                <TextField
                                    type="number"
                                    inputProps={{ inputMode: 'numeric', min: "0", pattern: '[0-9]*' }}
                                    label="Tín chỉ học phí"
                                    variant="outlined" />
                            </td>

                        </tr>
                        <tr>

                            <td class="name-input">Tín chỉ học phí :</td>
                            <td>
                                <TextField
                                    type="number"
                                    inputProps={{ inputMode: 'numeric', min: "0", pattern: '[0-9]*' }}
                                    label="Tín chỉ học phí"
                                    variant="outlined" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="add-class-of-subject">
                    <div className="d-flex flex-row-reverse bd-highlight mb-3">
                        <Button variant="contained" onClick={addClassSubject} className="bd-highlight" ><AddCircleOutlineIcon></AddCircleOutlineIcon> &nbsp; Add Class</Button>
                    </div>

                    <div>
                        <ChildAddClass />
                    </div>
                </div>
            </div>

        </div>



    )
}