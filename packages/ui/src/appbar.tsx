"use client"
import { signIn, signOut } from "next-auth/react";
export  const Appbar = ({signedIn}:{signedIn:boolean}) => {
    return (
      <div className="flex border-b pb-3 justify-between m-4">
        <div className="text-2xl font-black">PayEasy</div>
        <div>
          <button
            onClick={() => signIn()}
            className="px-5 py-2 bg-black text-white rounded-2xl"
          >
            Signin
          </button>
          <button
            onClick={() => signOut()}
            className="px-5 py-2 bg-black text-white rounded-2xl"
          >
            Sign out
          </button>
        </div>
      </div>
    );
};


