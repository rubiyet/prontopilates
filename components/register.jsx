import { useState } from "react";
import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { GrStatusGood } from "react-icons/gr";

export default function Register() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState();
  const [monthOfBirth, setMonthOfBirth] = useState();
  const [yearOfBirth, setYearOfBirth] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleLogin = () => {
    setRegistrationSuccess(false);
    router.push("/login");
  };

  return (
    <>
      <div className="h-screen w-[screen] flex flex-col items-center justify-center">
        <div className="w-[40%] m-auto">
          <div className="h-[80px] bg-[#5B6391] flex items-center justify-between px-10 text-white text-xl font-medium leading-[82px]">
            <span>Create an account to proceed</span>
            <RxCross2
              className="cursor-pointer"
              onClick={() => router.back()}
            />
          </div>
          <div className="border shadow p-10 space-y-8">
            {registrationSuccess ? (
              <>
                <div className=" flex flex-col justify-center items-center space-y-5">
                  <GrStatusGood className="text-[150px] text-lime-500 text-" />
                  <span className=" font-medium text-lg">
                    Registration successful!
                  </span>

                  <button
                    href="/login"
                    className="w-full bg-[#5b6391] text-white rounded-md py-2.5 px-5 flex items-center justify-center text-lg space-x-3"
                    onClick={handleLogin}
                  >
                    Click to login
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className=" flex flex-col">
                  <span className="text-xl font-medium">
                    Fill in your details
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="">Already have an account?</span>
                    <button
                      href="/login"
                      className="text-[#949bc2] underline"
                      onClick={() => router.push("/")}
                    >
                      Log in instead
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 gap-x-16">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                  />
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
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
                    <div className="flex flex-col space-y-8">
                      <div className="flex flex-col space-y-4">
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
                  </div>
                  <div className="flex items-center justify-between">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repeat Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="border-b border-[#d8d5d8] w-full py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                    />
                    <div className="flex flex-col space-y-8">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                          <button
                            className="text-[#b49da5] focus:outline-none text-lg"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[13px] text-[#b5a8b3] space-y-5">
                    <span className="">
                      Password must be at least 8 characters in length with:
                    </span>
                    <ui className="space-y-.5">
                      <li className="">one uppercase letter (A-Z)</li>
                      <li className="">one lowercase letter (a-z)</li>
                      <li className="">one number (0-9)</li>
                      <li className="">one symbol (!@#$%^&amp;*-+=?)</li>
                    </ui>
                  </div>
                  <div className="flex  space-x-3">
                    <input
                      type="checkbox"
                      className="h-7 w-7 cursor-pointer"
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span className="text-[#b49da5]">
                      Keep me informed about upcoming events and special
                      promotions.
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="">Date of Birth</span>
                  <input
                    type="number"
                    value={dayOfBirth}
                    placeholder="DD"
                    className="w-16 border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                    onChange={(e) => setDayOfBirth(e.target.value)}
                  />
                  <input
                    type="number"
                    value={monthOfBirth}
                    placeholder="MM"
                    className="w-20 border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                    onChange={(e) => setMonthOfBirth(e.target.value)}
                  />
                  <input
                    type="number"
                    value={yearOfBirth}
                    placeholder="YYYY"
                    className="w-20 border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
                    onChange={(e) => setYearOfBirth(e.target.value)}
                  />
                </div>
                <div className="flex  space-x-3">
                  <input
                    type="checkbox"
                    className="h-6 w-5 cursor-pointer"
                    onChange={() => setAgreeTerms(!agreeTerms)}
                  />
                  <span className="text-[#b49da5] space-x-1">
                    <span>I agree to</span>
                    <button className="text-[#949bc2] underline" onClick={() => router.push("/")}>
                      Terms and conditions
                    </button>
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-[#5b6391] text-white rounded-md py-2.5 px-5 flex items-center text-lg space-x-3"
                    onClick={() => setRegistrationSuccess(true)}
                  >
                    <span>Submit</span> <FaAngleRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
