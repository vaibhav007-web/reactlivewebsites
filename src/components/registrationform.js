import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [MiddleName, setMiddleName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [courses, setcourses] = useState(null);
    const [Gender, setGender] = useState(null);
    const [Address, setAddress] = useState(null);

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
   
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "middleName"){
            setMiddleName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "courses"){
            setcourses(value);
        }
        if(id === "Gender"){
            setGender(value);
        }
        if(id === "Address"){
            setAddress(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,MiddleName,lastName,courses,Gender,Address,email,password,confirmPassword);
    }








    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="middleName">
                  <label className="form__label" for="middleName">Middle Name </label>
                  <input className="form__input" type="text" id="MiddleName" placeholder="Middle Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text"  id="lastName"  className="form__input" placeholder="LastName"/>
              </div>
              <div className='courses'>
              <label className="form__label" for="courses">courses </label>
              <select name='course' required>

                <option value='1'>Btech</option>
                <option value='2'>Bcom</option>
                <option value='3'>Barch</option>
                <option value='4'>Mba</option>
                <option value='adse'selected>Select</option>
                </select>
              </div>
              <div className="radio-Gender">
              <label className="form__label" for="Gender">Gender </label>
              <input type="radio" id="Male" className="form__input" placeholder="Male"/>Male
              <input type="radio" id="FeMale" className="form__input" placeholder="FeMale"/>FeMale
              <input type="radio" id="Other" className="form__input" placeholder="other"/>Other
              </div>
              <div className="Phone no">
                  <label className="form__label" for="Phone no">Phone no </label>
                  <input  type="number" id="n0" className="form__input" placeholder="phone no"/>
             </div>
               
            <div className="address">
                  <label className="form__label" for="address">Address </label>
                  <input  type="text" id="address" className="form__input" placeholder="Address"/>
             </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;