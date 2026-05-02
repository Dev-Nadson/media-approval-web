import { ThemeProvider } from "next-themes";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className="min-h-screen flex items-center justify-center bg-background">
                {children}
            </div>
        </ThemeProvider>
    );
}