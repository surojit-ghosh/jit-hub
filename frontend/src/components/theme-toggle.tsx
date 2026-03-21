"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const handleToggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<Button
			size={"icon"}
			variant={"outline"}
			className="size-8 cursor-pointer"
			onClick={handleToggleTheme}
		>
			<MoonStarIcon className="hidden size-4 dark:block" />
			<SunIcon className="block size-4 dark:hidden" />
		</Button>
	);
};
