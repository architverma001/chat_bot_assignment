import { createChatBotMessage } from "react-chatbot-kit";
import { createClientMessage } from 'react-chatbot-kit';
import GotIt from "./GotIt";
import Age from "./Age";
import Small from "./Small";

const botName = "Student_Bot"
const message = createClientMessage('Hello world!');
const handleclick = ()=>{
  createClientMessage('Got it!');
  createChatBotMessage('What is your name ?');
}
const config = {
  
    botName: botName,
    lang: "no",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",

      },
      //usemessagebox color change
    
      chatButton: {
        backgroundColor: "#5ccc9d",
      },
     

    },
    initialMessages: [
         
         createChatBotMessage(
          "Hello, Welcome to student info system!",
          {
            widget: 'GotIt',
            loading:true,
            delay: 1000,
           
           
          },
          setTimeout(()=>{

          },3000)
        ),
      ],
      widgets: [
        {
          widgetName: 'GotIt',
          widgetFunc: (handleclick) => <GotIt {...handleclick} />,
        },
        {
          widgetName: 'age',
          widgetFunc: (handleclick) => <Age {...handleclick} />,
        },

        {
          widgetName: 'small',
          widgetFunc: (handleclick) => <Small {...handleclick} />,
        },
       
      ],
}

export default config