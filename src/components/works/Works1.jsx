import React from "react";
import "./work.css"
import ME1 from "../../assests/melecio1.jpg"
import ME2 from "../../assests/melecio2.jpg"
import ME3 from "../../assests/melecio3.jpg"
import ME4 from "../../assests/melecio24.jpg"
export default function App() {
  return (
    
      <div className="main-timeline-2">
        <h5>My Work</h5>
        <div className="timeline-2 left-2">
          
        <img src={ME1} alt="About Me" className='img'/>
            
            
              <h5 className="fw-bold mb-4">Autonomous sanitizing robot</h5>
              <h4 className="text-muted mb-4">
              Aduino IDE
              </h4>
              <h4 className="mb-0">
              This robot can sanitize the entire classroom and can follow a pattern created with a mobile app
              </h4>
           
          
        </div>
        <div className="timeline-2 right-2">
          
           
              
    <img src={ME2} alt="About Me" className='img'/> 
           
            
              <h5 className="fw-bold mb-4">Carta land</h5>
              <h4 className="text-muted mb-4">
              Construct2
              </h4 >
              <h4  className="mb-0">
              Carta Land was created by me using Construct 2. It is a platform game with a 
    classic design and a quiz to make it difficult to play.
              </h4 >
            
          
        </div>
        <div className="timeline-2 left-2">
       
        <img src={ME3} alt="About Me" className='img'/> 
            
              <h5 className="fw-bold mb-4">Inventory System</h5>
              <h4 className="text-muted mb-4">
              Visual Basic
              </h4>
              <h4 className="mb-0">
              This is my school project in the subject software design, and it is made in visual studio/vb.net.
              </h4>
           
        
        </div>
        <div className="timeline-2 right-2">
       
        <img src={ME4} alt="About Me" className='img'/>
              <h4 className="fw-bold mb-4">Group Portfolio</h4>
              <p className="text-muted mb-4">
              HTML, CSS
              </p>
              <p className="mb-0">
              This is only for my school project. I use xampp and visual studio code to create this web page.
              </p>
           
         
        </div>
      </div>
    
  );
}