import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const CaterSignin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  
  const handleusernameChange=(e)=>{
    setUsername(e.target.value);
  }

  const handlechangetologin=(e)=>{
      navigate("/caterapp/login");
  }

  const handleemailChange=(e)=>{
      setEmail(e.target.value);
  }

  const handlepassChange=(e)=>{
      setPass(e.target.value);
  }

  const handleSubmit= async ()=>{
    const toastId = toast.loading("Signing you In...")
    if(email===""||pass===""||username===""){
      toast.error("All fields must be filled", {id:toastId});
      return;
    }
    else{
      try {
        const data={
          name: username,
          gmail : email,
          pass :pass
        }
        const response =await axios.post("http://localhost:3000/api/v1/caterapp/signin", data);
        if (response.data.msg==="Success"){
          toast.success("Signed In", {id:toastId});
          navigate("/caterapp/login");
        }
        else{
          if(response.data.msg==="User already exists"){
            toast.error("User already exist", {id:toastId});
          }
          else{
            toast.error("Something went wrong!")
          }
        }
      } catch (error) {
        toast.error("Couldn't signin", {id:toastId});
        console.log("Error in signing in cater:", error);
        
      }
    }
  }

  return (
    <div className='w-screen min-h-screen p-5 bg-gray-300 flex flex-col justify-center items-center'>
      <div className="flex flex-col gap-5 items-center justify-center bg-white p-5 rounded-lg">
          <div className='text-2xl font-bold text-custom-blue-123'>
            Cater SignIn
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-96 rounded-md p-2.5 bg drop-shadow-md outline-none"
            value={username}
            onChange={handleusernameChange}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-96 rounded-md p-2.5 bg drop-shadow-md outline-none"
            value={email}
            onChange={handleemailChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-96 rounded-md p-2.5 bg drop-shadow-md outline-none"
            value={pass}
            onChange={handlepassChange}
          />
          <button
            className="bg-custom-blue-123 text-white p-2 rounded-md pl-4 pr-4 drop-shadow-md hover:bg-indigo-950"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p
            className="text-custom-blue-123 cursor-pointer hover:text-indigo-950"
            onClick={handlechangetologin}
          >
            Already a user? Try Login
          </p>
        </div>
      </div>

  )
}

export default CaterSignin
