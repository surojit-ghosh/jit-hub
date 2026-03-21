import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/header";
import BottomNav from "@/components/navigation";
import { Provider } from "@/components/providers";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<Provider>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-1">
					<Outlet />
				</main>
				<BottomNav />
			</div>
		</Provider>
	);
}
