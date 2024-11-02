"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function BoxOurWorkingProcess({ key, title, index }) {
	const [isOpen, setIsOpen] = useState(() => false);
	const variants = {
		open: { backgroundColor: "#b9ff66" },
		closed: { backgroundColor: "#f3f3f3" },
	};
	return (
		<>
			<motion.div
				className="xl:mx-24 mx-auto w-[85%] bg-[#f3f3f3] rounded-[45px] xl:px-16 xl:py-12 py-7 px-7 border-[#191A23] border-[1px] border-b-4"
				key={key}
				animate={isOpen ? "open" : "closed"}
				transition={{ duration: 0.3 }}
				variants={variants}
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center xl:gap-8 gap-4">
						<span className="font-medium xl:text-6xl text-3xl">
							0{index + 1}
						</span>
						<h1 className="font-medium xl:text-3xl text-lg">{title}</h1>
					</div>
					<img
						src={isOpen ? "minus-button.png" : "plus-button.png"}
						alt="button"
						className="cursor-pointer xl:w-fit w-8"
						onClick={() => setIsOpen((isOpen) => !isOpen)}
					/>
				</div>
				{isOpen && (
					<div className="flex flex-col w-full">
						<span className="w-full h-0.5 bg-black xl:my-10 my-5"></span>
						<p className="xl:text-lg text-base">
							During the initial consultation, we will discuss your business
							goals and objectives, target audience, and current marketing
							efforts. This will allow us to understand your needs and tailor
							our services to best fit your requirements.
						</p>
					</div>
				)}
			</motion.div>
		</>
	);
}
