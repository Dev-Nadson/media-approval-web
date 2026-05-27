"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
    title: z.string().min(3, "O título deve ter pelo menos 3 caracteres."),
    description: z.string().min(3, "A descrição deve ter pelo menos 3 caracteres."),
    client_email: z.email("Email inválido.").optional().or(z.literal("")),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
    expires_at: z.string().length(10, "Data inválida.")
})

export function CreateSessionForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            client_email: "",
            password: "",
            expires_at: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        alert(`Formulário enviado com sucesso!\n ${JSON.stringify(data)}`)
    }

    return (
        <form id="create-session-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="title">
                                Título da sessão
                            </FieldLabel>
                            <Input
                                {...field}
                                id="title"
                                aria-invalid={fieldState.invalid}
                                placeholder="Título da sessão..."
                            />
                            <FieldDescription errors={[fieldState.error]}>
                                Insira o título da sessão.
                            </FieldDescription>
                        </Field>
                    )}
                />

                <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="description">
                                Descrição
                            </FieldLabel>
                            <Input
                                {...field}
                                id="description"
                                aria-invalid={fieldState.invalid}
                                placeholder="Descrição da sessão..."
                            />
                            <FieldDescription errors={[fieldState.error]}>
                                Insira a descrição da sessão.
                            </FieldDescription>
                        </Field>
                    )}
                />

                <Controller
                    name="client_email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="client_email">
                                Email do cliente
                            </FieldLabel>
                            <Input
                                {...field}
                                id="client_email"
                                aria-invalid={fieldState.invalid}
                                placeholder="exemplo@exemplo.com"
                            />
                            <FieldDescription errors={[fieldState.error]}>
                                Insira o email do cliente vínculado a sessão.
                            </FieldDescription>
                        </Field>
                    )}
                />

                <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="password">
                                Senha
                            </FieldLabel>
                            <Input
                                {...field}
                                type="password"
                                id="password"
                                aria-invalid={fieldState.invalid}
                                placeholder="********"
                            />
                            <FieldDescription errors={[fieldState.error]}>
                                Insira a senha para acessar a sessão.
                            </FieldDescription>
                        </Field>
                    )}
                />

                <Controller
                    name="expires_at"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="expires_at">
                                Data de expiração
                            </FieldLabel>
                            <Input
                                {...field}
                                type="date"
                                id="expires_at"
                                aria-invalid={fieldState.invalid}
                                placeholder="Data de expiração"
                            />
                            <FieldDescription errors={[fieldState.error]}>
                                Insira a data de expiração da sessão.
                            </FieldDescription>
                        </Field>
                    )}
                />

                <Field orientation="vertical">
                    <Button type="submit" form="create-session-form" size="lg" className="text-xl py-6 px-4 m-auto">
                        Criar sessão
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    )
}
