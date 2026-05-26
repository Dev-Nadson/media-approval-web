import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Layers, LogOut } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <Button variant="secondary" size="lg" className="mt-2 flex gap-2 justify-start px-4 py-6" asChild>
                    <Link href="/">
                        <div className="bg-primary rounded-xl p-1.5">
                            <Layers strokeWidth={2.3} className="size-6 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold">Approval Medias</span>
                    </Link>
                </Button>
            </SidebarHeader >

            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <Separator />
            <SidebarFooter className="px-4 py-3">
                <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/signin">
                        <LogOut strokeWidth={2.3} className="size-4 mr-2" />
                        Sair
                    </Link>
                </Button>
            </SidebarFooter>
        </Sidebar >
    )
}
