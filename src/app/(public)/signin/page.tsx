import { SignInCard } from "@/components/signin";

export default function Home() {
    return (

        <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
            <SignInCard />
            {/* Card Content */}
        </main>
    );
}
