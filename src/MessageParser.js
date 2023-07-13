import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MessageParser = ({ children, actions }) => {
 
  var name = useSelector((state) => state.enrollment.name);
  const age = useSelector((state) => state.enrollment.age);
  const show = useSelector((state) => state.enrollment.got);
  const dispatch = useDispatch();

  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }


    else if (!isNaN(Number(message))){
      actions.handleAge(message);
    }

    else if (message.replace(/\s+/g, "").toLowerCase()==="gotit"|| message.replace(/\s+/g, "").toLowerCase()==="gotit." || message.replace(/\s+/g, "").toLowerCase()==="gotit!" || message.replace(/\s+/g, "").toLowerCase()==="gotit?" || message.replace(/\s+/g, "").toLowerCase()==="gotit," || message.replace(/\s+/g, "").toLowerCase()==="got" || message.replace(/\s+/g, "").toLowerCase()==="got." || message.replace(/\s+/g, "").toLowerCase()==="got!" || message.replace(/\s+/g, "").toLowerCase()==="got?" || message.replace(/\s+/g, "").toLowerCase()==="got," || message.replace(/\s+/g, "").toLowerCase()==="okay"|| message.replace(/\s+/g, "").toLowerCase()==="okay." || message.replace(/\s+/g, "").toLowerCase()==="okay!" || message.replace(/\s+/g, "").toLowerCase()==="okay?" || message.replace(/\s+/g, "").toLowerCase()==="okay," || message.replace(/\s+/g, "").toLowerCase()==="ok" || message.replace(/\s+/g, "").toLowerCase()==="ok." || message.replace(/\s+/g, "").toLowerCase()==="ok!" || message.replace(/\s+/g, "").toLowerCase()==="ok?" || message.replace(/\s+/g, "").toLowerCase()==="ok," || message.replace(/\s+/g, "").toLowerCase()==="yes" || message.replace(/\s+/g, "").toLowerCase()==="yes." || message.replace(/\s+/g, "").toLowerCase()==="yes!" || message.replace(/\s+/g, "").toLowerCase()==="yes?" || message.replace(/\s+/g, "").toLowerCase()==="yes," || message.replace(/\s+/g, "").toLowerCase()==="yup" || message.replace(/\s+/g, "").toLowerCase()==="yup." || message.replace(/\s+/g, "").toLowerCase()==="yup!" || message.replace(/\s+/g, "").toLowerCase()==="yup?" || message.replace(/\s+/g, "").toLowerCase()==="yup,"){
        actions.handleGot2(message);
    }
    else if (typeof message === "string") {
      actions.handleName(message);
    }
   
 
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
