"use client";
import { motion } from "framer-motion";
import BoxCaseStudies from "./BoxCaseStudies";
import { useRef } from "react";
export default function CaseStudies() {
	const texts = [
		`For a local restaurant, we implemented a targeted PPC campaign
		that resulted in a 50% increase in website traffic and a 25%
		increase in sales.`,
		`For a B2B software company, we developed an SEO strategy that
		resulted in a first page ranking for key keywords and a 200%
		increase in organic traffic.`,
		`For a national retail chain, we created a social media marketing
		campaign that increased followers by 25% and generated a 20%
		increase in online sales.`,
	];
	const ref = useRef(null);
	return (
		<div className="overflow-hidden">
			<div className="sm:px-24 py-12 flex sm:flex-row flex-col justify-center items-center sm:justify-start gap-8">
				<h1 className="bg-[#B9FF66] rounded-lg p-1 font-medium text-4xl w-fit">
					Case Studies
				</h1>
				<p className="text-base xl:w-[32rem] w-96 sm:text-left text-center">
					Explore Real-Life Examples of Our Proven Digital Marketing Success
					through Our Case Studies
				</p>
			</div>
			{/* Desktop */}
			<div className="xl:flex hidden items-center justify-center bg-[#191a23] w-[85%] mx-24 my-10 py-16 px-12 rounded-[35px]">
				<div className="flex gap-16">
					<EachCase text={texts[0]} />
					<span className="bg-white/75 w-[2px]"></span>
					<EachCase text={texts[1]} />
					<span className="bg-white/75 w-[2px]"></span>
					<EachCase text={texts[2]} />
				</div>
			</div>
			{/* Mobile */}
			<div className="ml-3" ref={ref}>
				<motion.div
					className="flex w-max gap-4"
					drag="x"
					dragConstraints={ref}
					onMeasureDragConstraints={console.log}
				>
					{texts.map((t) => (
						<BoxCaseStudies text={t} key={t} />
					))}
				</motion.div>
			</div>
		</div>
	);
}
function EachCase({ text }) {
	return (
		<div className="flex flex-col gap-5 w-72">
			<p className="text-lg text-white">{text}</p>
			<button className="flex items-center gap-3">
				<h2 className="text-xl block text-[#b9ff66]">Learn More</h2>
				<img src={"arrow-green.png"} alt="arrow" />
			</button>
		</div>
	);
}
