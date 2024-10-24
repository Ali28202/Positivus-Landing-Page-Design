import BoxServices from "./BoxServices";
export default function Services() {
	const boxes = [
		{
			title: "Search engine optimization",
			titleColor: "#B9FF66",
			bgColor: "#f3f3f3",
			imgSrc: "box-1-img.png",
		},
		{
			title: "Pay-per-click advertising",
			titleColor: "white",
			bgColor: "#B9FF66",
			imgSrc: "box-2-img.png",
		},
		{
			title: "Social Media Marketing",
			titleColor: "white",
			bgColor: "#191a23",
			imgSrc: "box-3-img.png",
		},
		{
			title: "Email Marketing",
			titleColor: "#B9FF66",
			bgColor: "#f3f3f3",
			imgSrc: "box-4-img.png",
		},
		{
			title: "Content Creation",
			titleColor: "white",
			bgColor: "#B9FF66",
			imgSrc: "box-5-img.png",
		},
		{
			title: "Analytics and Tracking",
			titleColor: "#B9FF66",
			bgColor: "#191a23",
			imgSrc: "box-6-img.png",
		},
	];
	return (
		<>
			<div className="sm:px-24 py-12 flex sm:flex-row flex-col justify-center items-center sm:justify-start gap-8">
				<h1 className="bg-[#B9FF66] rounded-lg p-1 font-medium text-4xl w-fit">
					Services
				</h1>
				<p className="text-base xl:w-[32rem] w-96 sm:text-left text-center">
					At our digital marketing agency, we offer a range of services to help
					businesses grow and succeed online. These services include:
				</p>
			</div>
			<div className="flex flex-col xl:gap-10 gap-5 justify-center items-center">
				<div className="flex xl:flex-row flex-col gap-5">
					<BoxServices
						key={boxes[0].title}
						title={boxes[0].title}
						titleColor={boxes[0].titleColor}
						bgColor={boxes[0].bgColor}
						imgSrc={boxes[0].imgSrc}
					/>
					<BoxServices
						key={boxes[1].title}
						title={boxes[1].title}
						titleColor={boxes[1].titleColor}
						bgColor={boxes[1].bgColor}
						imgSrc={boxes[1].imgSrc}
					/>
				</div>
				<div className="flex xl:flex-row flex-col justify-center gap-5">
					<BoxServices
						key={boxes[2].title}
						title={boxes[2].title}
						titleColor={boxes[2].titleColor}
						bgColor={boxes[2].bgColor}
						imgSrc={boxes[2].imgSrc}
					/>
					<BoxServices
						key={boxes[3].title}
						title={boxes[3].title}
						titleColor={boxes[3].titleColor}
						bgColor={boxes[3].bgColor}
						imgSrc={boxes[3].imgSrc}
					/>
				</div>
				<div className="flex xl:flex-row flex-col justify-center gap-5">
					<BoxServices
						key={boxes[4].title}
						title={boxes[4].title}
						titleColor={boxes[4].titleColor}
						bgColor={boxes[4].bgColor}
						imgSrc={boxes[4].imgSrc}
					/>
					<BoxServices
						key={boxes[5].title}
						title={boxes[5].title}
						titleColor={boxes[5].titleColor}
						bgColor={boxes[5].bgColor}
						imgSrc={boxes[5].imgSrc}
					/>
				</div>
			</div>
		</>
	);
}
