import React, { useState } from "react";
import NavbarDark from "../components/NavbarDark";
import axios from "axios";
import { useRouter } from "next/router";

const Login1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  console.log(username, password)
  const router=useRouter()
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log('inside handle login')
    const formData={
        "username":username,
        "password":password
    }
    let response=await axios.post('http://127.0.0.1:8000/login',formData)
    console.log('response', response)
    if(response.data.message==="success"){
        setIsLogin(true)
        router.push('http://127.0.0.1:3000/search')
    }
    else{
        alert("Invalid credentials!")
    }
};

  return (
    <>
      <NavbarDark />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 mt-20">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:border-0"
                      placeholder="Username"
                      onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <label
                      for="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:border-0"
                      placeholder="Password"
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label
                      for="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                      onClick={(e) => {
                        handleLogin(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login1;
