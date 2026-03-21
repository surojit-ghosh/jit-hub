import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowUpRight,
	CheckSquare,
	FolderKanban,
	Sparkles,
	StickyNote,
	Target,
	TrendingUp,
	Wallet,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: HomePage });

const greeting = () => {
	const h = new Date().getHours();
	if (h < 12) return "Good morning";
	if (h < 17) return "Good afternoon";
	return "Good evening";
};

const quickStats = [
	{ label: "Balance", value: "₹24,500", trend: "+12%", positive: true },
	{ label: "Tasks done", value: "8/12", trend: "today", positive: true },
	{ label: "Projects", value: "3", trend: "active", positive: true },
];

const features = [
	{
		icon: Wallet,
		label: "Expenses",
		desc: "Track spending",
		to: "/expenses",
		color: "#16a34a",
		bg: "#f0fdf4",
		border: "#bbf7d0",
	},
	{
		icon: TrendingUp,
		label: "Income",
		desc: "Monitor earnings",
		to: "/income",
		color: "#0d9488",
		bg: "#f0fdfa",
		border: "#99f6e4",
	},
	{
		icon: CheckSquare,
		label: "Tasks",
		desc: "Stay on top",
		to: "/tasks",
		color: "#65a30d",
		bg: "#f7fee7",
		border: "#d9f99d",
	},
	{
		icon: FolderKanban,
		label: "Projects",
		desc: "Manage work",
		to: "/projects",
		color: "#ca8a04",
		bg: "#fefce8",
		border: "#fef08a",
	},
	{
		icon: StickyNote,
		label: "Notes",
		desc: "Capture ideas",
		to: "/notes",
		color: "#9333ea",
		bg: "#faf5ff",
		border: "#e9d5ff",
	},
	{
		icon: Target,
		label: "Goals",
		desc: "Dream big",
		to: "/goals",
		color: "#dc2626",
		bg: "#fff1f2",
		border: "#fecdd3",
	},
];

const recent = [
	{
		label: "Paid electricity bill",
		amount: "-₹1,200",
		positive: false,
		time: "2h ago",
	},
	{
		label: "Freelance payment",
		amount: "+₹8,000",
		positive: true,
		time: "Yesterday",
	},
	{
		label: "Grocery shopping",
		amount: "-₹640",
		positive: false,
		time: "Yesterday",
	},
];

function HomePage() {
	return (
		<div
			style={{
				minHeight: "100dvh",
				background:
					"linear-gradient(160deg, #f0fdf4 0%, #fafff7 40%, #fffbf0 100%)",
				color: "#14532d",
				fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
				paddingBottom: 80,
			}}
		>
			{/* Google Fonts */}
			<style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fade-up { animation: fadeUp 0.5s ease both; }
                .fade-up-1 { animation-delay: 0.05s; }
                .fade-up-2 { animation-delay: 0.1s; }
                .fade-up-3 { animation-delay: 0.15s; }
                .fade-up-4 { animation-delay: 0.2s; }

                .feature-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(22,163,74,0.12); }
                .feature-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
            `}</style>

			<main style={{ padding: "0 20px", maxWidth: 500, margin: "0 auto" }}>
				{/* ── Greeting ── */}
				<section
					className="fade-up fade-up-1"
					style={{ paddingTop: 28, paddingBottom: 4 }}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 6,
							fontSize: 13,
							color: "#16a34a",
							fontWeight: 600,
							marginBottom: 4,
						}}
					>
						<Sparkles size={13} />
						{greeting()}, Surojit
					</div>
					<h1
						style={{
							margin: 0,
							fontFamily: "'Playfair Display', serif",
							fontWeight: 800,
							fontSize: 28,
							color: "#14532d",
							lineHeight: 1.25,
							letterSpacing: "-0.02em",
						}}
					>
						Your life,
						<br />
						<span style={{ color: "#16a34a" }}>organized.</span>
					</h1>
				</section>

				{/* ── Quick Stats ── */}
				<div
					className="fade-up fade-up-2"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: 10,
						margin: "22px 0",
					}}
				>
					{quickStats.map((s) => (
						<div
							key={s.label}
							style={{
								background: "#fff",
								border: "1.5px solid #dcfce7",
								borderRadius: 16,
								padding: "14px 10px",
								textAlign: "center",
								boxShadow: "0 2px 8px rgba(22,163,74,0.06)",
							}}
						>
							<div
								style={{
									fontSize: 18,
									fontWeight: 800,
									fontFamily: "'Playfair Display', serif",
									color: "#14532d",
									lineHeight: 1,
								}}
							>
								{s.value}
							</div>
							<div
								style={{
									fontSize: 10,
									color: "#6b7280",
									marginTop: 4,
									fontWeight: 500,
								}}
							>
								{s.label}
							</div>
							<div
								style={{
									fontSize: 10,
									color: "#16a34a",
									fontWeight: 700,
									marginTop: 2,
								}}
							>
								{s.trend}
							</div>
						</div>
					))}
				</div>

				{/* ── Features Grid ── */}
				<div className="fade-up fade-up-3">
					<SectionLabel label="Features" />
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: 12,
							marginBottom: 28,
						}}
					>
						{features.map((f) => (
							<Link
								key={f.label}
								to={f.to}
								className="feature-card"
								style={{
									background: f.bg,
									border: `1.5px solid ${f.border}`,
									borderRadius: 18,
									padding: "16px",
									textDecoration: "none",
									color: "inherit",
									display: "block",
								}}
							>
								<div
									style={{
										width: 40,
										height: 40,
										borderRadius: 12,
										background: "#fff",
										border: `1.5px solid ${f.border}`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginBottom: 12,
										boxShadow: `0 2px 8px ${f.color}18`,
									}}
								>
									<f.icon size={19} color={f.color} strokeWidth={2} />
								</div>
								<div
									style={{
										fontWeight: 700,
										fontSize: 14,
										color: "#14532d",
										marginBottom: 2,
									}}
								>
									{f.label}
								</div>
								<div
									style={{
										fontSize: 11,
										color: "#6b7280",
										fontWeight: 500,
									}}
								>
									{f.desc}
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* ── Recent Transactions ── */}
				<div className="fade-up fade-up-4">
					<SectionLabel label="Recent transactions" />
					<div
						style={{
							background: "#fff",
							border: "1.5px solid #dcfce7",
							borderRadius: 18,
							overflow: "hidden",
							boxShadow: "0 2px 12px rgba(22,163,74,0.06)",
							marginBottom: 28,
						}}
					>
						{recent.map((r, i) => (
							<div
								key={`${r.label}_${i.toString()}`}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "14px 16px",
									borderBottom:
										i < recent.length - 1 ? "1px solid #f0fdf4" : "none",
								}}
							>
								<div>
									<div
										style={{
											fontSize: 13,
											fontWeight: 600,
											color: "#14532d",
											marginBottom: 2,
										}}
									>
										{r.label}
									</div>
									<div
										style={{
											fontSize: 11,
											color: "#9ca3af",
										}}
									>
										{r.time}
									</div>
								</div>
								<div
									style={{
										fontWeight: 700,
										fontSize: 14,
										color: r.positive ? "#16a34a" : "#dc2626",
									}}
								>
									{r.amount}
								</div>
							</div>
						))}
						<button
							type="button"
							style={{
								width: "100%",
								padding: "13px",
								background: "#f0fdf4",
								border: "none",
								borderTop: "1px solid #dcfce7",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 4,
								fontSize: 12,
								fontWeight: 700,
								color: "#16a34a",
							}}
						>
							See all transactions <ArrowUpRight size={13} />
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

function SectionLabel({ label }: { label: string }) {
	return (
		<div
			style={{
				fontSize: 13,
				fontWeight: 700,
				color: "#6b7280",
				textTransform: "uppercase",
				letterSpacing: "0.06em",
				marginBottom: 12,
			}}
		>
			{label}
		</div>
	);
}
