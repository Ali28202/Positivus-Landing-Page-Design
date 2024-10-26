import Link from "next/link";
export default function DesktopNavbar({ className }) {
	const titles = [
		{ title: "About us", href: "/" },
		{ title: "Services", href: "/" },
		{ title: "Use Cases", href: "/" },
		{ title: "Pricing", href: "/" },
		{ title: "Blog", href: "/" },
	];
	return (
		<>
			<div
				className={`${className} gap-56 items-center justify-center py-16 text-xl`}
			>
				<Link href={"/"}>
					<img src="logo-black.png" alt="logo" />
				</Link>
				<ul className="flex items-center gap-10">
					{titles.map((t) => {
						return (
							<li key={t.title}>
								<Link href={t.href}>{t.title}</Link>
							</li>
						);
					})}
					<button className="border-2 border-black rounded-xl py-4 px-8">
						Request a quote
					</button>
				</ul>
			</div>
		</>
	);
}
