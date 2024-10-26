import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
	const titles = [
		{ title: "About us", href: "/" },
		{ title: "Services", href: "/" },
		{ title: "Use Cases", href: "/" },
		{ title: "Pricing", href: "/" },
		{ title: "Blog", href: "/" },
	];
	return (
		<>
			{/* Desktop */}
			<div className="xl:flex hidden gap-56 items-center justify-center py-16 text-xl">
				<Link href={"/"}>
					<img src="logo-black.png" alt="logo" />
				</Link>
				<ul className="flex items-center gap-10">
					{titles.map((t) => {
						return (
							<li key={t.title}>
								<Link href={t.href} className="group">
									{t.title}
									<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-[#191a23]"></span>
								</Link>
							</li>
						);
					})}
					<button className="border-2 border-black rounded-xl py-4 px-8 hover:bg-[#191a23] hover:text-white duration-300">
						Request a quote
					</button>
				</ul>
			</div>
			{/* Mobile */}
			<div className="xl:hidden flex py-8 px-5 items-center justify-between">
				<Link href={"/"}>
					<img src="logo-black.png" alt="logo" className="w-36" />
				</Link>
				<Link href={"/"}>
					<RxHamburgerMenu className="text-2xl" />
				</Link>
			</div>
		</>
	);
}
