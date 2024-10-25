import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";
export default function Hero() {
	return (
		<>
			<div className="overflow-hidden">
				<DesktopHero className={"xl:flex hidden"} />
				<MobileHero className={"xl:hidden flex"} />
			</div>
		</>
	);
}
