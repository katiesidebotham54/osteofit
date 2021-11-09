import React, {useState} from 'react';
import '../styling/loginStyle.scss';
import '../styling/mainStyle.scss'
import { useHistory } from "react-router-dom";



const Auth = () => {
    let admin = "chris@osteofitllc.com";
    let history = useHistory();
    const [user, setUser] = useState("");
    const handleOnChange = (e) => {
        e.persist();
        setUser(e.target.value);
       
      }
    
      const handleOnSubmit = (e) => {
        e.preventDefault()
        if(user=== admin ) {
            history.push("/home");
        } else alert("This site is under construction. Please return at a later date!");
        
      }
return(
    <section>
        <div class="shape-container-login ">
            <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" xmlSpace="preserve" class="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>

    <div className = 'login-container'>
      <h1 className = "form-title">Login</h1>
      <form id="form" onSubmit={handleOnSubmit}>
      <div className = "username">
        <input
        placeholder="Username"
          onChange={handleOnChange}
        />
        </div>
        <br/>
        <button className = "btn btn-sm btn-primary" type="submit" >Login
        </button>
      </form>
    </div>
    </section>
)
}

export default Auth;