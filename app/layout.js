import "./globals.css";
export const metadata = {
	title: "Positivus Website",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-grotesk bg-white">{children}</body>
		</html>
	);
}
