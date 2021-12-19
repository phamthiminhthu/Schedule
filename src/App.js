import './App.css';
import { Container } from 'react-bootstrap';
import Example from './components/createSchedule/CreateSchedule';
import HeaderMain from './components/header/headerMain/HeaderMain';
import Footer from './components/footer/Footer';
import Reviews from './components/reviews/Reviews';
import News from './components/news/News';
import Speaker from './components/speaker/Speaker';
import ScheduleDemo from './components/scheduleDemo/ScheduleDemo'
import Introduce from './components/introduce/Introduce'
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

import ShowListScheduleMaker from './components/showListScheduleMaker/ShowListScheduleMaker';


function App() {
  return (
    <div className="App">
      <Container>


        {/* <HeaderMain />
      <Introduce />
      <Speaker />

      <ScheduleDemo />
      <Reviews />
      <News />
      <Footer /> */}




        {/* <HeaderSecond/>  */}
        {/* <HeaderHasAuthor/> */}
        {/* <CalendarNotes /> */}



        {/* <Register/> */}
        {/* <SignIn/> */}
        {/* <Profile/> */}

        {/* <CalendarNotes/>  */}
        {/* <CreateSchedule/> */}

        {/* <ListSubject /> */}
        {/* <AddSubject /> */}
        {/* <AddSubjectByTeacher/> */}
       
        <ShowListScheduleMaker/>
      </Container>
    </div>
  );
}

export default App;
