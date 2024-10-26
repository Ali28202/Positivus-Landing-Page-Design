"use client";
import { motion } from "framer-motion";

export default function MobileHero({ className }) {
	const images = [
		"amazon-logo.png",
		"dribble-logo.png",
		"hubspot-logo.png",
		"notion-logo.png",
		"netflix-logo.png",
		"zoom-logo.png",
	];
	const finalposition = -1005;
	return (
		<>
			<div className={`${className}`}>
				<div className="flex items-start flex-col gap-8 px-5">
					<h1 className="w-[22rem] text-4xl font-medium leading-tight">
						Navigating the digital landscape for success
					</h1>
					<img src="hero-img.png" alt="heroimg" className="w-96" />
					<p className="w-[24rem] text-base mt-5">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<button className="bg-[#191a23] text-xl text-white rounded-xl py-4 w-full">
						Book a consultation
					</button>
				</div>
			</div>
			<motion.div
				className={`${className} items-center justify-center gap-10 pt-10 mix-blend-luminosity px-20 w-max`}
				animate={{ x: [0, finalposition] }}
				transition={{
					ease: "linear",
					duration: 30,
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 0,
				}}
			>
				{[...images, ...images].map((t, index) => {
					return <img src={t} alt={t} key={index} />;
				})}
			</motion.div>
		</>
	);
}
