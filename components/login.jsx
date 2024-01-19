import { useState } from "react";
import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-[screen] flex flex-col items-center justify-center">
      <div className="w-[40%] m-auto">
        <div className="h-[80px] bg-[#5B6391] flex items-center justify-between px-10 text-white text-xl font-medium leading-[82px]">
          <span>Log in to proceed</span>
          <RxCross2 className="cursor-pointer" onClick={() => router.back()} />
        </div>
        <div className="grid grid-cols-2 gap-12 p-10 border shadow">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <span className="text-[22px] leading-[25px] text-[#330f2f]">
                Log in
              </span>
              <span className="text-[#b49da5] leading-none">
                If you already have an account with us, you can use it to login
                here.
              </span>
            </div>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
              />
              <div className="flex items-center justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b border-[#d8d5d8] w-full py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                />
                <div className="flex items-center">
                  <button
                    className="text-[#b49da5] focus:outline-none text-lg"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-[#5b6391] text-white rounded-md py-2.5 px-5 flex items-center text-lg space-x-3">
                <span>Submit</span> <FaAngleRight />
              </button>
              <div className="flex justify-between items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                <span className="text-[#b49da5]">Keep me logged in</span>
              </div>
            </div>
            <button className="text-[#949bc2] underline" onClick={() => router.push("/")}>
              Forgot password?
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <span className="text-[22px] leading-[25px] text-[#330f2f]">
                Create account
              </span>
              <span className="text-[#b49da5] leading-none">
                First time with us? Please create an account to proceed.
              </span>
            </div>
            <div className="flex justify-between">
              <button className="bg-[#5b6391] text-white rounded-md py-2.5 px-5 flex items-center text-lg space-x-3" onClick={() => router.push("/register")}>
                <span>Register</span> <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
