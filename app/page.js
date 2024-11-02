"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import CaseStudies from "@/components/CaseStudies";
import OurWorkingProcess from "@/components/OurWorkingProcess";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
export default function Home() {
	// for sheet
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div style={isOpen ? { position: "fixed" } : { position: "initial" }}>
				<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
				<Hero />
				<Services />
				<CTA />
				<CaseStudies />
				<OurWorkingProcess />
				<Team />
				<Testimonials />
				<ContactUs />
				<Footer />
			</div>
		</>
	);
}
