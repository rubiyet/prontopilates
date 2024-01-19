import { useRouter } from "next/router";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCreditCard } from "react-icons/fa";



export default function EditCard() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState();
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState();

  return (
    <>
      <div className="h-screen w-[screen] flex flex-col items-center justify-center">
        <div className="w-96 m-auto">
          <div className="h-[80px] bg-[#5B6391] flex items-center justify-between px-10 text-white text-xl font-medium leading-[82px]">
            <span>Edit Card</span>
            <RxCross2
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="border shadow p-10 space-y-8">
            <div className="grid grid-cols-2 gap-6 gap-x-16">
              <div className="flex col-span-2 items-center">
                <FaCreditCard className="text-[#b49da5] text-xl border-b border-[#d8d5d8] h-full" />
              <input
                type="number"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
              />
              </div>
              <input
                type="text"
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                className="border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
              />
              <input
                type="number"
                placeholder="CVC"
                value={cardCvc}
                onChange={(e) => setCardCvc(e.target.value)}
                className="border-b border-[#d8d5d8] py-3 px-3 focus:outline-none text-[#330f2f] placeholder:text-[#aea1ac]"
              />
            </div>
            <button
            disabled={!cardNumber || !cardExpiry || !cardCvc}
              className="bg-[#5b6391] text-white rounded-md py-2.5 flex justify-center items-center text-xl space-x-3 w-full disabled:bg-[#cdcacd]"
              onClick={() => setRegistrationSuccess(true)}
            >
              <span>Save Card</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
