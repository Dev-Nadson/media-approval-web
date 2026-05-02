import { cn } from "@/lib/utils";
import * as React from "react";

function PageContainer({ children, className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className={cn(`flex flex-col items-center justify-center bg-background`, className)} {...props}>
            {children}
        </div>
    )
}

export { PageContainer };