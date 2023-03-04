import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut, heading, message } from "next-auth/react";
import Address from "./Address";
import LoginCard from "./LoginCard";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
          <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">
              Welcome, {session.user.name}
            </h1>
            <h1 className="font-bold text-2xl p-4">
              {" "}
              Your latitude and longitude are:{" "}
            </h1>
            <Address></Address>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center"
              onClick={() => signOut()}
            >
              Logout
            </button>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
              <div className="w-full h-full col-span-2 md:col-span-3 row-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[-1]" />
          <div className="p-5 text-white z-[2] mt-[-10rem]">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl">{message}</p>
          </div>
          <LoginCard />
          {/* <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">Please login</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center"
              onClick={() => signIn()}
            >
              SignIn
            </button>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
              <div className="w-full h-full col-span-2 md:col-span-3 row-span-2"></div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
};

export default Login;
