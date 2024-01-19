import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import PurchaseModal from "./purchaseModal";
import { useEffect } from "react";

export default function Plan() {
  const [reformer, setReformer] = useState();
  const [studio, setStudio] = useState();
  const [roaming, setRoaming] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handleClick = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    let timeout;
    if (submitted) {
      timeout = setTimeout(() => {
        setSubmitted(false);
        setShowPurchaseModal(true);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [submitted]);

  return (
    <>
    <div className="bg-[#283051] space-y-10 py-5 pb-10 h-screen overflow-auto">
      <div className="flex justify-center items-center">
        <Image
          src="/12.png"
          alt="Picture of the author"
          width={500}
          height={500}
          className="h-[160px] w-[500px] object-cover8"
        />
      </div>
      <div className="w-[37%] m-auto bg-white flex flex-col p-5 pb-10 rounded-lg space-y-3">
        <div className="flex flex-col items-center">
          <span className="text-[32px] font-bold text-[#595D64]">
            WELCOME TO PRONTO PILATES
          </span>
          <span className="text-[#595D64]">
            Select your preferences and click &quot;NEXT&quot;
          </span>
        </div>
        <div className="w-full m-auto border-b border-[#595D64]"></div>
        <div className="space-y-2">
          <div className="text-[#283A5C] text-lg space-x-1">
            <span>How did you first hear about Pronto Pilates?</span>
            <span className="text-[#FF0000] text-xl">*</span>
          </div>
          <div className="flex flex-col">
            <select className="border-[#CFD4D8] p-1.5 border-[3px] focus:outline-none text-[#595D64] text-xs">
              <option value=""></option>
              <option value="Social Media">Social Media</option>
              <option value="Google Search">Google Search</option>
              <option value="The Urban Lis">The Urban List</option>
              <option value="Referral">Referral (friend or family)</option>
              <option value="Studio Signage">Studio Signage</option>
              <option value="Other">Other</option>
            </select>
            <span className="text-[#595D64] text-sm">
              Use the dropdown to see your options.
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-[#283A5C] text-lg space-x-1">
            <span>New to reformer Pilates?</span>
            <span className="text-[#FF0000] text-xl">*</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <input
                type="radio"
                value="yes"
                checked={reformer === "yes"}
                onChange={(e) => setReformer(e.target.value)}
              />
              <label htmlFor="yes" className="text-[#595D64]">
                Yes
              </label>
            </div>
            <div className="flex space-x-2">
              <input
                type="radio"
                value="no"
                checked={reformer === "no"}
                onChange={(e) => setReformer(e.target.value)}
              />
              <label htmlFor="no" className="text-[#595D64]">
                No
              </label>
            </div>
          </div>
          {reformer === "yes" ? (
            <div className="flex flex-col border-2 border-black">
              <div className="flex flex-col items-center px-5 pb-6 pt-3 space-y-3">
                <div className="text-center font-bold text-[#595D64]">
                  Amazing... get started with our 40-min. orientation class!
                </div>
                <div className="italic text-center flex flex-col">
                  <span>
                    “The intro class was awesome. The instructor made everything
                    so easy to follow, and I even tried some basic moves. Loving
                    it!”
                  </span>
                  <span>~ Carol R.</span>
                </div>
              </div>
            </div>
          ) : null}
          {reformer === "no" ? (
            <div className="flex flex-col border-2 border-black">
              <div className="flex flex-col items-center px-5 pb-6 pt-3 space-y-3">
                <div className="text-center font-bold text-[#595D64]">
                  Perfect, get started with a 40-min. foundation or open class.
                </div>
                <div className="italic text-center flex flex-col">
                  <span>
                    “Pronto is amazing value and a really positive community.
                    Plus, I can literally book a class on the day...
                    there&apos;s always a spot available. Best deal ever!”
                  </span>
                  <span>~ Cindy T.</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="space-y-2">
          <div className="text-[#283A5C] text-lg space-x-1">
            <span>Select Your &quot;Home Studio&quot;</span>
            <span className="text-[#FF0000] text-xl">*</span>
          </div>
          <div className="flex flex-col">
            <select
              className="border-[#CFD4D8] p-1.5 border-[3px] focus:outline-none text-[#595D64] text-xs"
              onChange={(e) => setStudio(e.target.value)}
            >
              <option value=""></option>
              <option value="Applecross">Applecross (WA)</option>
              <option value="Cottesloe">Cottesloe (WA)</option>
              <option value="Claremont">Claremont (WA)</option>
              <option value="Mount Lawley">Mount Lawley (WA)</option>
              <option value="Mount Gravatt">Mount Gravatt (QLD)</option>
              <option value="North Lakes">North Lakes (QLD)</option>
              <option value="Richmond">Richmond (VIC)</option>
            </select>
            <span className="text-[#595D64] text-sm">
              Use the dropdown to see your options.
            </span>
          </div>
          {studio === "Applecross" ||
          studio === "Cottesloe" ||
          studio === "Claremont" ||
          studio === "Mount Gravatt" ||
          studio === "North Lakes" ? (
            <div className="flex flex-col items-center py-3 space-y-2">
              <div className="text-[#283A5C] text-lg space-x-1">
                <span>Add Studio Roaming ($10/mo.)</span>
                <span className="text-[#FF0000] text-xl">*</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-6">
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      value="yes"
                      checked={roaming === "yes"}
                      onChange={(e) => setRoaming(e.target.value)}
                    />
                    <label htmlFor="yes" className="text-[#595D64] text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      value="no"
                      checked={roaming === "no"}
                      onChange={(e) => setRoaming(e.target.value)}
                    />
                    <label htmlFor="no" className="text-[#595D64] text-sm">
                      No
                    </label>
                  </div>
                </div>
                <span className="text-[#595D64] text-xs text-center">
                  Book classes at any current and future Pronto studio <br />
                  (inc. with the Enthusiast plan).
                </span>
              </div>
            </div>
          ) : null}
          {studio === "Mount Lawley" && (
            <div className="flex flex-col items-center py-3 space-y-2">
              <span className="text-[#595D64] text-2xl font-bold"
              >WAITLIST - MOUNT LAWLEY</span>
              <span className="text-[#595D64]">
                Due to overwhelming demand, our Mount Lawley studio is at
                capacity.
              </span>
              <span className="text-[#595D64] bg-[#FFFF00]">
                But don&apos;t worry, we&apos;ve got a spot with your name on it coming
                soon!
              </span>
              <span className="text-[#595D64] text-center">
                Click &quot;NEXT&quot; below to place your name on our waitlist, and <span className=" underline">we&apos;ll
                notify you the moment an opening becomes available.</span>
              </span>
              <span className="text-[#595D64] text-center">                In the meantime, we invite you to join one of our other Perth
                studios. Switch to Mount Lawley later when your spot becomes
                available.
              </span>
            </div>
          )}
          {studio === "Richmond" && (
            <div className="flex flex-col items-center py-3 space-y-4">
              <span className="text-[#595D64] text-lg font-bold"
              >OUR NEW RICHMOND STUDIO OPENS EARLY 2024
              </span>
              <div className="text-[#595D64] flex flex-col">
              <span className="font-bold space-x-2 flex items-center">
                <FaAnglesRight />
                <Link href="/" className="underline bg-[#FFFF00] text-[#0000EE]">PRE-REGISTER HERE</Link>
                 <span>for 50% off your first month.</span><FaAnglesLeft /></span>
              <span className="text-[#595D64] text-xs text-center">
              (Plus Founding Member perks valued at $300+)
</span>
              </div>
              <span className="text-[#595D64] text-xs text-center">
              (Nothing to pay now... we&apos;ll email you a special promo code a few days before the grand opening!)
                </span>
                <span className="text-[#595D64]">
                The Pronto Team x
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-center pt-8">
          <button className="bg-[#F04C23] text-white text-lg py-1.5 px-2" onClick={handleClick}>
            {submitted ? "Submitting..." : "NEXT"}
          </button>
        </div>
      </div>
    </div>
    <PurchaseModal showPurchaseModal={showPurchaseModal} setShowPurchaseModal={setShowPurchaseModal} />
    </>
  );
}
