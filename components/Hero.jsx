"use client";
import { motion } from "framer-motion";
export default function Hero() {
	const images = [
		"amazon-logo.png",
		"dribble-logo.png",
		"hubspot-logo.png",
		"notion-logo.png",
		"netflix-logo.png",
		"zoom-logo.png",
	];
	const desktopFinalPosition = -1340;
	const mobileFinalPosition = -1245;
	return (
		<>
			{/* Desktop */}
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
					<button className="bg-[#191a23] text-white rounded-xl py-4 px-8 hover:bg-[#b9ff66] border-[1px] border-black hover:text-black duration-300">
						Book a consultation
					</button>
				</div>
				<img src="hero-img.png" alt="heroimg" />
			</div>
			<div className="overflow-hidden bg-white w-[85%] mx-24">
				<motion.div
					className="xl:flex hidden items-center justify-center gap-24 py-10 mix-blend-luminosity px-20 w-max"
					animate={{ x: [0, desktopFinalPosition] }}
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
			</div>
			{/* Mobile */}
			<div className="xl:hidden flex">
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
					<button className="bg-[#191a23] text-xl text-white rounded-xl py-4 w-full hover:bg-[#b9ff66] border-[1px] border-black hover:text-black duration-300">
						Book a consultation
					</button>
				</div>
			</div>
			<div className="overflow-hidden bg-white w-[380px] ml-5">
				<motion.div
					className="xl:hidden flex items-center justify-center gap-20 pt-10 mix-blend-luminosity px-20 w-max"
					animate={{ x: [0, mobileFinalPosition] }}
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
				<motion.div
					className="xl:hidden flex items-center justify-center gap-20 ml-4 pt-8 mix-blend-luminosity px-20 w-max"
					animate={{ x: [0, mobileFinalPosition] }}
					transition={{
						ease: "linear",
						duration: 30,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 0,
					}}
				>
					{[images[2], images[3], images[4], images[5], ...images].map(
						(t, index) => {
							return <img src={t} alt={t} key={index} />;
						}
					)}
				</motion.div>
			</div>
		</>
	);
}
