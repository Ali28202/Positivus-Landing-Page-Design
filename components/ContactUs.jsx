export default function ContactUs() {
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
			<div className="bg-[#f3f3f3] mx-24 rounded-3xl w-[85%] px-24 py-10">
				<div className="flex gap-10">
					<div className="flex gap-5 items-center">
						<input type="checkbox" name="hi" id="hi" />
						<h1 className="text-lg">Say Hi</h1>
					</div>
					<div className="flex gap-5 items-center">
						<input type="checkbox" name="hi" id="hi" />
						<h1 className="text-lg">Get a Quote</h1>
					</div>
				</div>
				<div>
					<div className="flex flex-col gap-3 my-10">
						<h1>Name</h1>
						<input
							type="text"
							className="w-[30rem] border-[1px] border-black rounded-2xl px-6 py-4"
							placeholder="Name"
						/>
					</div>
					<div className="flex flex-col gap-3 mb-10">
						<h1>Email*</h1>
						<input
							type="email"
							className="w-[30rem] border-[1px] border-black rounded-2xl px-6 py-4"
							placeholder="Email"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<h1>Message*</h1>
						<textarea
							className="w-[30rem] h-48 border-[1px] border-black rounded-2xl px-6 pt-6"
							placeholder="Message"
						/>
					</div>
					<button className="bg-[#191a23] text-xl text-white rounded-xl py-4 w-[30rem] mt-8 hover:bg-[#b9ff66] border-[1px] border-black hover:text-black duration-300">
						Send Message
					</button>
				</div>
			</div>
		</>
	);
}
