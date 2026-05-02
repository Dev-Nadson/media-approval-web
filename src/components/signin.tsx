import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SignInForm } from "./forms/signin-form"
import { Separator } from "./ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Layers } from "lucide-react"

function SignInCard() {
    return (
        <Card className="w-100 shadow-xl shadow-primary/20">
            <CardHeader className="text-center">
                <div className="bg-primary rounded-4xl p-2 w-fit m-auto shadow-lg shadow-primary/70 mb-4">
                    <Layers strokeWidth={2.3} className="size-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl">Bem-vindo de volta!</CardTitle>
                <CardDescription>
                    Insira suas credenciais para acessar o painel.
                </CardDescription>
            </CardHeader>
            <CardContent className="mt-2 ">
                <SignInForm />
            </CardContent>
            <CardFooter className="flex flex-col gap-3 ">
                <Button type="button" variant="outline" className="w-[80%] gap-2 text-md py-5">
                    <Image
                        src="/google.svg"
                        alt="Google Icon"
                        width={30}
                        height={30}
                    />
                    Login com o Google
                </Button>

                <h3 className="flex gap-1">
                    Não tem uma conta?
                    <Link className="text-primary hover:underline font-extrabold" href="/signup">Crie uma!</Link>
                </h3>
            </CardFooter >
        </Card >
    )
}

export { SignInCard }