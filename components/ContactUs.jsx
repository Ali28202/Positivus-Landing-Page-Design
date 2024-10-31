"use client";
import { useState } from "react";

export default function ContactUs() {
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<div className="sm:px-24 py-12 flex sm:flex-row flex-col justify-center items-center sm:justify-start gap-8">
				<h1 className="bg-[#B9FF66] rounded-lg p-1 font-medium text-4xl w-fit">
					Contact Us
				</h1>
				<p className="text-base xl:w-80 w-96 sm:text-left text-center">
					Connect with Us: Let's Discuss Your Digital Marketing Needs
				</p>
			</div>
			<div className="bg-[#f3f3f3] xl:mx-24 mx-8 rounded-[50px] w-[85%] xl:pl-28 xl:px-0 px-5 xL:py-16 py-10 xl:flex xl:justify-between">
				<div>
					<div className="flex gap-10 px-4">
						<div className="flex xl:gap-5 gap-3 items-center">
							<img
								src={
									isActive
										? "radio-button-notactive.png"
										: "radio-button-active.png"
								}
								alt="radioactive"
								onClick={() => setIsActive(false)}
								className="cursor-pointer"
							/>
							<h1 className="xl:text-lg text-base">Say Hi</h1>
						</div>
						<div className="flex xl:gap-5 gap-3 items-center">
							<img
								src={
									isActive
										? "radio-button-active.png"
										: "radio-button-notactive.png"
								}
								alt="radionotactive"
								onClick={() => setIsActive(true)}
								className="cursor-pointer"
							/>
							<h1 className="xl:text-lg text-base">Get a Quote</h1>
						</div>
					</div>
					<div>
						<div className="flex flex-col gap-3 mt-10 mb-5">
							<h1 className="xl:text-base text-sm">Name</h1>
							<input
								type="text"
								className="xl:w-[30rem] w-full border-[1px] border-black rounded-2xl px-6 py-4"
								placeholder="Name"
							/>
						</div>
						<div className="flex flex-col gap-3 mb-5">
							<h1 className="xl:text-base text-sm">Email*</h1>
							<input
								type="email"
								className="xl:w-[30rem] w-full border-[1px] border-black rounded-2xl px-6 py-4"
								placeholder="Email"
							/>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="xl:text-base text-sm">Message*</h1>
							<textarea
								className="xl:w-[30rem] w-full xl:h-48 h-36 border-[1px] border-black rounded-2xl px-6 pt-6"
								placeholder="Message"
							/>
						</div>
						<button className="xl:block hidden bg-[#191a23] text-xl text-white rounded-xl py-4 xl:w-[30rem] w-full mt-8 hover:bg-[#b9ff66] border-[1px] border-black hover:text-black duration-300">
							Send Message
						</button>
					</div>
				</div>
				<img
					src="contactus-img.png"
					alt="contactus"
					className="xl:block hidden"
				/>
			</div>
			<button className="block xl:hidden bg-[#191a23] text-xl text-white rounded-xl py-4 xl:w-[30rem] w-[22rem] mx-8 mt-8 hover:bg-[#b9ff66] border-[1px] border-black hover:text-black duration-300">
				Send Message
			</button>
		</>
	);
}
