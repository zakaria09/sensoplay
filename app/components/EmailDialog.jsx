"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EmailDialog({ children }) {
  const [email, setEmail] = React.useState("");
  const [statusMessage, setStatusMessage] = React.useState({
    success: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_MAILER_API_URL}/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILER_API_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setStatusMessage({
          message: "You have joined our waitlist!",
          success: true,
        });
        setEmail(""); // Clear the input field
      } else {
        const errorData = await response.json();
        setStatusMessage({
          message: `Error: ${errorData.message || "Failed to join."}`,
          success: false,
        });
      }
    } catch (error) {
      setStatusMessage({
        message: "An error occurred. Please try again later.",
        success: false,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Enter your email below to join our waitlist and stay updated.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-[#C1D81D] hover:bg-[#d4e171] text-black font-medium py-2 px-5 rounded shadow-md cursor-pointer"
          >
            Submit
          </button>
        </form>
        {statusMessage.success ? (
          <>
            <p className="mt-4 text-xl text-center text-slate-900">
              {statusMessage.message} ✅
            </p>
            <p className="text-lg text-center text-gray-700">
              Keep an eye 👀 out for any emails from us!
            </p>
          </>
        ) : (
          <p className="mt-4 text-center text-red-500">
            {statusMessage.message}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
