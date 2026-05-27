"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { CreateSessionForm } from "../forms/create-session-form"

export function CreateSessionModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="gap-1.5">
                    <Plus className="size-3.5" strokeWidth={2.5} />
                    Nova sessão
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Nova sessão</DialogTitle>
                    <DialogDescription>
                        Crie uma nova sessão para revisar as mídias.
                    </DialogDescription>
                </DialogHeader>

                <CreateSessionForm />
            </DialogContent>
        </Dialog>
    )
}
