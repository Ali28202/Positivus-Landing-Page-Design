import Link from "next/link";
export default function Footer() {
	const titles = [
		{ title: "About us", href: "/" },
		{ title: "Services", href: "/" },
		{ title: "Use Cases", href: "/" },
		{ title: "Pricing", href: "/" },
		{ title: "Blog", href: "/" },
	];
	return (
		<>
			{/* Mobile */}
			<div className="bg-[#191a23] w-full mt-24 px-5 pt-14 pb-7 block xl:hidden">
				<div className="flex flex-col items-center justify-center gap-10">
					<Link href={"/"}>
						<img src="logo-white.png" alt="logo" className="w-44" />
					</Link>
					<ul className="text-white flex flex-col gap-5 items-center text-lg">
						{titles.map((t) => {
							return (
								<Link href={t.title} key={t.title}>
									<li>{t.title}</li>
								</Link>
							);
						})}
					</ul>
				</div>
				<div className="flex flex-col justify-center items-center mt-12">
					<div className="text-white flex flex-col items-center justify-center gap-6 text-base">
						<h1 className="bg-[#b9ff66] w-fit px-2 rounded-md font-medium !text-lg !text-black mb-3">
							Contact us:
						</h1>
						<h2>Email: info@positivus.com</h2>
						<h2>Phone: 555-567-8901</h2>
						<p className="w-58 text-center">
							Address: 1234 Main St <br />
							Moonstone City, Stardust State 12345
						</p>
					</div>
					<div className="bg-[#292a32] w-full rounded-xl flex items-center justify-center mt-12 py-8">
						<div className="flex flex-col gap-5 w-full px-8">
							<input
								type="email"
								autoComplete="email"
								name="email"
								placeholder="Email"
								className="bg-transparent border-[1px] border-white rounded-xl w-full py-4 pl-8 text-white text-lg"
							/>
							<button className="bg-[#b9ff66] px-7 py-4 rounded-xl text-xl cursor-pointer">
								Subscribe to news
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center mt-10 gap-5">
					<img src="linkedin-white.png" alt="linkedin" />
					<img src="facebook-white.png" alt="facebook" />
					<img src="twitter-white.png" alt="twitter" />
				</div>
				<div className="flex flex-col">
					<span className="h-0.5 w-full bg-white/50 my-10"></span>
					<div>
						<div className="flex flex-col items-center justify-center text-white gap-5 text-base">
							<h1>© 2023 Positivus. All Rights Reserved.</h1>
							<Link href={"/"}>Privacy Policy</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Desktop */}
			<div className="bg-[#191a23] w-[85%] mx-24 rounded-tr-3xl rounded-tl-3xl px-16 pt-14 pb-12 xl:block hidden">
				<div className="flex items-center justify-between">
					<Link href={"/"}>
						<img src="logo-white.png" alt="logo" />
					</Link>
					<ul className="text-white flex gap-10 underline underline-offset-2 text-lg">
						{titles.map((t) => {
							return (
								<Link href={t.title} key={t.title}>
									<li>{t.title}</li>
								</Link>
							);
						})}
					</ul>
					<div className="flex gap-5">
						<img src="linkedin-white.png" alt="linkedin" />
						<img src="facebook-white.png" alt="facebook" />
						<img src="twitter-white.png" alt="twitter" />
					</div>
				</div>
				<div className="flex justify-between mt-16">
					<div className="text-white flex flex-col gap-6 text-lg">
						<h1 className="bg-[#b9ff66] w-fit px-2 rounded-md font-medium !text-xl !text-black">
							Contact us:
						</h1>
						<h2>Email: info@positivus.com</h2>
						<h2>Phone: 555-567-8901</h2>
						<p className="w-80">
							Address: 1234 Main St Moonstone City, Stardust State 12345
						</p>
					</div>
					<div className="bg-[#292a32] w-[57%] h-52 rounded-xl flex items-center justify-center">
						<div className="flex gap-5">
							<input
								type="email"
								autoComplete="email"
								name="email"
								placeholder="Email"
								className="bg-transparent border-[1px] border-white rounded-xl w-72 pl-8 text-white text-lg"
							/>
							<button className="bg-[#b9ff66] px-7 py-4 rounded-xl text-xl cursor-pointer">
								Subscribe to news
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<span className="h-0.5 w-full bg-white/50 my-14"></span>
					<div>
						<div className="flex text-white gap-5 text-lg">
							<h1>© 2023 Positivus. All Rights Reserved.</h1>
							<Link href={"/"} className="underline underline-offset-2">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
