export default function BoxServices({ title, titleColor, bgColor, imgSrc }) {
	let h2Color = bgColor == "#191a23" ? "white" : "black";
	return (
		<>
			<div
				className="flex items-center xl:justify-normal justify-center xl:px-8 xl:py-8 px-8 py-6 rounded-[2rem] xl:w-[35%] w-fit border-[#191A23] border-[1px] border-b-4"
				style={{ backgroundColor: bgColor }}
			>
				<div className="flex flex-col gap-16">
					<h1
						className="p-1 rounded-lg w-48 pl-2 h-fit text-2xl font-medium"
						style={{ backgroundColor: titleColor }}
					>
						{title}
					</h1>
					<button className="flex items-center gap-3">
						<img
							src={
								bgColor == "#191a23"
									? "arrow-white-black.png"
									: "arrow-black-green.png"
							}
							alt="arrow"
						/>
						<h2 className="text-xl xl:block hidden" style={{ color: h2Color }}>
							Learn More
						</h2>
					</button>
				</div>
				<img src={imgSrc} alt="img" className="xl:w-fit w-32 xl:m-0 mt-24" />
			</div>
		</>
	);
}
