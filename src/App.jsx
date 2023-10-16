
import { useState } from 'react'
import './App.css'

function App() {
  // form Data
const [formData, setFormData] = useState({
  username: "",
  password: ""
});
// setting validation
const [loggedIn,setLoggedIn]= useState(false);
// setting error message
const [error, setError] = useState("");

// handeling data of form on every changes
const handleOnChange= (e)=>{
  setFormData({...formData, [e.target.name]: e.target.value})
}

// form submission function
const handleSubmit= (e)=>{
  e.preventDefault();
  if(formData.username==="random" && formData.password==="random"){
    setLoggedIn(true);
  }else{
    setLoggedIn(false);
    setError("Please enter valid login and password.")
  }
}

  return (
    <>
      <h1>Login Page</h1>
      {/* showing error message */}
      {error && <h2>{error}</h2>}
      {
        loggedIn ? <h2>Welcome, {formData.username}</h2> 
        :
        <form >
          {/* username */}
          <label htmlFor="username">Username</label>
          <input name='username' type="text" placeholder='username' id='username' value={formData.username} onChange={(e)=>handleOnChange(e)}/>
          {/* password feild */}
          <label htmlFor="password">Password</label>
          <input name='password' type="password" placeholder='password' id='password' value={formData.password} onChange={(e)=>handleOnChange(e)}/>

          <button onClick={handleSubmit}>Submit</button>
        </form>
      }
      
    </>
  )
}

export default App
