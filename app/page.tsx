"use client";
import Image from "next/image";

export default function Home() {
  const handleForm = async (data: any) => {
    console.log(data.get("password"));
    return null;
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-pink-200 font-serif">
      <div className="text-3xl mb-10">😎</div>
      <form
        action={handleForm}
        className="flex flex-col justify-center items-center  gap-6 *:h-10 *:w-80 *:border-black *:border-2 *:rounded-xl"
      >
        <input className=" p-2" type="email" placeholder="Email" name="email" />
        <input
          className=" p-2"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className=" p-2"
          type="password"
          placeholder="Password"
          name="email"
        />
        <button className="hover:bg-white">Login</button>
        <span className="font-bold text-red-600 text-xl"></span>
      </form>
    </div>
  );
}
