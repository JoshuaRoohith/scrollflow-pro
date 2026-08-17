import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Eye, EyeOff, HelpCircle } from "lucide-react";

import { AuthShell, Field, inputClass, submitClass } from "../components/auth-shell";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "New Password — Blink Procurement Portal" },
      {
        name: "description",
        content:
          "Choose a new password for your Blink account: 8 characters, 1 special character and 3 numbers.",
      },
      { property: "og:title", content: "New Password — Blink" },
      {
        property: "og:description",
        content: "Set a new password for your Blink procurement portal account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResetPasswordPage,
});

const rule = /^(?=(?:.*\d){3,})(?=.*[^A-Za-z0-9]).{8,}$/;

function ResetPasswordPage() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const valid = rule.test(password);
  const matches = confirm.length > 0 && confirm === password;

  return (
    <AuthShell
      title="Password"
      subtitle="Choose a new password for your Blink account."
      footer={
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Back to login
        </Link>
      }
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Field label="Enter Password">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              className={`${inputClass} pr-20`}
            />
            <div className="absolute inset-y-0 right-5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                aria-label={show ? "Hide password" : "Show password"}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              {valid ? (
                <span className="ring-accent-teal grid h-5 w-5 place-items-center rounded-full">
                  <Check className="h-3 w-3" />
                </span>
              ) : null}
            </div>
          </div>
          <span className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            8 characters, 1 special character and 3 numbers
            <HelpCircle className="h-3.5 w-3.5" />
          </span>
        </Field>

        <Field label="Confirm Password">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
              className={`${inputClass} pr-14`}
            />
            {matches ? (
              <span className="ring-accent-teal absolute inset-y-0 right-5 my-auto grid h-5 w-5 place-items-center rounded-full">
                <Check className="h-3 w-3" />
              </span>
            ) : null}
          </div>
        </Field>

        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="h-4 w-4 rounded border-input accent-primary" />
          Remember Me
        </label>

        <button type="submit" className={submitClass}>
          Login
        </button>
      </form>
    </AuthShell>
  );
}
