import './App.css';
import React , { useState} from 'react';

function App() {

  // const [firstName , setFirstName] = useState("");
  // const [lastName , setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event) {
  //   // console.log("printing First name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }


  // function changeHandler(event) {
  //   // console.log("printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  //  input tag me ek hi event listner se 3 no input ki value cahnge karna sikha ha

  const[formData , setFormData] = useState({firstName:"" ,
     lastName:"" , email :"" , comments :"" , invisible :true ,
      mode: "" , favCar :""});
  // console.log(formData);
  
  function changeHandler (event) {
    const {name ,value,checked,type} =event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData ,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value  // check karta ha checkbox checked ha ki nhi  
       }
    });
  }

  function submitHandler (event){

    event.preventDefault();
    // print 
    console.log("finally printing the entire form data ........");
    console.log(formData);
  }

  


  return (
    <div className="App">
         {/* <div> Ram ram ji</div> */}
         <form onSubmit={submitHandler}>
          <input text ="text" 
          placeholder='First name' 
          name="firstName"
          onChange={changeHandler}
          value ={FormData.firstName}  //*****  controlled components
          />

          <br/>
          

          <input text ="text" 
          placeholder='Last name' 
          name="lastName"
          onChange={changeHandler} 
          value ={FormData.lastName}  //*****  controlled components
          />
         <br/>

          <input text ="email" 
          placeholder='Enter your email here' 
          name="email"
          onChange={changeHandler} 
          value ={FormData.email}   //*****  controlled components
          />

          <br/>
          {/* add textarea in form */}
          <textarea
          placeholder='enter your comment here'
          name="comments"
          onChange={changeHandler}
          value={formData.comments}
          />

          <br/>
          {/* add check box in forms  */}

          <input
          type="checkbox"
          onChange={changeHandler}
          name ="invisible"
          id ="invisible" // id likne se text pr click krne pr bhi tick ho jata ha 
          checked={formData.invisible}
          />
          <label htmlFor='invisible'> Am I visible</label>

          <br/>

          {/* radio button in forms  */}

          {/* <input 
          type="radio"
          onChange={changeHandler}
          name="mode"   // agar dono radio button ka name same hoga to ek time pe keval ek hi click hoga 
          value="online-mode"
          id ="online-mode"
          checked ={formData.mode === "online-mode"}  // important ha ye hamesha likhna ha
          />
          <label htmlFor='online-mode'> Online Mode</label>

          <input 
          type="radio"
          onChange={changeHandler}
          name="mode"  // agar dono ko click karana ha to dono ke name different kr do
          value="offline-mode"
          id ="offline-mode"
          checked ={formData.mode === "offline-mode"}

          />
          <label htmlFor='offline-mode'> Offline Mode</label> */}

          <fieldset>
            <legend> Which Mode</legend>
            <input 
          type="radio"
          onChange={changeHandler}
          name="mode"   // agar dono radio button ka name same hoga to ek time pe keval ek hi click hoga 
          value="online-mode"
          id ="online-mode"
          checked ={formData.mode === "online-mode"}  // important ha ye hamesha likhna ha
          />
          <label htmlFor='online-mode'> Online Mode</label>

          <input 
          type="radio"
          onChange={changeHandler}
          name="mode"  // agar dono ko click karana ha to dono ke name different kr do
          value="offline-mode"
          id ="offline-mode"
          checked ={formData.mode === "offline-mode"}

          />
          <label htmlFor='offline-mode'> Offline Mode</label>

          </fieldset>

          <br/>

          {/* drop down menu */}
          <label htmlFor='favCar'>Tell me your Favourite Car </label>
          <select
          name='favCar'
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
          >
          <option value="Roylce Roice">Roylce Roice</option>
          <option value="Thar">Thar</option>
          <option value="BMW">BMW</option>
          <option value="fortuner">fortuner</option>
          <option value="scorpio">Scorpio</option>

          </select>

          <br/>


          {/* submit button */}

          {/* <input type='submit' value='submit'/> */}
          <button>Submit</button>


         </form>
    </div>



  );
}

export default App;
