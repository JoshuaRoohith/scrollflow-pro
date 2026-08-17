import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { AuthShell, Field, inputClass, submitClass } from "../components/auth-shell";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Vendor Sign Up — Blink Procurement Portal" },
      {
        name: "description",
        content:
          "Create your Blink vendor profile: add your company details, compliance information and account manager to start applying for opportunities.",
      },
      { property: "og:title", content: "Vendor Sign Up — Blink" },
      {
        property: "og:description",
        content:
          "Register your company on Blink to manage your profile and apply for public and private opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignUpPage,
});

const industries = [
  "Industry",
  "Construction",
  "Engineering",
  "Financial Services",
  "Healthcare",
  "ICT",
  "Logistics",
  "Manufacturing",
  "Professional Services",
];

const sizes = [
  "1 - 10 Employees",
  "11 - 50 Employees",
  "51 - 200 Employees",
  "201 - 500 Employees",
  "500+ Employees",
];

const selectClass = `${inputClass} pr-10`;

function SignUpPage() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <AuthShell
      wide
      title="Sign Up Form"
      subtitle="Tell us about your company and we'll set up your vendor profile."
      footer={
        <>
          Already registered?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Login
          </Link>
        </>
      }
    >
      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Company Name">
            <input required placeholder="Company Name" className={inputClass} />
          </Field>
          <Field label="Company Registration Number">
            <input placeholder="Company Registration Number" className={inputClass} />
          </Field>
          <Field label="Web Address">
            <input placeholder="Example@company.co.za" className={inputClass} />
          </Field>

          <Field label="Description" className="sm:col-span-2 lg:col-span-1">
            <input placeholder="Company Description" className={inputClass} />
          </Field>
          <Field label="Industry">
            <select className={selectClass} defaultValue="Industry">
              {industries.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </Field>
          <Field label="Company Size">
            <select className={selectClass}>
              {sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-secondary-foreground">
            Postal Address*
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <input placeholder="Address" className={inputClass} />
            <input placeholder="City" className={inputClass} />
            <select className={selectClass} defaultValue="Select Province">
              {[
                "Select Province",
                "Eastern Cape",
                "Free State",
                "Gauteng",
                "KwaZulu-Natal",
                "Limpopo",
                "Mpumalanga",
                "North West",
                "Northern Cape",
                "Western Cape",
              ].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select className={selectClass} defaultValue="Select Country">
              {["Select Country", "South Africa", "Botswana", "Namibia", "Zimbabwe"].map(
                (c) => (
                  <option key={c}>{c}</option>
                ),
              )}
            </select>
            <input placeholder="ZIP Code" className={inputClass} />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-bold tracking-tight text-primary">
            Account Manager
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Name">
              <input placeholder="First Name" className={inputClass} />
            </Field>
            <Field label="Surname">
              <input placeholder="Last Name" className={inputClass} />
            </Field>
            <Field label="Email Address">
              <input
                type="email"
                placeholder="Example@company.co.za"
                className={inputClass}
              />
            </Field>
            <Field label="Phone Number">
              <input placeholder="Phone Number" className={inputClass} />
            </Field>

            <Field label="Password">
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="new-password"
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
            <Field label="Confirm Password">
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  className={`${inputClass} pr-14`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-5 grid place-items-center text-muted-foreground transition-colors hover:text-primary"
                >
                  {showConfirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </Field>
          </div>
        </div>

        <div className="flex justify-center">
          <button type="submit" className={`${submitClass} sm:w-auto sm:px-14`}>
            Sign Up
          </button>
        </div>
      </form>
    </AuthShell>
  );
}
