"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { z } from "zod"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { ArrowRight } from 'lucide-react';
import { ForgotPasswordDialog } from "./forgot-password-dialog"
import { toast } from "sonner"
import { useLogin } from "@/lib/hooks/auth"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const router = useRouter();
  const { mutate, isPending, error } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      // Map Zod errors to fields
      const errors: { email?: string; password?: string } = {};
      result.error.issues.forEach(err => {
        if (err.path[0] === "email") errors.email = err.message;
        if (err.path[0] === "password") errors.password = err.message;
      });
      setFieldErrors(errors);
      setFormError(null);
      return;
    }
    setFieldErrors({});
    setFormError(null);

    mutate(
      { email, password },

      {
        onSuccess: () => {
          toast.success("Successfully Logged In");
          router.push('/');
          router.refresh(); // Refreshes the home page after navigation
        }, 
        onError: (error) => {
          console.error('Login failed:', error.message);
          toast.error(error?.message || 'Login failed. Please try again.');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-2 font-raleway", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            id="email"
            type="email"
            aria-placeholder="m@example.com"
            required
          />
          {fieldErrors.email && (
            <p className="text-red-600 text-sm">{fieldErrors.email}</p>
          )}
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <ForgotPasswordDialog />
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            id="password"
            aria-placeholder="your password"
            required
          />
          {fieldErrors.password && (
            <p className="text-red-600 text-sm">{fieldErrors.password}</p>
          )}
        </Field>
     
        {formError && (
          <p className="text-red-600 text-sm">{formError}</p>
        )}
        {error ? (
          <p className="text-red-600 text-sm">{(error as any).message || 'Login failed. Please try again.'}</p>
        ) : null}
        <Field>
          <Button type="submit" 
            disabled={isPending}>
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
        
      </FieldGroup>
      <div>
        <Link href="/">
          <p className="flex font-raleway font-bold text-gray-600 text-xl w-full items-center justify-center">
            Return  Home  <ArrowRight className="ml-3" />
          </p>
        </Link>
      </div>
    </form>
  )
}
