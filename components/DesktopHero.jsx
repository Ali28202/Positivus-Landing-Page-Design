"use client";
import {
	motion,
	animate,
	useMotionValue,
	AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";
export default function DesktopHero(e) {
	const images = [
		"amazon-logo.png",
		"dribble-logo.png",
		"hubspot-logo.png",
		"notion-logo.png",
		"netflix-logo.png",
		"zoom-logo.png",
	];
	// const x = useMotionValue(0);
	// useEffect(() => {
	// 	let control;
	// 	let finalposition = -window.innerWidth / 2 - 8;
	// 	control = animate(x, [0, finalposition], {
	// 		ease: "linear",
	// 		duration: 25,
	// 		repeat: Infinity,
	// 		repeatType: "loop",
	// 		repeatDelay: 0,
	// 	});
	// 	return () => control.stop();
	// }, [x]);
	return (
		<>
			<div className="xl:flex hidden justify-between px-24">
				<div className="flex items-start flex-col gap-8">
					<h1 className="w-[32rem] text-6xl font-medium leading-tight">
						Navigating the digital landscape for success
					</h1>
					<p className="w-[30rem] text-lg mt-5">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<button className="bg-black text-white rounded-xl py-4 px-8">
						Book a consultation
					</button>
				</div>
				<img src="hero-img.png" alt="heroimg" />
			</div>
			{/* Animation Still Have problem */}
			{/* <motion.div
				className="flex items-center justify-center gap-20 py-10"
				ref={ref}
				style={{ x: x }}
			>
				{[...images, ...images].map((t, index) => {
					return (
						<>
							<img
								src={t}
								alt={t}
								key={index}
								className="mix-blend-luminosity"
							/>
						</>
					);
				})}
			</motion.div> */}
		</>
	);
}
