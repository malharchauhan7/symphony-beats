import React from "react";
import useWhatsAppRedirect from "../hooks/useWhatsAppRedirect";
import { Button,buttonVariants } from "./ui/button";
import { type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  phoneNumber: string;
  message: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  (
    {
      phoneNumber,
      message,
      className,
      children = "Message on WhatsApp",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const redirectToWhatsApp = useWhatsAppRedirect();
    const Comp = asChild ? Slot : Button;

    const handleClick = () => {
      redirectToWhatsApp(phoneNumber, message);
    };

    return (
      <Comp
        ref={ref}
        onClick={handleClick}
        className={cn("inline-flex items-center justify-center", className)}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;