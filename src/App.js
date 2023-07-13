import './App.css';
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import { useDispatch, useSelector } from 'react-redux';
import GotIt from './GotIt';
import AgeDropdown from './Age';
import Small from './Small';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import FinalPage from './FinalPage';


function App() {
  const name = useSelector((state) => state.enrollment.name);
  const age = useSelector((state) => state.enrollment.age);
  console.log("Fetching from store",{name,age});
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<div className='right d-flex'>
          <h1 className='width-100'>Enroll now</h1>
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />


    </div>} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
