export default function TeamMember({ name, job, resume, src }) {
	return (
		<>
			<div className="w-96 border-[#191A23] border-[1px] border-b-4 rounded-3xl xl:px-6 px-5 py-8">
				<div className="flex justify-between xl:pt-5 pt-3">
					<div className="flex items-end gap-4">
						<img src={src} alt="member" />
						<div className="flex flex-col gap-1">
							<h1 className="font-medium text-xl">{name}</h1>
							<h2 className="text-base">{job}</h2>
						</div>
					</div>
					<img
						src="linkedin-green.png"
						alt="linkedin"
						className="w-fit h-fit"
					/>
				</div>
				<div className="flex flex-col">
					<span className="w-full h-0.5 bg-black xl:my-5 my-5"></span>
					<p className="xl:text-lg text-base">{resume}</p>
				</div>
			</div>
		</>
	);
}
