"use client";
// Imports
import Link from "next/link";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";
import {
  goalReached,
  sponsorAmount,
  barPercentage,
  sponsorGoalAmount,
} from "@@/data/SponsorData";
import Image from "next/image";

export default function SponsorComponent() {
  return (
    <div id="sponsorme" className="px-5 scroll-mt-24">
      {/* Main Heading */}
      <HeadingBasic
        heading="Sponsor Me"
        url="#sponsorme"
        description={
          <>
            <p>
              Hey there, I'm Ishank, a developer who loves making websites and
              video games. Right now, I'm exploring Unreal Engine after working
              with Unity. I use NextJS for websites, and I always share my
              projects for free because I love helping others but sometimes I
              make proprietary games, that's mostly for the safety of the
              players and some in-app purchases.
            </p>

            <br className={"select-none"} />

            <p>
              I'm excited about creating more awesome stuff, and sponsorship
              would really help me out. Whether it's financial support or
              working together on projects, your help would let me focus on
              making cool things and getting better at what I do. Your support
              means a lot to me as I keep growing in this creative journey.
            </p>

            <br className={"select-none"} />

            <p>
              If you sponsor me, you can join my{" "}
              <a
                href="/discord"
                target="_blank"
                className="text-[#0088CC] hover:underline outline-none"
              >
                <strong>Discord server</strong>
              </a>{" "}
              and share screenshots in the sponsor channel. It's a great way for
              us to chat and for me to show appreciation to all my sponsors.
              Thanks for considering teaming up with me!
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#1793D1] z-10" />

      {/* Note */}
      <HeadingBasic
        animationDelay={0.9}
        heading="Important Notice"
        id={"importantNotice"}
        url="#importantNotice"
        description={
          <>
            <p className={"font-bold"}>
              Currently, this page is down due to some banking issue. Thanks for coming here :)
            </p>
          </>
        }
      />

      {/* Transactions details */}
      <div className="hidden">
        {/* UPI Transaction */}
        <HeadingBasic
          animationDelay={0.9}
          heading="UPI Trasaction"
          id={"upiTransaction"}
          url="#upiTransaction"
        />

        {/* Payment img */}
        <ul className="justify-center items-center text-center mt-5 flex flex-wrap md:gap-9 gap-y-10">
          {/* Card */}
          {sponsorAmount.map((data, index) => (
            <motion.li
              key={index}
              initial={{ y: 50, scale: 0.4, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 1.2 + (index * 0.3) / 2 }}
              className="select-none"
            >
              <div className="bg-[#0A0C0E] border border-[#1793D1]/20 flex flex-col overflow-auto rounded-2xl hover:scale-[1.1] transition-all hover:shadow-xl shadow-md hover:shadow-[#1793D1]/50 shadow-[#1793D1]/50">
                {/* Image */}
                <Image
                  src={data.imageUrl}
                  alt={data.amount}
                  className="p-5 md:w-[320px] md:h-[413.5px] w-[373.3px] h-[482.5px]"
                />

                <div className="flex mb-5">
                  {/*

                Currently This button is not working due to some upi encoding. (Not my problem it's UPI Problem)
                
                */}
                  {/* Open UPI */}
                  {/* <Link
                  href={data.upiLink}
                  target="_blank"
                  className="m-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
                >
                  <button className={"outline-none"}>
                    <p className="md:text-lg text-base text-[#F6F9FC] py-1 px-3 border border-[#1793D1] rounded-full bg-[#0A0C0E] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#1793D1]/50 shadow-[#1793D1]/50 transition-all">
                      Open UPI
                    </p>
                  </button>
                </Link> */}

                  {/* Download qrcode */}
                  <Link
                    download
                    href={data.imageUrl.src}
                    target="_blank"
                    className="m-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
                  >
                    <button className={"outline-none"}>
                      <p className="md:text-lg text-base text-[#F6F9FC] py-1 px-3 border border-[#1793D1] rounded-full bg-[#050607] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#1793D1]/50 shadow-[#1793D1]/50 transition-all">
                        Download QR
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-full h-[.125rem] my-12 bg-[#1793D1]" />

        {/* Non UPI Transaction */}
        <HeadingBasic
          animationDelay={2.1}
          heading="Non UPI Trasaction"
          id={"nonUPITransaction"}
          url="#nonUPITransaction"
          description={
            <>
              <p className={"font-bold"}>
                Currently, you can only sponsor with UPI (in India). Non-UPI
                transactions like netbanking (for domestic and international
                currency) & crypto are coming soon. Thanks for waiting :)
              </p>
            </>
          }
        />
      </div>

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#1793D1]" />

      {/* Monthly goal */}
      <motion.div
        className={"px-8 flex flex-col"}
        // initial={{ y: -50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 2.7 }}
        id={"sponsorGoal"}
      >
        {/* Text */}
        <p className="text-[#F6F9FC] md:text-3xl text-2xl font-semibold mb-2 mx-auto">
          Monthly Goal: <span className={"text-[#0088CC]"}>{goalReached}</span>/
          <span className={"text-[#FF3333]"}>{sponsorGoalAmount}</span>₹{" "}
        </p>

        {/* Progress Bar */}
        <div
          className={
            "w-full border-4 border-[#3AB1F5] rounded-full shadow-[#3AB1F5]/50 shadow-md"
          }
        >
          <div
            className={`p-1 bg-[#FF3333] rounded-full`}
            style={{ width: `${barPercentage}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
