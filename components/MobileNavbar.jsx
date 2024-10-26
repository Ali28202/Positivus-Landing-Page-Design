import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileNavbar({ className }) {
	return (
		<>
			<div className={`${className} py-8 px-5 items-center justify-between`}>
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
