import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { AuthShell, Field, inputClass, submitClass } from "../components/auth-shell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Blink Procurement Portal" },
      {
        name: "description",
        content:
          "Sign in to your Blink account to manage vendors, compliance and procurement in one portal.",
      },
      { property: "og:title", content: "Login — Blink Procurement Portal" },
      {
        property: "og:description",
        content: "Sign in to the Blink procurement and vendor management portal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <AuthShell
      title="Login"
      subtitle="Welcome back. Sign in to your Blink account."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Field label="Email address">
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="example@company.com"
            className={inputClass}
          />
        </Field>

        <Field label="Password">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              required
              autoComplete="current-password"
              placeholder="Enter your password"
              className={`${inputClass} pr-14`}
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-5 grid place-items-center text-muted-foreground transition-colors hover:text-primary"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </Field>

        <div className="flex items-center justify-between gap-4">
          <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <input type="checkbox" className="h-4 w-4 rounded border-input accent-primary" />
            Remember me
          </label>
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button type="submit" className={submitClass}>
          Login
        </button>
      </form>
    </AuthShell>
  );
}
