"use client";
import { useEffect, useRef, useState } from "react";
import { motion, animate, motionValue } from "framer-motion";
export default function BoxOurWorkingProcess({ key, title, index }) {
	const [isOpen, setIsOpen] = useState(() => false);
	let bgColor = isOpen ? motionValue("#B9FF66") : motionValue("#f3f3f3");
	const ref = useRef(null);
	const hasPageBeenRendered = useRef(true);
	useEffect(() => {
		if (hasPageBeenRendered.current) {
			return;
		}
		isOpen
			? animate(ref, { backgroundColor: [bgColor, "#f3f3f3"] }, { duration: 3 })
			: animate(
					ref,
					{ backgroundColor: [bgColor, "#B9FF66"] },
					{ duration: 3 }
			  );
		hasPageBeenRendered.current = true;
	}, [hasPageBeenRendered, ref, isOpen, bgColor]);
	return (
		<>
			<motion.div
				className="xl:mx-24 mx-auto w-[85%] rounded-[45px] xl:px-16 xl:py-12 py-7 px-7 border-[#191A23] border-[1px] border-b-4"
				style={{ backgroundColor: bgColor }}
				ref={ref}
				key={key}
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
						onClick={() => setIsOpen(!isOpen)}
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
