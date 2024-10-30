"use client";
import { motion } from "framer-motion";
export default function MassageBubble() {
	return (
		<>
			{/* Desktop */}
			<motion.div className="xl:flex hidden flex-col" initial={{ x: -350 }}>
				<div className="bg-[url('/massage-bubble.png')] bg-no-repeat relative h-72 w-[38rem]">
					<p className="text-lg text-white w-[35rem] absolute pl-9 pt-8">
						"We have been working with Positivus for the past year and have seen
						a significant increase in website traffic and leads as a result of
						their efforts. The team is professional, responsive, and truly cares
						about the success of our business. We highly recommend Positivus to
						any company looking to grow their online presence."
					</p>
				</div>
				<div className="flex flex-col pl-20">
					<h1 className="text-xl text-[#b9ff66]">John Smith</h1>
					<h2 className="text-lg text-white">Marketing Director at XYZ Corp</h2>
				</div>
			</motion.div>
			{/* Mobile */}
			<motion.div className="xl:hidden flex flex-col pl-4">
				<div className="bg-[url('/massage-bubble-mobile.png')] bg-no-repeat relative h-[22rem] w-[21rem]">
					<p className="text-base text-white w-[19rem] absolute pl-8 pt-8">
						"We have been working with Positivus for the past year and have seen
						a significant increase in website traffic and leads as a result of
						their efforts. The team is professional, responsive, and truly cares
						about the success of our business. We highly recommend Positivus to
						any company looking to grow their online presence."
					</p>
				</div>
				<div className="flex flex-col pl-16">
					<h1 className="text-lg text-[#b9ff66] font-semibold">John Smith</h1>
					<h2 className="text-base text-white">
						Marketing Director at XYZ Corp
					</h2>
				</div>
			</motion.div>
		</>
	);
}
