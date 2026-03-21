import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
	return (
		<div className="sticky top-0 z-10 p-2 flex justify-between items-center backdrop-blur-md border-b border-secondary/20">
			<img src="/logo.png" alt="Jit Hub Logo" className="w-8 h-8 rounded-sm" />

			<div className="flex gap-2 items-center">
				<Button size={"icon"}>
					<Search className="size-4" />
				</Button>
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Header;
