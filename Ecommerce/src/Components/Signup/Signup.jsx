
import { useContext } from 'react'
import './Signup.css'
import { shopContext } from '../ShopContext/ShopContext'
const Signup=()=>{

const {onclickSignupCross,onclickSignupDone,setSuccessfullySignup,setShowSignup,setShowForm}=useContext(shopContext)
    const  submitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        try{
            const response = await fetch('https://localhost:7094/api/UserLogin/AddingNewUser',{

                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(payload)
                
                });
                if (!response.ok) {
                    const errText = await response.text();
                    
                    setSuccessfullySignup(false)
                    return;
                  }
                  
                  setSuccessfullySignup(true)
                  setTimeout(() => {
                    setShowSignup(false);
                    setShowForm(true);
                  }, 200);
                  console.log('Server Response:',payload.name);
                 

            }catch(error){
                console.error('Error:', error);
                setSuccessfullySignup(false)
            }
            
            }
         
            

return (
    <div className="formDiv">
      <button className="closeBtnForm" onClick={()=>onclickSignupCross()}>×</button>

      <h2>Sign up</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="Name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" name='name' />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" name='email' />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" name='password' />
      
    
        <button type="submit"onClick={()=>onclickSignupDone()}>Sign up</button>
      </form>
    </div>
  )
}
export default Signup