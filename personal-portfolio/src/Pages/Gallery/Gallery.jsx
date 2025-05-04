import React from 'react'
import Navigation from '../../Components/Navigation'
import Article from '../../Components/Article'
import Element from '../../Components/About'
import './Gallery.css'

export default function Gallery() {


  const art1={
    title:'Black Jack', img: './src/assets/Gallery/blackjack.svg', icon:'./src/assets/Icons/javascript-js.svg', body:"Blackjack is a 2-player card game involving you and a Dealer. If either players' card total sum is greater than than 21, it is a bust and that player has lost that round. Winning is achieved by scoring higher than the dealer but not exceeding 21.", link:'https://github.com/BusyNate/BlackJack_III.git'
  }


  const art2 = {
    title: 'Campus Manager', 
    img: './src/assets/Gallery/Campus Manager.svg', 
    icon: './src/assets/Icons/python.svg', 
    body: 'Campus Manager is a desktop application built using Python Tkinter. This simple program that allows you to manage your campus. It allows you to add, edit, and delete students & lecturers. It also enables viewing of students and lecturers in a list form.', 
    link: 'https://github.com/BusyNate/Campus-Manager-Final.git'
  };

  const art3 = {
    title: 'Employee Manager', 
    img: './src/assets/Gallery/java-Employee Management.svg', 
    icon: './src/assets/Icons/java.svg', 
    body: 'Employee Management System is a desktop application built using Java. It is a simple program that allows you to manage your employees. It allows you to add, edit and delete employees. It also enables viewing of employees and their details in a table.', 
    link: 'https://github.com/BusyNate/Java-Swing-Application.git'
  };

  const art4 = {
    title: 'Employee Web Login', 
    img: './src/assets/Gallery/Web Login 1.svg', 
    icon: './src/assets/Icons/java.svg', 
    body: 'This application was built using Java Server Pages(JSP) to simulate employees logging into their company website. The employee either registers or logs in onto the web-app with their credentials, then are redirected to a Dashboard.', 
    link: 'https://github.com/BusyNate/Java-Swing-Servlet-and-JSP-project.git'
  };


const infoCard1 = {
  id:1,
  iconSrc:'./src/assets/Icons/grad.svg',
  text:"Belgium Campus ITversity graduate with expertise in building Web Applications using front-end and back-end frameworks, complemented by programming skills in Java and C#."
}

const infoCard2 = {
  id:2,
  iconSrc:'./src/assets/Icons/design.svg',
  text:"As a creative and tinkerer at heart, my true passion lies at the intersection of art and technology, where form meets function. Designing and building a brand is my aspiration."
}

const infoCard3 = {
  id:3,
  iconSrc:'./src/assets/Icons/share.svg',
  text:"My strengths include commendable leadership and analytical thinking skills, complemented by creativity, effective teamwork with peers and respect for seniors in the workplace."
}



  return (
    
        <div className="gallery-page">
      <Navigation />
      <div className="gallery-content-wrapper">
     
        <div className="left-panel">

          <h1>About Me</h1>
          <hr></hr>

            <img src='./src/assets/me-suit 1.png' id='me-id'></img>
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
