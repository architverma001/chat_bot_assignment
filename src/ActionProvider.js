import React from 'react';
import { createChatBotMessage,createClientMessage } from 'react-chatbot-kit';
import { useDispatch,useSelector } from 'react-redux';
import { setAge, setGot, setName } from './store';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const actions = {
    setName: (name) => setName(name),
    setAge: (age) => setAge(age),
  };
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  

  const handleGreeting = () => {
    const botMessage = createChatBotMessage('Hello, how can I help you?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
const askName = () => {
    const botMessage = createChatBotMessage('Please enter your name!');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleName = (name) => {
    dispatch( dispatch(actions.setName(name)));
    const botMessage = createChatBotMessage("Please enter your age !",{
      widget: "age",

    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
 

  const handleAge = (age) => {
    dispatch( dispatch(actions.setAge(age)));
    const botMessage = createChatBotMessage(`Thank you for filling the details`);
   
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
 
    
        handleclose("Chat box will be closed in 5 seconds");
  };

  const handleAge2 = (age) => {
    dispatch( dispatch(actions.setAge(age)));
    const botMessage = createClientMessage(`${age}`);
    const botMessage2 = createChatBotMessage(`Thank you for filling the details`);
   
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));
 
    // call handleclose  5 times with interval of 1 second
 
    handleclose("Chat box will be closed in 5 seconds");

  };

  
 
  const handleGot = ()=>{
    const botMessage =  createClientMessage('Got it!');
    const botMessage1 = createChatBotMessage('Please enter your name!');
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
     
    dispatch(setGot(true));
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));
  };

   
  const handleGot2 = ()=>{
    const botMessage1 = createChatBotMessage('Please enter your name!'); 
    dispatch(setGot(true));
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));
  };

  const handleclose = (i)=>{
    const botMessage1 = createChatBotMessage(` ${i}`,{
      widget: "small",
    }); 
    dispatch(setGot(true));
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));

  };
  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          handleGreeting,
            handleAge: (age) => handleAge(age),
            handleName: (name) => handleName(name),
            handleGot: ()=>handleGot(),
            askName: ()=>askName(),
            handleAge2: (age) => handleAge2(age),
            handleGot2: ()=>handleGot2(),
            handleclose: ()=>handleclose(),
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
