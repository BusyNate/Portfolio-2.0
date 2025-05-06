import React from 'react'
import Navigation from '../../Components/Navigation'
import Article from '../../Components/Article'
import Element from '../../Components/About'
import './Gallery.css'
import blackjackImg from '../../assets/Gallery/blackjack.svg';
import campusManagerImg from '../../assets/Gallery/Campus Manager.svg';
import employeeManagerImg from '../../assets/Gallery/java-Employee Management.svg';
import webLoginImg from '../../assets/Gallery/Web Login 1.svg';
import javascriptIcon from '../../assets/Icons/javascript-js.svg';
import pythonIcon from '../../assets/Icons/python.svg';
import javaIcon from '../../assets/Icons/java.svg';
import gradIcon from '../../assets/Icons/grad.svg';
import designIcon from '../../assets/Icons/design.svg';
import shareIcon from '../../assets/Icons/share.svg';
import meSuitImg from '../../assets/me-suit 1.png';

const art1 = {
  title: 'Black Jack', 
  img: blackjackImg, 
  icon: javascriptIcon, 
  body: "Blackjack is a 2-player card game involving you and a Dealer. If either players' card total sum is greater than 21, it is a bust and that player has lost that round. Winning is achieved by scoring higher than the dealer but not exceeding 21.", 
  link: 'https://github.com/BusyNate/BlackJack_III.git'
};

const art2 = {
  title: 'Campus Manager', 
  img: campusManagerImg, 
  icon: pythonIcon, 
  body: 'Campus Manager is a desktop application built using Python Tkinter. This simple program that allows you to manage your campus. It allows you to add, edit, and delete students & lecturers. It also enables viewing of students and lecturers in a list form.', 
  link: 'https://github.com/BusyNate/Campus-Manager-Final.git'
};

const art3 = {
  title: 'Employee Manager', 
  img: employeeManagerImg, 
  icon: javaIcon, 
  body: 'Employee Management System is a desktop application built using Java. It is a simple program that allows you to manage your employees. It allows you to add, edit and delete employees. It also enables viewing of employees and their details in a table.', 
  link: 'https://github.com/BusyNate/Java-Swing-Application.git'
};

const art4 = {
  title: 'Employee Web Login', 
  img: webLoginImg, 
  icon: javaIcon, 
  body: 'This application was built using Java Server Pages(JSP) to simulate employees logging into their company website. The employee either registers or logs in onto the web-app with their credentials, then are redirected to a Dashboard.', 
  link: 'https://github.com/BusyNate/Java-Swing-Servlet-and-JSP-project.git'
};

const infoCard1 = {
  id: 1,
  iconSrc: gradIcon,
  text: "Belgium Campus ITversity graduate with fundamental knowledge in building Web Applications using front-end and back-end frameworks, complemented by programming skills in Java and C#."
};

const infoCard2 = {
  id: 2,
  iconSrc: designIcon,
  text: "As a creative and tinkerer at heart, my true passion lies at the intersection of art and technology, where form meets function. Designing and building pro is my aspiration."
};

const infoCard3 = {
  id: 3,
  iconSrc: shareIcon,
  text: "My strengths include commendable leadership and analytical thinking skills, complemented by creativity, effective teamwork with peers and respect for seniors in the workplace."
};
export default function Gallery() {

  return (
    
        <div className="gallery-page">
      <Navigation />
      <div className="gallery-content-wrapper">
     
        <div className="left-panel">

          <h1>About Me</h1>
          <hr></hr>

            <img src={meSuitImg} id='me-id'></img>
          <div className='Element-container'>
            <Element aboutInfo={infoCard1}></Element>
            <Element aboutInfo={infoCard2}></Element>
            <Element aboutInfo={infoCard3}></Element>
          </div>

        </div>

        <div className="gallery-grid-container">
          <h1 className="gallery-title">Gallery</h1>
          <div className="gallery-grid">

            <Article article={art1}/>
            <Article article={art2}/>
            <Article article={art3}/>
            <Article  article = {art4}/>


            </div>
        </div>
      </div>
    </div>

  )
}
