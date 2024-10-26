export default function BoxCaseStudies({ text }) {
	return (
		<>
			<div className="bg-[#191a23] w-96 px-8 py-10 rounded-[35px] xl:hidden">
				<div className="flex flex-col gap-5">
					<p className="text-lg text-white">{text}</p>
					<button className="flex items-center gap-3">
						<h2 className="text-xl text-[#b9ff66]">Learn More</h2>
						<img src={"arrow-green.png"} alt="arrow" />
					</button>
				</div>
			</div>
		</>
	);
}
