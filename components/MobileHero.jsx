export default function MobileHero() {
	return (
		<>
			<div className="xl:hidden flex">
				<div className="flex items-start flex-col gap-8 px-5">
					<h1 className="w-[22rem] text-4xl font-medium leading-tight">
						Navigating the digital landscape for success
					</h1>
					<img src="hero-img.png" alt="heroimg" className="w-96" />
					<p className="w-[24rem] text-base mt-5">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<button className="bg-black text-xl text-white rounded-xl py-4 w-full">
						Book a consultation
					</button>
				</div>
			</div>
		</>
	);
}
