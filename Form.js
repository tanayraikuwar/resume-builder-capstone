import "./Form.css";


let Form = () => {
  const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  let formStepsNum = 0;

  nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      formStepsNum++;
      updateFormSteps();
      updateProgressBar();
    })
  })

  prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressBar();
    })
  })

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active")
  }

  function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      }
      else {
        progressStep.classList.remove("progress-step-active");
      }
    });

    const activeProgerss = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((activeProgerss.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }


  return (
    <>
      <form action="index/index.html" className="form" method="POST">
        <div className="progressbar">
          <div className="progress" id="progress" />
          <div className="progress-step progress-step-active" data-title="Intro" />
          <div className="progress-step" data-title="Contact" />
          <div className="progress-step" data-title="ID" />
          <div className="progress-step" data-title="Password" />
        </div>
        <div className="form-step form-step-active">
          <h3>Personal Information</h3>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder="Full Name" />
          </div>
          <div className="input-group">
            <label htmlFor="number">Contact Number</label>
            <input type="number" name="number" placeholder="Contact Number" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="address" name="address" placeholder="Address" />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="City Name" />
          </div>
          <div className="input-group">
            <label htmlFor="State">State</label>
            <input type="text" name="state" placeholder="Contact Number" />
          </div>
          <div className="input-group">
            <label htmlFor="number">Postal Code</label>
            <input type="number" name="number" placeholder="Postal Code" />
          </div>
          <div className="input-group">
            <label htmlFor="Obj">Objective</label>
            <input type="text" name="obj" placeholder="Objective" />
          </div>
          <div className>
            <a href="#" className="btn btn-next width-50 ml-auto">Next</a>
          </div>
        </div>
        <div className="form-step">
          <h3>Work Exprience</h3>
          <div className="input-group">
            <label htmlFor="jtitle">Job Title</label>
            <input type="text" name="jtitle" placeholder="JobTitle" />
          </div>
          <div className="input-group">
            <label htmlFor="org">Organization</label>
            <input type="text" name="org" placeholder="Organization" />
          </div>
          <div className="input-group">
            <label htmlFor="sdate">Start Date</label>
            <input type="date" name="sdate" placeholder="Starting Date" />
          </div>
          <div className="input-group">
            <label htmlFor="edate">End Date</label>
            <input type="date" name="edate" placeholder="Ending Date" />
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev">Previous</a>
            <a href="#" className="btn btn-next">Next</a>
          </div>
        </div>
        <div className="form-step">
          <h3>Education Details</h3>
          <div className="input-group">
            <label htmlFor="jtitle">Type</label>
            <select name="system">
              <option value="graduation">Graduation</option>
              <option value="post graduation">Post Graduation</option>
              <option value="hs">High School</option>
              <option value="phd">PHD</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="degree">Degree</label>
            <input type="text" name="degree" placeholder="Degree" />
          </div>
          <div className="input-group">
            <label htmlFor="sdate">Start Date</label>
            <input type="date" name="sdate" placeholder="Starting Date" />
          </div>
          <div className="input-group">
            <label htmlFor="edate">End Date</label>
            <input type="date" name="edate" placeholder="Ending Date" />
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev">Previous</a>
            <a href="#" className="btn btn-next">Next</a>
          </div>
        </div>
        <div className="form-step">
          <h3>Key Skill</h3>
          <input type="text" name="skills" id="keySkills" />
          <button onclick>Add skill</button>
          <div className="added-skills">
            <ul>
              <li>html</li>
              <li>css</li>
            </ul>
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev">Previous</a>
            <input type="submit" defaultValue="submit" className="btn" />
          </div>
        </div>
        {/* <button name="back">Back</button>
            <button name="next">Next</button> */}
      </form>
    </>
  )
}

export default Form;