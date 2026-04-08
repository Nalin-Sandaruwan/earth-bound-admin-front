"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useResetPassword } from "@/lib/hooks/auth"

export function Otp() {
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const { isPending, mutate, error } = useResetPassword()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!otp || !newPassword) return

    mutate(
      { otp, newPassword },
      {
        onSuccess: () => {
          setSuccess(true)
          setTimeout(() => {
            router.push("/login")
          }, 2000) // Redirect after 2 seconds
        },
        onError: (error:any) => {
          console.error("Password reset failed:", error)
        },
      }
    )
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <p className="text-green-600 font-semibold mb-2">
          Password reset successful!
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to login page...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* OTP Field */}
      <div className="flex flex-col gap-2">
        <Label>One-Time Password</Label>
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* New Password Field */}
      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={isPending}
          required
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">
          {error.message || "Password reset failed."}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isPending || !otp || !newPassword}
      >
        {isPending ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  )
}
