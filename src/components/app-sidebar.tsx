import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Layers, LogOut } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <Button variant="outline" size="lg" className="mt-2 flex gap-2 justify-start px-4 py-6" asChild>
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
                <Button variant="outline" size="sm" className="w-full">
                    <LogOut strokeWidth={2.3} className="size-4 mr-2" />
                    Sair
                </Button>
            </SidebarFooter>
        </Sidebar >
    )
}
