import React from "react";


const Home =  () => { {
      return (
        <div>
          <div className="template">
            <h2>Templates</h2>
            <h6>Select A Template to get Started</h6>
          </div>
          <main>
            <div className="grid-container">
              <div className="grid-item grid-item-1"><img src="resume.jpg" alt="resume" /></div>
              <div className="grid-item grid-item-2"><img src="resume2.jpg" alt="resume" /></div>
              <div className="grid-item grid-item-3"><img src="resume3.jpg" alt="resume" /></div>
              <div className="grid-item grid-item-4"><img src="resume4.jpg" alt="resume" /></div>
            </div>
          </main>
        </div>
      );
    }
}

export default Home;