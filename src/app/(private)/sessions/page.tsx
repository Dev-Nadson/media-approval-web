import { PageContainer } from "@/components/ui/page";
import SessionsCard from "@/components/sessions";

export default function SessionsPage() {
    return (
        <PageContainer className="w-screen h-screen py-10 ">
            <SessionsCard />
        </PageContainer>
    );
}