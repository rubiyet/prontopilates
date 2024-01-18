import { BiShareAlt } from "react-icons/bi";

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
          <span className="text-[30px] font-bold leading-[35px] text-[#330F2F]">Pronto Casual</span>
          <span className="text-md text-[#330F2F]">   5 classes/mo. ($11/class). 23 classes daily. No loin.
</span>

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-6 text-[#856f82]">Casual Member</span>
            <span className="text-lg leading-6 text-[#856f82]">5 Class credits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
