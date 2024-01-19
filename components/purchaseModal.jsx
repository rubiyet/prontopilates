import Link from "next/link";
import { BiShareAlt } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";

export default function PurchaseModal({
  showPurchaseModal,
  setShowPurchaseModal,
}) {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-80 justify-center items-center flex ${
        showPurchaseModal ? "" : "hidden"
      }`}
    >
      <div className="w-[400px]">
        <div className="h-[120px] bg-[#5B6391] flex items-center justify-end p-5">
          <div className="text-[#5B6391] bg-white p-3 rounded-full text-2xl">
            <BiShareAlt />
          </div>
        </div>
        <div className="h-[550px] bg-white p-8 overflow-auto flex flex-col space-y-5">
          <span className="text-[30px] font-bold leading-[35px] text-[#330F2F]">
            Pronto Casual
          </span>
          <span className="text-md text-[#330F2F]">
            5 classes/mo. ($11/class). 23 classes daily. No loin.
          </span>

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-6 text-[#856f82]">
              Casual Member
            </span>
            <span className="text-lg leading-6 text-[#856f82]">
              5 Class credits
            </span>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter Promo Code here"
              className="w-full border border-[#adb1c8] rounded-md py-1.5 px-3 italic focus:outline-none"
            />
            <button className="text-[#adb1c8] rounded-md px-6 py-1.5 border-[#adb1c8] border">
              Apply
            </button>
          </div>
          <div className="flex flex-col space-y-2 text-[#8c91b2] text-[17px]">
            <hr className="border-[#eae7ea]" />
            <div className="flex justify-between">
              <span className="text-[#856f82]">Subscription every 1 month</span>
              <span className="text-[#856f82]">$50.00</span>
            </div>
            <hr className="border-[#eae7ea]" />
            <div className="flex justify-between">
              <span className="text-[#856f82]">GST (10%)</span>
              <span className="text-[#856f82]">$5.00</span>
            </div>
            <hr className="border-[#eae7ea]" />
            <div className="flex justify-between font-bold">
              <span className="text-[#856f82]">Total to pay today</span>
              <span className="text-[#856f82]">$55.00</span>
            </div>
            <hr className="border-[#eae7ea]" />
          </div>
          <Link href="/login" className="bg-[#5b6391] text-white rounded-md py-3 px-4 flex justify-between items-center text-lg">
            <span>Purchase</span> <FaAngleRight />
          </Link>
          <div className="p-6">
          </div>
        </div>
      </div>
    </div>
  );
}
