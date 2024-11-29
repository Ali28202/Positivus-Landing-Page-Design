"use client";
import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
export default function Team() {
	const members = [
		{
			name: "John Smith",
			job: "CEO and Founder",
			resume:
				"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
			src: "member-1.png",
		},
		{
			name: "Jane Doe",
			job: "Director of Operations",
			resume:
				"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
			src: "member-2.png",
		},
		{
			name: "Michael Brown",
			job: "Senior SEO Specialist",
			resume:
				"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
			src: "member-3.png",
		},
		{
			name: "Emily Johnson",
			job: "PPC Manager",
			resume:
				"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
			src: "member-4.png",
		},
		{
			name: "Brian Williams",
			job: "Social Media Specialist",
			resume:
				"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
			src: "member-5.png",
		},
		{
			name: "Sarah Kim",
			job: "Content Creator",
			resume: `2+ years of experience in writing and editing
                    Skilled in creating compelling, SEO-optimized content for various industries`,
			src: "member-6.png",
		},
	];
	const [width, setWidth] = useState(1440);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<>
			<div className="sm:px-24 py-12 flex sm:flex-row flex-col justify-center items-center sm:justify-start gap-8">
				<h1 className="bg-[#B9FF66] rounded-lg p-1 font-medium text-4xl w-fit">
					Team
				</h1>
				<p className="text-base xl:w-[28rem] w-96 sm:text-left text-center">
					Meet the skilled and experienced team behind our successful digital
					marketing strategies
				</p>
			</div>
			<div className="xl:px-24 px-8 flex gap-8 flex-wrap">
				{width == 1440
					? members.map((m, index) => {
							return (
								<TeamMember
									key={index}
									name={m.name}
									job={m.job}
									resume={m.resume}
									src={m.src}
								/>
							);
					  })
					: members.slice(0, 4).map((m, index) => {
							return (
								<TeamMember
									key={index}
									name={m.name}
									job={m.job}
									resume={m.resume}
									src={m.src}
								/>
							);
					  })}
			</div>
			<div className="flex justify-end items-end xl:mx-32 xl:my-10 my-7 xl:px-0 px-8">
				<button className="bg-[#191a23] xl:w-fit w-full text-white rounded-xl py-4 px-8 xl:px-14 hover:bg-[#b9ff66] border-[1px] border-black hover:text-black duration-300">
					See All team
				</button>
			</div>
		</>
	);
}
