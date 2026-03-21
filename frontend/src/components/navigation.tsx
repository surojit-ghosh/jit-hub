import { CheckSquare, Leaf, Target, Wallet } from "lucide-react";
import { Button } from "./ui/button";

const BottomNav = () => {
	return (
		<nav className="sticky bottom-0 z-10 p-2 flex justify-between items-center backdrop-blur-md border-t border-secondary/20">
			{[
				{ icon: Leaf, label: "Home", active: true },
				{ icon: Wallet, label: "Expenses", active: false },
				{ icon: CheckSquare, label: "Tasks", active: false },
				{ icon: Target, label: "Goals", active: false },
			].map((item) => (
				<Button
					key={item.label}
					variant={item.active ? "default" : "ghost"}
					size="icon"
				>
					<item.icon size={19} strokeWidth={item.active ? 2.5 : 1.8} />
				</Button>
			))}
		</nav>
	);
};

export default BottomNav;
