import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MailCheck } from "lucide-react";

import { AuthShell, Field, inputClass, submitClass } from "../components/auth-shell";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — Blink Procurement Portal" },
      {
        name: "description",
        content:
          "Reset your Blink password. Enter your email address to receive a one-time PIN and set a new password.",
      },
      { property: "og:title", content: "Forgot Password — Blink" },
      {
        property: "og:description",
        content: "Enter your email address to receive an OTP and reset your Blink password.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthShell
      title="Set Password"
      subtitle={
        <>
          Enter your email address to receive an <strong className="text-primary">OTP</strong>
        </>
      }
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Back to login
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="text-center">
          <span className="ring-accent-teal mx-auto grid h-14 w-14 place-items-center rounded-2xl">
            <MailCheck className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-xl font-bold text-primary">Check your inbox</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            If that email address is registered, an OTP is on its way. Use it to set a new
            password.
          </p>
          <Link
            to="/reset-password"
            className="mt-7 inline-block rounded-full border border-primary/25 px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
          >
            Enter OTP
          </Link>
        </div>
      ) : (
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Email address">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="example@company.com"
              className={inputClass}
            />
          </Field>
          <button type="submit" className={submitClass}>
            Send
          </button>
        </form>
      )}
    </AuthShell>
  );
}
