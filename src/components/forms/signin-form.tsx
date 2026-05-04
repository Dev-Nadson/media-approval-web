"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { redirect } from "next/navigation"


const formSchema = z.object({
    email: z
        .email("Email inválido.")
        .min(5, "O email deve ter pelo menos 5 caracteres.")
        .max(200, "O email deve ter no máximo 200 caracteres."),
    password: z
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres.")
        .max(50, "A senha deve ter no máximo 50 caracteres."),
})

export function SignInForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        alert(`Formulário enviado com sucesso!\n ${JSON.stringify(data)}`)
        redirect("/")
    }

    return (

        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="email">
                                Email
                            </FieldLabel>
                            <Input
                                {...field}
                                id="email"
                                aria-invalid={fieldState.invalid}
                                placeholder="exemplo@exemplo.com"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                            <FieldDescription>
                                Insira seu email para acessar sua conta.
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
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                            <FieldDescription>
                                Insira sua senha para acessar sua conta.
                            </FieldDescription>
                        </Field>
                    )}
                />

                <Field orientation="vertical">
                    <Button type="submit" form="login-form" size="lg" className="text-xl py-6 px-4 m-auto">
                        Acessar minha conta
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    )
}
