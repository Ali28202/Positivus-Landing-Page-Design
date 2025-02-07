"use client";
import { motion } from "framer-motion";
import MassageBubble from "./MassageBubble";
import { useState, useEffect } from "react";
let x = 0;
export default function Testimonials() {
	const [location, setLocation] = useState([1, 0, 0, 0, 0]);
	let nextOpacity = location[4] ? "0.4" : "1";
	let backOpacity = location[0] ? "0.4" : "1";
	let nextCursor = nextOpacity == "0.4" ? "default" : "pointer";
	let backCursor = backOpacity == "0.4" ? "default" : "pointer";
	const [width, setWidth] = useState(1440);
	useEffect(() => {
		const handleResize = () => {
			setLocation([1, 0, 0, 0, 0]);
			x = 0;
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<>
			<div className="sm:px-24 py-8 flex sm:flex-row flex-col justify-center items-center sm:justify-start gap-8">
				<h1 className="bg-[#B9FF66] rounded-lg p-1 font-medium text-4xl w-fit">
					Testimonials
				</h1>
				<p className="text-base xl:w-[32rem] w-96 sm:text-left text-center">
					Explore Real-Life Examples of Our Proven Digital Marketing Success
					through Our Case Studies
				</p>
			</div>
			<div className="w-[85%] xl:mx-24 mx-8 my-12 bg-[#191a23] xl:h-[40rem] h-[35rem] rounded-[35px] overflow-hidden xl:py-20 py-8">
				<motion.div className="flex gap-12 w-max" animate={{ x: x }}>
					<MassageBubble />
					<MassageBubble />
					<MassageBubble />
					<MassageBubble />
					<MassageBubble />
					<MassageBubble />
				</motion.div>
				<div className="flex xl:gap-5 gap-12 xl:mt-32 mt-14 xl:mx-80 justify-center xl:justify-between items-center">
					<img
						src="arrow-right-white.png"
						alt="arrow-left"
						className="rotate-180 cursor-pointer"
						onClick={() => {
							if (x != 0 && width == 1440) x += 655;
							else if (x != 0 && width < 500) x += 400;
							setLocation((location) => {
								let idx = location.indexOf(1);
								if (idx == 0) {
									return location;
								} else {
									location = location.toSpliced(idx, 1, 0);
									location[idx - 1] = 1;
								}
								return location;
							});
						}}
						style={{ opacity: backOpacity, cursor: backCursor }}
					/>
					<div className="flex gap-5 h-4">
						<img
							src={
								location[0]
									? "navigation-box-green.png"
									: "navigation-box-white.png"
							}
							alt="navigate box"
						/>
						<img
							src={
								location[1]
									? "navigation-box-green.png"
									: "navigation-box-white.png"
							}
							alt="navigate box"
						/>
						<img
							src={
								location[2]
									? "navigation-box-green.png"
									: "navigation-box-white.png"
							}
							alt="navigate box"
						/>
						<img
							src={
								location[3]
									? "navigation-box-green.png"
									: "navigation-box-white.png"
							}
							alt="navigate box"
						/>
						<img
							src={
								location[4]
									? "navigation-box-green.png"
									: "navigation-box-white.png"
							}
							alt="navigate box"
						/>
					</div>
					<img
						src="arrow-right-white.png"
						alt="arrow-left"
						className="cursor-pointer"
						onClick={() => {
							if (x != -2620 && width == 1440) x -= 655;
							else if (x != -1600 && width < 500) x -= 400;
							setLocation((location) => {
								let idx = location.indexOf(1);
								if (idx == 4) {
									return location;
								} else {
									location = location.toSpliced(idx, 1, 0);
									location[idx + 1] = 1;
								}
								return location;
							});
						}}
						style={{ opacity: nextOpacity, cursor: nextCursor }}
					/>
				</div>
			</div>
		</>
	);
}
