import './App.css';
import { Container } from 'react-bootstrap';
import Example from './components/makeNotes/MakeNotes';
import HeaderMain from './components/header/headerMain/HeaderMain'
import HeaderSecond from './components/header/headerSecond/HeaderSecond';
import HeaderHasAuthor from './components/headerHasAuthor/HeaderHasAuthor';
import CalendarNotes from './components/CalendarNotes/CalendarNotes';
import Register from './screens/register/Register';
import SignIn from './screens/signIn/SignIn';
import CreateSchedule from './components/makeNotes/MakeNotes';
import AddSubject from './components/addSubject/AddSubject';
import AddSubjectByTeacher from './components/addSubjectByTeacher/AddSubjectByTeacher';
// import Profile from './components/profile/Profile';
//import HeaderHome from './components/header/'
import ShowListScheduleMaker from './components/showListScheduleMaker/ShowListScheduleMaker';
import CreateSubject from './screens/createSubject/CreateSubject';
import Home from './screens/home/Home';
import MyNotes from './screens/myNotes/MyNotes';
import Account from './screens/account/Account';
import MySchedule from './screens/mySchedule/MySchedule';
import SubjectList from './screens/listSubject/SubjectList';
import ScheduleMaker from './screens/scheduleMaker/ScheduleMaker';
import Footer from './components/footer/Footer';
import SpeakerPage from './screens/speaker/SpeakerPage';

function App() {

  return (
    <div className="App">
      {/* <HeaderHasAuthor /> */}
  {/* <HeaderSecond />
      <SpeakerPage />  */}
      {/* <Register/> */}
      {/* <SignIn/> */}
      {/* <HeaderMain /> */}
      {/* <Home /> */}
      <Container>



        {/* <Introduce />
      <Speaker />

      <ScheduleDemo />
      <Reviews />
      <News />
      */}

        {/* <MyNotes /> */}
        {/* <Account/> */}
        {/* <MySchedule /> */}
        {/* <SubjectList/> */}
        {/* <ScheduleMaker/> */}

        {/* <HeaderSecond/>  */}

        <CalendarNotes />


        


        {/* <Profile/> */}

        {/* <CalendarNotes/>  */}
        {/* <CreateSchedule/> */}

        {/* <ListSubject /> */}
        {/* <AddSubject /> */}
        {/* <AddSubjectByTeacher/> */}

        {/* <ShowListScheduleMaker/> */}
        {/* <HeaderHome/> */}


      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
