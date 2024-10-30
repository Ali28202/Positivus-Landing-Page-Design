import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import CaseStudies from "@/components/CaseStudies";
import OurWorkingProcess from "@/components/OurWorkingProcess";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<CTA />
			<CaseStudies />
			<OurWorkingProcess />
			<Team />
			<Testimonials />
			<ContactUs />
		</>
	);
}
