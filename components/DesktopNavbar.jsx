import Link from "next/link";
export default function DesktopNavbar() {
	return (
		<>
			<div className="xl:flex hidden gap-56 items-center justify-center py-16 text-xl">
				<Link href={"/"}>
					<img src="logo-black.png" alt="logo" />
				</Link>
				<ul className="flex items-center gap-10">
					<li>
						<Link href={"/"}>About us</Link>
					</li>
					<li>
						<Link href={"/"}>Services</Link>
					</li>
					<li>
						<Link href={"/"}>Use Cases</Link>
					</li>
					<li>
						<Link href={"/"}>Pricing</Link>
					</li>
					<li>
						<Link href={"/"}>Blog</Link>
					</li>
					<button className="border-2 border-black rounded-xl py-4 px-8">
						Request a quote
					</button>
				</ul>
			</div>
		</>
	);
}
