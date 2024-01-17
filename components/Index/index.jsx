import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

export default function Home() {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleToggle = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Prices",
      href: "/prices",
    },
    {
      name: "New to Pilates?",
      href: "/newtopilates",
    },
    {
      name: "Classes",
      href: "/classes",
    },
    {
      name: "Studios",
      href: "/studios",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const plans = [
    {
      name: "Casual Plan",
      massage: "Perfect for casual members booking one class/wk.",
      price: "$55/mo.",
      class: "5 Class Credits",
      classPrice: "$11 Per Class",
      roaming: "Add Roaming for $10/mo.",
      roamingMassage: "(access to all studios)",
      lockIn: "No Lock-In",
      lockInMassage: "(cancel with no fees)",
      button: "JOIN TODAY",
      buttonPrice: "$11 Per Class",
    },
    {
      name: "LIFESTYLE PLAN",
      massage: "Perfect for lifestyle members booking two or three classes/wk.",
      price: "$77/mo.",
      class: "11 Class Credits",
      classPrice: "$7 Per Class",
      roaming: "Add Roaming for $10/mo.",
      roamingMassage: "(access to all studios)",
      lockIn: "No Lock-In",
      lockInMassage: "(cancel with no fees)",
      button: "JOIN TODAY",
      buttonPrice: "$7 Per Class",
      mostPopular: "MOST POPULAR",
    },
    {
      name: "ENTHUSIAST PLAN",
      massage:
        "Perfect for enthusiast members booking three or more classes/wk..",
      price: "$99/mo.",
      class: "30 Class Credits",
      classPrice: "$5 Per Class",
      roaming: "Add Roaming for $10/mo.",
      roamingMassage: "(access to all studios)",
      lockIn: "No Lock-In",
      lockInMassage: "(cancel with no fees)",
      button: "JOIN TODAY",
      buttonPrice: "$5 Per Class",
    },
  ];

  const faq = [
    {
      question: "Do you offer trials?",
      answer:
        "Most people who want to try Pronto Pilates, choose our 5 class casual plan. It’s super affordable ($11 per class) and convenient with 23 classes daily from 5.15am till 10.30pm. No lock-in… pause or cancel any time. If you love it, simply stay on the casual plan or upgrade to the lifestyle or enthusiast plan and save!",
    },
    {
      question: "Just visiting for a short stay?",
      answer:
        "No problems. We don’t offer individual classes but you can grab our super affordable casual plan (5 classes) or lifestyle plan (11 classes) and cancel anytime.",
    },
    {
      question: "Can I cancel or pause my membership?",
      answer:
        "Yes, if you’re on a monthly membership, you can cancel anytime ahead of the next billing date. Or pause your membership for any reason (for up to two months each calendar year).",
    },
    {
      question: "How do I access the studio?",
      answer:
        "After you join, we’ll provide you with a link to download our studio key app (iOS or Android) so you can use your smartphone to both enter the studio and check in to your class.",
    },
    {
      question: "What if I’m a beginner?",
      answer:
        "We encourage beginners start with our orientation class and then book foundation classes until you build up your confidence and skill level.",
    },
    {
      question: "What should I bring to my first class?",
      answer:
        "You will need grip socks for your safety and for class etiquette. They’re available for purchase at the studio using the Pronto app store. We suggest you wear form fitting athletic clothing and bring a reusable water bottle.",
    },
    {
      question: "Will there be Pronto Pilates staff at the studio?",
      answer:
        "Just like 24/7 gyms, we’ve created the studio to run on our member community and technology. This helps us keep costs down and pass these savings on to you. Of course, we have safety and security measures in place and if you ever need to reach out to speak to someone, we’ll be available for you. And if you’re new to Pilates, you can get started with our orientation classes to learn about the equipment and how classes work.",
    },
    {
      question: "How often do I make membership payments?",
      answer: "Plan payments are monthly in advance.",
    },
    {
      question: "How often should I book classes?",
      answer:
        "3 – 4 classes per week is optimal. For those with more ambitious fitness goals, 4+ classes per week will get you in great shape in no time!",
    },
    {
      question: "Can I switch membership plans?",
      answer:
        "Yes, switch between monthly plans with 5 days notice before your next billing date.",
    },
    {
      question: "I am Pregnant. Can I still attend classes?",
      answer:
        "Pregnant clients may participate up until 12 weeks. Due to the nature of the studio, our classes are not appropriate to attend beyond this milestone.",
    },
    {
      question: "Can I join online?",
      answer:
        "Yes, please view our membership plans above. Choose your plan and follow the prompts. You’ll receive a welcome email with directions to start booking classes.",
    },
    {
      question: "What is your policy for booking cancellations and no-shows?",
      answer:
        "We understand that daily plans sometimes change. You can cancel any booked class two hours or more before the class without penalty. Inside of two hours or if you fail to show for the class, you will be charged a nominal $7 fee.",
    },
    {
      question: "Can I transfer my Pronto membership to another person?",
      answer:
        "For the safely and security of all members, we do not permit memberships to be transferred.",
    },
    {
      question: "How far in advance can I book classes?",
      answer:
        "You can book classes up to three weeks in advance. So, if you have favourite class days and times, you can lock them in with confidence.",
    },
    {
      question: "What are your studio hygiene (inc. Covid-safe) policies?",
      answer:
        "The studio is cleaned daily. And we require that members use the provided sanitary wipes to clean their reformer and exercise props after their class. This is an important responsibility for all members. A clean and safe studio environment is our #1 priority.",
    },
    {
      question: "Does my membership auto renew?",
      answer:
        "Yes, monthly memberships renew automatically. To pause or cancel your membership, you simply need to inform us 5 days ahead of your next billing date.",
    },
    {
      question: "What fitness level do I need to join?",
      answer:
        "There’s no prescribed fitness level. We encourage you to show careful judgement about the intensity of Pilates exercises you can endure. If you are unsure, please contact us to discuss this with one of our qualified instructors. If you are new to Pilates, we encourage you to start with our orientation class.",
    },
    {
      question: "How old do I have to be to join?",
      answer: "Members must be 16 years or older.",
    },
  ];

  const footerMenu = [
    {
      name: "Copyright",
      href: "copyright",
    },
    {
      name: "Legal",
      href: "/legal",
    },
    {
      name: "Privacy",
      href: "/privacy",
    },
    {
      name: "Sitemap",
      href: "/sitemap",
    },
  ];

  return (
    <div className="bg-white">
      <div className="h-[270px] bg-[#283051]">
        <div className="w-[62%] m-auto">
          <div className="flex justify-end">
            <button
              href="/about"
              className="uppercase text-lg leading-[20px] text-white bg-[#CE5D3A] py-2 px-4"
            >
              Prices
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Image
              src="/12.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[160px] w-[512px] object-cover"
            />
            <span className="text-white text-lg flex flex-col items-end pt-10">
              <div className="leading-[27px] italic space-x-1">
                <span>&quot;Our mission is</span>
                <b>Pilates for the People</b>... affordable, all-day
              </div>
              <div className="leading-[27px] italic">
                classes so now everyone can enjoy reformer Pilates!&quot;
              </div>{" "}
              <cite className="leading-[21.6px] text-[14.4px] font-bold">
                ~ The Pronto Team x
              </cite>
            </span>
          </div>
        </div>
      </div>
      <div className="border-b shadow">
        <div className="flex space-x-4 w-[62%] m-auto justify-center items-center">
          {menu.map((item, Index) => (
            <Link
              key={Index}
              href={item.href}
              className="text-[#717171] text-lg leading-[36px] px-[30px] hover:bg-[#FEEFE1] py-2 hover:text-[#DC7D3A]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-x-4 w-[62%] m-auto justify-center items-center text-[#444444]">
        <span className="uppercase text-4xl font-bold leading-[50px] py-6">
          PRONTO PLANS & PRICING
        </span>
        <span className="text-lg leading-[27px] pb-3">
          From $5 – $11 per class. Choose the “no lock-in” monthly plan that
          matches your lifestyle.
        </span>
        <span className="text-lg leading-[27px] pb-3">
          20+ expert-led classes daily from 5:15am till 10.30pm.
        </span>
        <span className="text-lg leading-[27px] pb-3">
          Simple, affordable and convenient!
        </span>
      </div>
      <div className="w-[62%] m-auto grid grid-cols-3 gap-8">
        {plans.map((item, Index) => (
          <div key={Index} className="border rounded-xl relative">
            {item.mostPopular && (
              <div className="absolute flex items-center justify-center w-full">
                <div className="uppercase bg-[#F04C23] text-white italic px-6 rounded-b-lg text-sm font-bold">
                  MOST POPULAR
                </div>
              </div>
            )}
            <div className="px-3 pt-10 pb-3 flex flex-col justify-center items-center space-y-5">
              <div className="text-2xl font-bold leading-[28.8px] text-[#656565]">
                {item.name}
              </div>
              <div className="flex flex-col w-full items-center justify-center space-y-3">
                <div className="text-lg leading-[27px] text-[#333333] text-center w-[280px]">
                  {item.massage}
                </div>
                <div className="px-2 w-full">
                  <div className="border-y border-dashed w-full border-[#AAAAAA]">
                    <div className="text-[23px] font-bold leading-[27.6px] text-[#CE5D3A] p-4 bg-[#F4F4F4] w-full text-center my-3">
                      {item.price}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg leading-[27px] text-[#333333]">
                    {item.class}
                  </span>
                  <span className="text-lg font-bold leading-[27px] text-[#CE5D3A]">
                    ({item.classPrice})
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg leading-[27px] text-[#333333]">
                    {item.roaming}
                  </span>
                  <span className="text-[15px] leading-[22.5px] text-[#333333]">
                    {item.roamingMassage}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg leading-[27px] text-[#333333]">
                    {item.lockIn}
                  </span>
                  <span className="text-[15px] leading-[22.5px] text-[#333333]">
                    {item.lockInMassage}
                  </span>
                </div>
                <div className="w-full bg-[#5b6391] hover:bg-[#F69174] text-center py-[10px] px-5 rounded-xl mt-5">
                  <div className="uppercase text-lg font-bold leading-[27px] text-white">
                    {item.button}
                  </div>
                  <div className="text-[15px] leading-[22.5px] text-white">
                    {item.buttonPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[62%] m-auto flex items-center justify-center text-[13px] leading-[19.5px] text-[#333333] pt-2">
        *Average $5/class. As low as $3.30/class for the “daily” enthusiast!
      </div>
      <div className="w-[62%] m-auto pt-12 pb-6">
        <div className="flex flex-col space-y-5">
          <div className=" uppercase text-[30px] leading-[39px] text-[#444444] tracking-widest	">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="space-x-1 text-lg leading-[27px] text-[#333333]">
            <span>
              If you have a question that we haven’t answered below, please
            </span>
            <Link
              href="/"
              className="text-[#2a5db0] font-bold hover:text-[#EF4B23] leading-[27px]"
            >
              contact us
            </Link>{" "}
            <span>and we’ll respond to you, pronto!</span>
          </div>
        </div>
        <div className="space-y-6 pt-5">
          {faq.map((item, index) => (
            <div key={index} className="">
              <div
                className="flex items-center cursor-pointer space-x-1 transition-all duration-500"
                onClick={() => handleToggle(index)}
              >
                <div className="text-[#666670]">
                  {expandedIndices.includes(index) ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleRight />
                  )}
                </div>
                <div className="text-lg leading-[27px] text-[#CE5D3A]">
                  {item.question}
                </div>
              </div>
              {expandedIndices.includes(index) && (
                <div className="text-[16px] leading-[23px] text-[#555555] border-b py-5 transition-all duration-500">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[62%] m-auto border-b border-dashed border-[#CE5D3A]"></div>
      <div className="w-[62%] m-auto flex items-center justify-center text-2xl leading-[28.8px] text-[#656565] py-7">
      Pronto Pilates Affordable Membership Plans

      </div>
      <div className="h-[75px] bg-[#161A2C]">
      <div className="w-[62%] m-auto flex items-end justify-end h-full space-x-2 pb-1">

        {footerMenu.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`text-white text-[12px] underline tracking-wider ${
              index !== footerMenu.length - 1 ? "pr-2 border-r" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
        </div>
</div>
    </div>
  );
}
