import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface Session {
    id: number;
    url_id: string;
    author_id: string;
    title: string;
    description: string | null;
    client_email: string;
    password_hash: string;
    expires_at: string;
    created_at: string;
    deleted_at: string | null;
}

export type SessionStatus = "active" | "expired" | "deleted";

export function getSessionStatus(session: Session): SessionStatus {
    if (session.deleted_at) return "deleted";
    if (new Date(session.expires_at) < new Date()) return "expired";
    return "active";
}

export function formatSessionDate(iso: string): string {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date(iso));
}

export const sessionStatusConfig: Record<
    SessionStatus,
    { label: string; dotClass: string; badgeClass: string; borderClass: string }
> = {
    active: {
        label: "Ativa",
        dotClass: "bg-primary animate-pulse",
        badgeClass:
            "bg-primary/10 text-primary border border-primary/20 dark:bg-primary/15 dark:text-primary dark:border-primary/25",
        borderClass: "border-l-primary/60",
    },
    expired: {
        label: "Expirada",
        dotClass: "bg-muted-foreground/50",
        badgeClass: "bg-muted text-muted-foreground border border-border",
        borderClass: "border-l-border",
    },
    deleted: {
        label: "Concluída",
        dotClass: "bg-green-600 animate-pulse",
        badgeClass:
            "bg-green-600/10 text-green-600 border border-green-600/20 dark:bg-green-600/15 dark:border-green-600/25",
        borderClass: "border-l-green-600/50",
    },
};

interface SessionBadgeProps {
    status: SessionStatus;
}

export function SessionBadge({ status }: SessionBadgeProps) {
    const config = sessionStatusConfig[status];

    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium leading-none shrink-0",
                config.badgeClass
            )}
        >
            {config.label}
        </span>
    );
}


interface SessionDateInfoProps {
    status: SessionStatus;
    session: Session;
}

export function SessionDateInfo({ status, session }: SessionDateInfoProps) {
    const statusMessage = {
        active: `Expira em ${formatSessionDate(session.expires_at)}`,
        expired: `Expirou em ${formatSessionDate(session.expires_at)}`,
        deleted: `Concluída em ${formatSessionDate(session.deleted_at!)}`,
    };
    const label = statusMessage[status];

    return (
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3 shrink-0" strokeWidth={1.8} />
            <span>{label}</span>
        </span>
    );
}

interface SessionItemProps {
    session: Session;
}

export function SessionItem({ session }: SessionItemProps) {
    const status = getSessionStatus(session);
    const config = sessionStatusConfig[status];

    return (
        <li>
            <Link
                href={`/sessions/${session.url_id}`}
                className={cn(
                    "group flex items-center gap-4 px-4 py-3.5",
                    "border-l-2 transition-all duration-150",
                    "hover:bg-muted/40 dark:hover:bg-muted/20",
                    config.borderClass
                )}
            >
                <span
                    className={cn(
                        "size-2 rounded-full shrink-0 mt-px",
                        config.dotClass,
                        status === "active" && "shadow-[0_0_0_3px] shadow-primary/20"
                    )}
                />

                <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-foreground leading-none truncate">
                            {session.title}
                        </span>
                        <SessionBadge status={status} />
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Mail className="size-3 shrink-0" strokeWidth={1.8} />
                            <span className="truncate">{session.client_email}</span>
                        </span>
                        <Separator orientation="vertical" className="h-3 shrink-0" />
                        <SessionDateInfo status={status} session={session} />
                    </div>
                </div>

                <ArrowRight
                    className={cn(
                        "size-4 text-muted-foreground/40 shrink-0 transition-all duration-150",
                        "group-hover:text-muted-foreground group-hover:translate-x-0.5"
                    )}
                    strokeWidth={2}
                />
            </Link>
        </li>
    );
}
