import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ItemSchedule from './ItemSchedule';



export default function ShowListScheduleMaker() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className="show-list-schedule-maker">
            <h3 class="text-center mt-4 mb-4">All Schedule Maker</h3>
            <div className="show-list-schedule">
                <div className="">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Schedule Option One" value="1" />
                                    <Tab label="Schedule Option Two" value="2" />
                                    <Tab label="Schedule Option Three" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><ItemSchedule /></TabPanel>
                            <TabPanel value="2"><ItemSchedule /></TabPanel>
                            <TabPanel value="3"><ItemSchedule /></TabPanel>
                        </TabContext>
                    </Box>

                </div>


            </div>


        </div>
    )

}