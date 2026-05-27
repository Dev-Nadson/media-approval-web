import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { ImagePlus, Plus } from "lucide-react";
import { Session, SessionItem, getSessionStatus } from "../ui/session";

const sessions: Session[] = [
    {
        id: 1,
        url_id: "msjkdueh",
        author_id: "123456",
        title: "Session 1",
        description: "Session de revisão de mídias do cliente",
        client_email: "teste@gmail.com",
        password_hash: "123456",
        expires_at: "2026-06-01T00:00:00.000Z",
        created_at: "2025-01-10T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 2,
        url_id: "anfhdoe",
        author_id: "123456",
        title: "Session 2",
        description: null,
        client_email: "cliente@empresa.com",
        password_hash: "123456",
        expires_at: "2026-06-01T00:00:00.000Z",
        created_at: "2025-01-10T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 3,
        url_id: "bxkoqpla",
        author_id: "123456",
        title: "Session 3",
        description: null,
        client_email: "marketing@agencia.io",
        password_hash: "123456",
        expires_at: "2026-03-15T00:00:00.000Z",
        created_at: "2024-01-20T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 4,
        url_id: "czmrxwtf",
        author_id: "123456",
        title: "Session 4",
        description: null,
        client_email: "joao@design.co",
        password_hash: "123456",
        expires_at: "2023-07-10T00:00:00.000Z",
        created_at: "2023-06-10T00:00:00.000Z",
        deleted_at: "2023-07-20T00:00:00.000Z",
    },
    {
        id: 5,
        url_id: "dpynskhv",
        author_id: "123456",
        title: "Session 5",
        description: null,
        client_email: "contato@startup.dev",
        password_hash: "123456",
        expires_at: "2025-09-30T00:00:00.000Z",
        created_at: "2024-09-01T00:00:00.000Z",
        deleted_at: "2023-07-20T00:00:00.000Z",
    },
    {
        id: 6,
        url_id: "eqtbfmcj",
        author_id: "123456",
        title: "Session 6",
        description: null,
        client_email: "pedro@brand.com",
        password_hash: "123456",
        expires_at: "2022-03-01T00:00:00.000Z",
        created_at: "2022-01-01T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 7,
        url_id: "frugzalx",
        author_id: "123456",
        title: "Session 7",
        description: null,
        client_email: "ana@consultoria.net",
        password_hash: "123456",
        expires_at: "2026-01-01T00:00:00.000Z",
        created_at: "2024-11-05T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 8,
        url_id: "gsjwpdrb",
        author_id: "123456",
        title: "Session 8",
        description: null,
        client_email: "ti@corporativo.br",
        password_hash: "123456",
        expires_at: "2024-05-01T00:00:00.000Z",
        created_at: "2024-04-01T00:00:00.000Z",
        deleted_at: "2024-05-15T00:00:00.000Z",
    },
    {
        id: 9,
        url_id: "hvckoenm",
        author_id: "123456",
        title: "Session 9",
        description: null,
        client_email: "lucas@ads.media",
        password_hash: "123456",
        expires_at: "2025-11-20T00:00:00.000Z",
        created_at: "2024-10-20T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 10,
        url_id: "ixlmqtpg",
        author_id: "123456",
        title: "Session 10",
        description: null,
        client_email: "suporte@tecno.com",
        password_hash: "123456",
        expires_at: "2023-12-31T00:00:00.000Z",
        created_at: "2023-11-01T00:00:00.000Z",
        deleted_at: null,
    },
    {
        id: 11,
        url_id: "jynzoqhs",
        author_id: "123456",
        title: "Session 11",
        description: null,
        client_email: "carol@photo.studio",
        password_hash: "123456",
        expires_at: "2026-06-01T00:00:00.000Z",
        created_at: "2025-01-10T00:00:00.000Z",
        deleted_at: null,
    },
];


export default function SessionsCard() {
    const activeSessions = sessions.filter((s) => getSessionStatus(s) === "active").length;
    const pluralText = activeSessions !== 1 ? "" : "s";

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-2xl shadow-black/10">
            <CardHeader className="border-b pb-4 px-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/10 dark:bg-primary/15 rounded-xl p-2.5 shrink-0">
                            <ImagePlus className="size-5 text-primary" strokeWidth={2} />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-semibold tracking-tight">
                                Sessões
                            </CardTitle>
                            <CardDescription className="mt-0.5">
                                {activeSessions} {pluralText ? "sessão ativa" : "sessões ativas"} de{" "}
                                {sessions.length} {pluralText ? "sessão" : "sessões"}
                            </CardDescription>
                        </div>
                    </div>
                    <Button size="lg" className="my-auto gap-1.5">
                        <Plus className="size-3.5" strokeWidth={2.5} />
                        Nova sessão
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="p-0 max-h-[680px] overflow-y-auto">
                <ul className="divide-y divide-border/60">
                    {sessions.map((session) => (
                        <SessionItem key={session.id} session={session} />
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}