"use client";
import Link from "next/link";
import { Link2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
	{ name: "HOME", href: "/" },
	{ name: "ABOUT", href: "/about" },
	{ name: "TEAM", href: "/team" },
	{ name: "BLOG", href: "/blog" },
	{ name: "ROADMAP", href: "/roadmap" },
];

type NavbarProps = {
	discordConnected: boolean;
	onOpenModal: () => void;
};

const Navbar = ({ discordConnected, onOpenModal }: NavbarProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md text-white py-4 pt-5 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<span className="font-bold text-lg">Arry&apos;s NFT</span>
						</Link>
					</div>
					{/* Desktop Nav */}
					<nav className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-gray-300"
								)}
							>
								{item.name}
							</Link>
						))}
					</nav>
					{/* Mobile Hamburger */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="p-2 rounded hover:bg-gray-700 transition-colors"
							aria-label="Open menu"
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6 text-white" />
							) : (
								<Menu className="w-6 h-6 text-white" />
							)}
						</button>
					</div>
					<button
						className="hidden md:flex items-center space-x-2 bg-[#2C2C2C] hover:bg-gray-600 text-xs font-medium px-3 py-2 rounded transition-colors"
						onClick={onOpenModal}
						disabled={discordConnected}
					>
						<span>
							{discordConnected ? "Discord Connected" : "Join Discord"}
						</span>
						<Link2 className="text-white w-4 h-4" />
					</button>
				</div>
				{/* Mobile Nav Menu */}
				{mobileMenuOpen && (
					<nav className="md:hidden mt-4 flex flex-col space-y-4 bg-black/80 rounded p-4 shadow-lg">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-gray-300"
								)}
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<button
							className="flex items-center space-x-2 bg-[#2C2C2C] hover:bg-gray-600 text-xs font-medium px-3 py-2 rounded transition-colors"
							onClick={onOpenModal}
							disabled={discordConnected}
						>
							<span>
								{discordConnected ? "Discord Connected" : "Join Discord"}
							</span>
							<Link2 className="text-white w-4 h-4" />
						</button>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Navbar;