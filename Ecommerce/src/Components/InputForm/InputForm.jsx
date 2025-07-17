import React, { useContext } from 'react'
import './InputForm.css'
import { shopContext } from '../ShopContext/ShopContext'

const InputForm = () => {
  const { toggleShowForm,onclickSignup,validLogin,setValidlogin,onclickLoginDone,setCurrentUser  } = useContext(shopContext);

  const  submitForm = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)
    console.log(payload)
    try {
      const response = await fetch('https://localhost:7094/api/UserLogin/GetUserByEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        setValidlogin(false);
        const errText = await response.text();
        return;
      }
  
      const data = await response.json();
      setValidlogin(true);
      console.log('Server Response:', data.name);
     setCurrentUser(data.id);
      toggleShowForm(); 
  
    } catch (error) {
      console.error('Error:', error);
      setValidlogin(false);
    }
  }
  return (
    <div className="formDiv">
      <button className="closeBtnForm" onClick={() => toggleShowForm()}>×</button>

      <h2>Login</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" name='email' />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" name='password' />
       {!validLogin&& <div className="invaliddetails">
          <p>Invalid Email or Password</p>
        </div>} 

        <div className="buttonGroup">
  <button type="submit" onClick={() => onclickLoginDone()}>Login</button>
  <button type="button" onClick={() => onclickSignup()}>Signup</button>
</div>
  
      </form>
    </div>
  )
}

export default InputForm
