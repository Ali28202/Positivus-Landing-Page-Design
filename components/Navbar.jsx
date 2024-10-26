import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
export default function Navbar() {
	return (
		<>
			<DesktopNavbar className={"hidden xl:flex"} />
			<MobileNavbar className={"xl:hidden flex"} />
		</>
	);
}
