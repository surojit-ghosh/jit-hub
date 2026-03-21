import { cn } from "@/lib/utils";

const Container = ({
	className,
	children,
	...props
}: React.ComponentProps<"div">) => {
	return (
		<div className={cn("max-w-xl mx-auto w-full", className)} {...props}>
			{children}
		</div>
	);
};

export default Container;
