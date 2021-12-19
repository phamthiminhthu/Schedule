import './App.css';
import { Container } from 'react-bootstrap';
import Example from './components/createSchedule/CreateSchedule';

import HeaderSecond from './components/header/headerSecond/HeaderSecond';
import HeaderHasAuthor from './components/headerHasAuthor/HeaderHasAuthor';
import CalendarNotes from './components/CalendarNotes/CalendarNotes';
import Register from './screens/register/Register';
import SignIn from './screens/signIn/SignIn';
import CreateSchedule from './components/createSchedule/CreateSchedule';
import ListSubject from './components/listSubject/ListSubject';
import AddSubject from './components/addSubject/AddSubject';
import AddSubjectByTeacher from './components/addSubjectByTeacher/AddSubjectByTeacher';
// import Profile from './components/profile/Profile';
// import HeaderHome from './components/header/'
import ShowListScheduleMaker from './components/showListScheduleMaker/ShowListScheduleMaker';
import CreateSubject from './screens/createSubject/CreateSubject';
import Home from './screens/home/Home';

function App() {
  
  return (
    <div className="App">
       <Home/>
      <Container>


        {/* <HeaderMain />
      <Introduce />
      <Speaker />

      <ScheduleDemo />
      <Reviews />
      <News />
      <Footer /> */}




        {/* <HeaderSecond/>  */}
       
        {/* <CalendarNotes /> */}



        {/* <Register/> */}
        {/* <SignIn/> */}
        {/* <Profile/> */}

        {/* <CalendarNotes/>  */}
        {/* <CreateSchedule/> */}

        {/* <ListSubject /> */}
        {/* <AddSubject /> */}
        {/* <AddSubjectByTeacher/> */}
       
        {/* <ShowListScheduleMaker/> */}
        {/* <HeaderHome/> */}

       
      </Container>
    </div>
  );
}

export default App;
