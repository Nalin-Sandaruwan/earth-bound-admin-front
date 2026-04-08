"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "./ui/spinner"
import { Otp } from "./otp"
import { useForgetPassword } from "@/lib/hooks/auth"

export function ForgotPasswordDialog() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { mutate, isPending, isError, error,data } = useForgetPassword()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!email || isPending) return

    mutate(
      { email },
      {
        onSuccess: () => {
          console.log("Reset password for:", email)
          setIsSubmitted(true)
        },
        onError: (error) => {
          console.error("Failed to send OTP:", error)
        },
      }
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="ml-auto text-sm underline-offset-4 hover:underline"
        >
          Forgot your password?
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogDescription>
            Enter your email address and we&apos;ll send you a OTP to reset your password.
          </DialogDescription>
        </DialogHeader>
        {isSubmitted || data ? (
          <div className="text-center py-4 flex flex-col w-full ">
            {/* <p className="text-green-600">
              If an account exists with this email, you will receive an OTP code.
            </p> */}
            <Otp/>




            
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field>
              <FieldLabel htmlFor="reset-email">Email</FieldLabel>
              <Input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
                disabled={isPending}
              />
            </Field>

            {/* Error Logics */}
            {isError && (
              <p className="text-red-600 text-sm">
                {error?.message }
              </p>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>

              {/* Button Spinner Logic */}
              {isPending ? (
                <>
                  Sending... <Spinner data-icon="inline-start" />
                </>
              ) : (
                "Send OTP code"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}