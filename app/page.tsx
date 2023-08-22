"use client";

import { useState } from "react";
import { isErrored } from "stream";

export default function Home() {
  let [email, setEmail] = useState("");
  let [pending, setPending] = useState(false);
  let [error, setError] = useState("");
  let [submitted, setSubmitted] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    let res;
    try {
      res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw "Something went wrong. Please try again later.";
        return;
      }

      let json = await res.json();

      setSubmitted(json.message);
      // DOn't reset pending
    } catch (err) {
      setError(`${err}`);
      setPending(false);
      return;
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gray-900  text-white flex justify-center items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
          {error && (
            <div>
              <p className="text-red-500">{error}</p>
            </div>
          )}
          {submitted && (
            <div>
              <p className="text-green-500">Thanks!</p>
            </div>
          )}
          <h1 className="text-2xl mb-4">Toolschool: coming soon</h1>
          <p className="mb-4">
            Put in your email to get notified about upcoming sessions.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                disabled={pending}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
