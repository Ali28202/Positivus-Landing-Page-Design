export default function Cta() {
	return (
		<>
			<div className="flex items-center justify-center py-24">
				<div className="xl:w-[80%] w-[90%] xl:px-16 xl:py-14 px-10 py-10 bg-[#f3f3f3] rounded-[30px] flex items-center justify-between">
					<div className="flex flex-col gap-8 w-[26rem]">
						<h1 className="font-medium text-3xl">Let’s make things happen</h1>
						<p className="text-base">
							Contact us today to learn more about how our digital marketing
							services can help your business grow and succeed online.
						</p>
						<button className="bg-[#191a23] text-white rounded-xl py-4 xl:w-64 w-full">
							Get your free proposal
						</button>
					</div>
					<img
						src="cta-img.png"
						alt="cta-img"
						className="absolute ml-[38rem] xl:block hidden"
					/>
				</div>
			</div>
		</>
	);
}
