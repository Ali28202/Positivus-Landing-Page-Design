export default function DesktopHero() {
	return (
		<>
			<div className="xl:flex hidden justify-between px-24">
				<div className="flex items-start flex-col gap-8">
					<h1 className="w-[32rem] text-6xl font-medium leading-tight">
						Navigating the digital landscape for success
					</h1>
					<p className="w-[30rem] text-lg mt-5">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<button className="bg-black text-white rounded-xl py-4 px-8">
						Book a consultation
					</button>
				</div>
				<img src="hero-img.png" alt="heroimg" />
			</div>
		</>
	);
}
