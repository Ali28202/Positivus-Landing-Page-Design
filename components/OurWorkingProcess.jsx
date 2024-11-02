import BoxOurWorkingProcess from "./BoxOurWorkingProcess";
export default function OurWorkingProcess() {
	const titles = [
		"Consultation",
		"Research and Strategy Development",
		"Implementation",
		"Monitoring and Optimization",
		"Reporting and Communication",
		"Continual Improvement",
	];
	return (
		<>
			<div className="sm:px-24 py-12 flex sm:flex-row flex-col justify-center items-center sm:justify-start gap-8">
				<h1 className="bg-[#B9FF66] rounded-lg p-1 font-medium text-4xl xl:w-fit w-64 text-center">
					Our Working Process
				</h1>
				<p className="text-base xl:w-72 w-96 sm:text-left text-center">
					Step-by-Step Guide to Achieving Your Business Goals
				</p>
			</div>
			<div className="flex flex-col gap-5 xl:py-10 py-5">
				{titles.map((t, index) => {
					return <BoxOurWorkingProcess title={t} index={index} key={index} />;
				})}
			</div>
		</>
	);
}
