import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },
  },
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-primary":
      "bg-primary-900 text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75",
  },
  safelist: [
    "bg-primary-50",
    "bg-primary-100",
    "bg-primary-200",
    "bg-primary-300",
    "bg-primary-400",
    "bg-primary-500",
    "bg-primary-600",
    "bg-primary-700",
    "bg-primary-800",
    "bg-primary-900",
    "text-primary-500",
    "text-primary-600",
    "text-primary-700",
    "text-primary-800",
    "text-primary-900",
  ],
});
