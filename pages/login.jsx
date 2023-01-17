import React from 'react'
import Login from '../components/Login'

// import { useSession, signIn, signOut } from 'next-auth/react'
// const login = () => {
//     const {data: session} = useSession()
//     if (session){
//         return (
//             <div>
//                 <p>Welcome, {session.user.name}</p>
//                 <img src = {session.user.image} style = {{borderRadius: '50px'}}></img>
//                <button onClick={()=>signOut()}>LogOut</button>
//             </div>  
//           )
//     }else{
//         return (
//             <div>
//                 <Portfolio/>
//                 <p>Normal Login</p>
            
//                 <p>Please login</p>
//                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> signIn()}>SignIn</button>
//                 </div>
//           )
//     }
// }
const login = () => {
    return (
      <div>
          {/* <Hero heading='Restaurant and bars recommender' message='This is an assignment to create recommendation app.' /> */}
          <Login heading='Scroll down to login' message='You are only one step away.'></Login>
      </div>
    )
  }
export default login