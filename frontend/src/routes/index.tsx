import { createFileRoute } from "@tanstack/react-router";
import {
    GitBranch,
    GitPullRequest,
    Star,
    Bell,
    Search,
    ChevronRight,
    Flame,
    Clock,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: HomePage });

const repos = [
    {
        name: "jit-hub",
        lang: "TypeScript",
        stars: 12,
        updated: "2h ago",
        open: 3,
    },
    { name: "api-server", lang: "Go", stars: 8, updated: "1d ago", open: 1 },
    { name: "mobile-ui", lang: "Kotlin", stars: 5, updated: "3d ago", open: 0 },
];

const activity = [
    {
        icon: GitPullRequest,
        label: "Merged PR #42 in jit-hub",
        time: "30m ago",
        accent: "var(--lagoon)",
    },
    {
        icon: GitBranch,
        label: "Pushed to feature/auth",
        time: "2h ago",
        accent: "var(--palm)",
    },
    {
        icon: Star,
        label: "Starred tanstack/router",
        time: "5h ago",
        accent: "#d97706",
    },
];

const langColor: Record<string, string> = {
    TypeScript: "#3178c6",
    Go: "#00add8",
    Kotlin: "#7f52ff",
};

function HomePage() {
    return (
        <div
            style={{
                background: "var(--bg-base)",
                minHeight: "100dvh",
                color: "var(--sea-ink)",
            }}
        >
            {/* ── Header ── */}
            <header
                style={{
                    background: "var(--header-bg)",
                    backdropFilter: "blur(14px)",
                    borderBottom: "1px solid var(--line)",
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                    padding: "0 16px",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 10,
                            background:
                                "linear-gradient(135deg, var(--lagoon), var(--palm))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <GitBranch size={16} color="#fff" strokeWidth={2.5} />
                    </div>
                    <span
                        style={{
                            fontFamily: "Fraunces, serif",
                            fontWeight: 700,
                            fontSize: 18,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Jit Hub
                    </span>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                    <IconBtn>
                        <Search size={18} />
                    </IconBtn>
                    <IconBtn>
                        <Bell size={18} />
                    </IconBtn>
                    <div
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, var(--lagoon-deep), var(--palm))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#fff",
                        }}
                    >
                        S
                    </div>
                </div>
            </header>

            <main
                style={{
                    padding: "0 16px 96px",
                    maxWidth: 480,
                    margin: "0 auto",
                }}
            >
                {/* ── Greeting ── */}
                <section style={{ paddingTop: 24, paddingBottom: 8 }}>
                    <p
                        style={{
                            margin: 0,
                            fontSize: 13,
                            color: "var(--sea-ink-soft)",
                            fontWeight: 500,
                        }}
                    >
                        Good morning 👋
                    </p>
                    <h1
                        style={{
                            margin: "2px 0 0",
                            fontFamily: "Fraunces, serif",
                            fontWeight: 700,
                            fontSize: 26,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                    >
                        What are you
                        <br />
                        shipping today?
                    </h1>
                </section>

                {/* ── Stats strip ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: 10,
                        margin: "20px 0",
                    }}
                >
                    {[
                        { label: "Repos", value: "3" },
                        { label: "Open PRs", value: "4" },
                        { label: "Stars", value: "25" },
                    ].map((s) => (
                        <div
                            key={s.label}
                            style={{
                                background: "var(--surface)",
                                border: "1px solid var(--line)",
                                borderRadius: 14,
                                padding: "12px 10px",
                                textAlign: "center",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 20,
                                    fontWeight: 800,
                                    fontFamily: "Fraunces, serif",
                                }}
                            >
                                {s.value}
                            </div>
                            <div
                                style={{
                                    fontSize: 11,
                                    color: "var(--sea-ink-soft)",
                                    marginTop: 2,
                                    fontWeight: 500,
                                }}
                            >
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Repositories ── */}
                <SectionHeader
                    title="Repositories"
                    icon={<Flame size={14} />}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginBottom: 28,
                    }}
                >
                    {repos.map((r) => (
                        <div
                            key={r.name}
                            style={{
                                background: "var(--surface)",
                                border: "1px solid var(--line)",
                                borderRadius: 16,
                                padding: "14px 16px",
                                backdropFilter: "blur(8px)",
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                cursor: "pointer",
                            }}
                        >
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 12,
                                    flexShrink: 0,
                                    background:
                                        "linear-gradient(135deg, var(--hero-a), var(--hero-b))",
                                    border: "1px solid var(--line)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <GitBranch size={16} color="var(--lagoon)" />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 14,
                                        marginBottom: 4,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {r.name}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        fontSize: 11,
                                        color: "var(--sea-ink-soft)",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                background:
                                                    langColor[r.lang] ?? "#888",
                                                display: "inline-block",
                                            }}
                                        />
                                        {r.lang}
                                    </span>
                                    <span
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 3,
                                        }}
                                    >
                                        <Star size={10} /> {r.stars}
                                    </span>
                                    <span
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 3,
                                        }}
                                    >
                                        <GitPullRequest size={10} /> {r.open}
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                    gap: 4,
                                    flexShrink: 0,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 10,
                                        color: "var(--sea-ink-soft)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 3,
                                    }}
                                >
                                    <Clock size={9} /> {r.updated}
                                </span>
                                <ChevronRight
                                    size={14}
                                    color="var(--sea-ink-soft)"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Recent activity ── */}
                <SectionHeader
                    title="Recent activity"
                    icon={<Clock size={14} />}
                />
                <div
                    style={{
                        background: "var(--surface)",
                        border: "1px solid var(--line)",
                        borderRadius: 16,
                        overflow: "hidden",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    {activity.map((a, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "13px 16px",
                                borderBottom:
                                    i < activity.length - 1
                                        ? "1px solid var(--line)"
                                        : "none",
                            }}
                        >
                            <div
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: 10,
                                    flexShrink: 0,
                                    background: `${a.accent}22`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <a.icon size={15} color={a.accent} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {a.label}
                                </div>
                            </div>
                            <span
                                style={{
                                    fontSize: 10,
                                    color: "var(--sea-ink-soft)",
                                    flexShrink: 0,
                                }}
                            >
                                {a.time}
                            </span>
                        </div>
                    ))}
                </div>
            </main>

            {/* ── Bottom nav ── */}
            <nav
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 64,
                    background: "var(--header-bg)",
                    backdropFilter: "blur(16px)",
                    borderTop: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingBottom: "env(safe-area-inset-bottom)",
                }}
            >
                {[
                    { icon: Flame, label: "Home", active: true },
                    { icon: GitBranch, label: "Repos", active: false },
                    { icon: GitPullRequest, label: "PRs", active: false },
                    { icon: Bell, label: "Alerts", active: false },
                ].map((item) => (
                    <button
                        key={item.label}
                        style={{
                            background: "none",
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3,
                            padding: "6px 14px",
                            borderRadius: 10,
                            cursor: "pointer",
                            color: item.active
                                ? "var(--lagoon)"
                                : "var(--sea-ink-soft)",
                        }}
                    >
                        <item.icon
                            size={20}
                            strokeWidth={item.active ? 2.5 : 1.8}
                        />
                        <span
                            style={{
                                fontSize: 10,
                                fontWeight: item.active ? 700 : 400,
                            }}
                        >
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

function IconBtn({ children }: { children: React.ReactNode }) {
    return (
        <button
            style={{
                background: "none",
                border: "none",
                width: 34,
                height: 34,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--sea-ink)",
            }}
        >
            {children}
        </button>
    );
}

function SectionHeader({
    title,
    icon,
}: {
    title: string;
    icon: React.ReactNode;
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontWeight: 700,
                    fontSize: 14,
                }}
            >
                <span style={{ color: "var(--lagoon)" }}>{icon}</span>
                {title}
            </div>
            <button
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 12,
                    color: "var(--lagoon)",
                    fontWeight: 600,
                    padding: 0,
                }}
            >
                See all
            </button>
        </div>
    );
}
