import BoxServices from "./BoxServices";
export default function Services() {
	const boxes = [
		{
			title: "Search engine optimization",
			bgColor: "#f3f3f3",
			imgSrc: "box-1-img.png",
		},
		{
			title: "Pay-per-click advertising",
			bgColor: "#B9FF66",
			imgSrc: "box-2-img.png",
		},
		{
			title: "Social Media Marketing",
			bgColor: "#191a23",
			imgSrc: "box-3-img.png",
		},
		{
			title: "Email Marketing",
			bgColor: "#f3f3f3",
			imgSrc: "box-4-img.png",
		},
		{
			title: "Content Creation",
			bgColor: "#B9FF66",
			imgSrc: "box-5-img.png",
		},
		{
			title: "Analytics and Tracking",
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
			<div className="flex flex-col xl:gap-10 gap-8 justify-center xl:px-28 xl:items-start items-center">
				<div className="flex xl:flex-row flex-col xl:gap-14 gap-8">
					<BoxServices
						title={boxes[0].title}
						bgColor={boxes[0].bgColor}
						imgSrc={boxes[0].imgSrc}
					/>
					<BoxServices
						title={boxes[1].title}
						bgColor={boxes[1].bgColor}
						imgSrc={boxes[1].imgSrc}
					/>
				</div>
				<div className="flex xl:flex-row flex-col xl:gap-14 gap-8">
					<BoxServices
						title={boxes[2].title}
						bgColor={boxes[2].bgColor}
						imgSrc={boxes[2].imgSrc}
					/>
					<BoxServices
						title={boxes[3].title}
						bgColor={boxes[3].bgColor}
						imgSrc={boxes[3].imgSrc}
					/>
				</div>
				<div className="flex xl:flex-row flex-col xl:gap-14 gap-8">
					<BoxServices
						title={boxes[4].title}
						bgColor={boxes[4].bgColor}
						imgSrc={boxes[4].imgSrc}
					/>
					<BoxServices
						title={boxes[5].title}
						bgColor={boxes[5].bgColor}
						imgSrc={boxes[5].imgSrc}
					/>
				</div>
			</div>
		</>
	);
}
