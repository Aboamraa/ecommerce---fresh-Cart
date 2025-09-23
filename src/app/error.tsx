"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <html>
      <body className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong 😢
        </h2>
        <p className="mb-6 text-gray-600">
          We’re sorry, an unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
