"use client";
import { motion } from "framer-motion";
export default function DesktopHero({ className }) {
	const images = [
		"amazon-logo.png",
		"dribble-logo.png",
		"hubspot-logo.png",
		"notion-logo.png",
		"netflix-logo.png",
		"zoom-logo.png",
	];
	const finalposition = -1150;
	return (
		<>
			<div className={`${className} justify-between px-24`}>
				<div className="flex items-start flex-col gap-8">
					<h1 className="w-[32rem] text-6xl font-medium leading-tight">
						Navigating the digital landscape for success
					</h1>
					<p className="w-[30rem] text-lg mt-5">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<button className="bg-[#191a23] text-white rounded-xl py-4 px-8">
						Book a consultation
					</button>
				</div>
				<img src="hero-img.png" alt="heroimg" />
			</div>
			<motion.div
				className={`${className} items-center justify-center gap-16 py-10 mix-blend-luminosity px-20 w-max`}
				animate={{ x: [0, finalposition] }}
				transition={{
					ease: "linear",
					duration: 30,
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 0,
				}}
			>
				{[...images, ...images, ...images].map((t, index) => {
					return <img src={t} alt={t} key={index} />;
				})}
			</motion.div>
		</>
	);
}
