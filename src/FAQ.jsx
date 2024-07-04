import React, { useState } from 'react'
import './index.css'
import Jsx from './assets/jsx.png'
import Sample from './assets/sample.png'
import Event_cre from './assets/event-cre.png'
import List from './assets/list-in-rect.png'


const Quiz_Template = ({Question,Answer})=>{
    const [toggle,setToggle]=useState(false)
    return(
    <div className="faq">
    <div className="faq-head" onClick={()=>{setToggle(toggle==false?true:false)}}>{Question}</div>
    <div className={`faq-body ${toggle==true?"ans-visible":""}`}>{Answer}</div>
    </div>
    )
}

export const FAQ = () => {
   
  return (
    <>
        <div className="faq-container">
            <h2>React Interview Questions and Answers</h2>
            {
                data.map((item)=>{
                   return  <Quiz_Template key={item.Q_no} Question={item.Question} Answer={item.Answer}/>
                })
            }
        </div>
    </>
  )
}

// Sample Data
const data=[
    {
        Q_no:0,
        Question:"1. What is react?",
        Answer:<>
        ReactJS is a JavaScript library used to build reusable components for the view layer in MVC architecture.
        It is highly efficient and uses a virtual DOM to render components. <br />
        It works on the client side and is written in JSX.</>
    },
    {
        Q_no:1,
        Question:"2. Explain the MVC architecture?",
        Answer:<>The Model-View-Controller (MVC) framework is an architectural/design pattern that separates an application into three main logical components Model, View, and Controller. <br /> Each architectural component is built to handle specific development aspects of an application. It isolates the business, logic, and presentation layer from each other.
        </>
    },
    {
        Q_no:2,
        Question:"3. Explain the building blocks of React?",
        Answer:<>
        <p>The five main building blocks of React are:</p> <ul>
            <li>Components: These are reusable blocks of code that return HTML.</li>
            <li>JSX: It stands for JavaScript and XML and allows you to write HTML in React.</li>
            <li>rops and State: props are like function parameters and State is similar to variables.</li>
            <li>Context: This allows data to be passed through components as props in a hierarchy.</li>
            <li>Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.</li>
        </ul>
        </>
    },
    {
        Q_no:3,
        Question:"4. Explain props and state in React with differences",
        Answer:"Props are used to pass data from one component to another. The state is local data storage that is local to the component only and cannot be passed to other components."
    },
    {
        Q_no:4,
        Question:"5. What is virtual DOM in React?",
        Answer:<>React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.</>
    },
    {
        Q_no:5,
        Question:"6. What is JSX?",
        Answer:<>
        JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. All the React components are written in JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}. 
        <br /> <br />
        Example of JSX: The name written in curly braces { } signifies JSX <br />
        <img src={Jsx} style={{margin:"20px 20px", borderRadius:"5px"}} alt="jsx" />
        </>
    },{
        Q_no:6,
        Question:"7. What are components and their type in React?",
        Answer:<>
            A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. <br /> <br />
            In React, we mainly have two types of components: <br />
            <ul>
                <li>Functional Components: Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. </li>
                <li>Class Components: The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to another class component.</li>
            </ul>
        </>
    },
    {
        Q_no:7,
        Question:"8. How do browsers read JSX?",
        Answer:<>
        In general, browsers are not capable of reading JSX and only can read pure JavaScript. The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel.
        </>
    },
    {
        Q_no:8,
        Question:"9. Explain the steps to create a react application and print Hello World?",
        Answer:<>To install React, first, make sure Node is installed on your computer. After installing Node. Open the terminal and type the following command.
        <br /> <br /> <mark>npx create-react-app "Application_name"</mark> <br /> <p>Navigate to the folder.</p><mark>cd "Application_name"</mark>
        <p>This is the first code of ReactJS Hello World!</p> <img src={Sample} style={{borderRadius:"5px"}}   alt="Sample ractjs" />
        <p>Type the following command to run the application</p>
        <mark>npm start</mark>
        </>
    },
    {
        Q_no:9,
        Question:"10. How to create an event in React?",
        Answer:<>
        <p>To create an event write the following code.</p>
        <img src={Event_cre} style={{borderRadius:"5px"}}  alt="Event Creation" />
        </>
    },
    {
        Q_no:10,
        Question:"11. Explain the creation of a List in react?",
        Answer:<>
            <p>Lists are very useful when it comes to developing the UI of any website. Lists are mainly used for displaying menus on a website, for example, the navbar menu. To create a list in React use the map method of array as follows.</p>
            <img src={List} style={{borderRadius:"5px"}} alt="list in react js" />
        </>
    }
  ]

