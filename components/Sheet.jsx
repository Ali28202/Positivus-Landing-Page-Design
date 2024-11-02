import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export default function Sheet({ titles, isOpen, setIsOpen }) {
	const variants = {
		closed: { x: 450 },
	};

	return (
		<>
			{isOpen && (
				<motion.span
					className="fixed inset-0"
					animate={
						({ backgroundColor: "#00000000" }, { backgroundColor: "#000000cc" })
					}
					transition={{ duration: 0.25, type: "tween" }}
					onClick={() => setIsOpen(false)}
				></motion.span>
			)}
			<motion.div
				className="h-full w-80 text-white bg-black fixed"
				initial={{ x: 450 }}
				animate={isOpen ? { x: 110 } : "closed"}
				transition={
					isOpen
						? { duration: 1.25, type: "spring" }
						: { duration: 1.5, type: "spring", delay: 0.25 }
				}
				variants={variants}
			></motion.div>
			<motion.div
				className="bg-[#b9ff66] h-full w-80 text-black fixed pr-8"
				initial={{ x: 450 }}
				animate={isOpen ? { x: 130 } : "closed"}
				transition={
					isOpen
						? { duration: 1.25, delay: 0.25, type: "spring" }
						: { duration: 1.5, type: "spring" }
				}
				variants={variants}
			>
				<div className="flex flex-col items-center justify-center py-10 text-xl">
					<div className="flex items-center justify-between w-full px-5">
						<Link href={"/"}>
							<img src="logo-black.png" alt="logo" className="w-36" />
						</Link>
						<IoMdClose
							className="text-3xl hover:scale-105 duration-200 cursor-pointer mt-0.5"
							onClick={() => setIsOpen(false)}
						/>
					</div>
					<ul className="flex flex-col py-16 items-center gap-10">
						{titles.map((t) => {
							return (
								<li key={t.title}>
									<Link href={t.href} className="group">
										{t.title}
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#191a23]"></span>
									</Link>
								</li>
							);
						})}
						<button className="border-2 border-black rounded-xl py-4 px-8 hover:bg-[#191a23] hover:text-white duration-300">
							Request a quote
						</button>
					</ul>
				</div>
			</motion.div>
		</>
	);
}
