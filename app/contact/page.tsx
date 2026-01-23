"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "../../components/SocialIcons";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_uppqj7o",
        "template_peixxza",
        form.current,
        "2rwa35pN8iBiu32CL"
      )
      .then(
        () => {
          setSent(true);
          setError("");
          form.current?.reset();
        },
        (err) => {
          setError("Failed to send message. Please try again.");
          console.error("EmailJS error:", err);
        }
      );
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <section className="w-full max-w-2xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-zinc-900">Contact</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Feel free to reach out for collaboration or just to say hi!
        </p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 mb-8 items-center">
          <input type="text" name="name" placeholder="Your Name" required className="px-4 py-2 rounded border border-zinc-300 bg-white text-zinc-900 w-full max-w-md" />
          <input type="email" name="email" placeholder="Your Email" required className="px-4 py-2 rounded border border-zinc-300 bg-white text-zinc-900 w-full max-w-md" />
          <textarea name="message" placeholder="Your Message" required rows={5} className="px-4 py-2 rounded border border-zinc-300 bg-white text-zinc-900 w-full max-w-md" />
          <button
            type="submit"
            className="px-6 py-2 rounded bg-blue-600 text-white font-extrabold text-lg shadow-lg underline underline-offset-4 decoration-pink-400 hover:bg-blue-700 transition mt-2"
          >
            Send Message
          </button>
          {sent && <p className="text-green-600">Message sent!</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
        <div className="flex gap-6 mt-4 justify-center">
          <a href="mailto:faizanakhan2003@gmail.com" aria-label="Email" className="text-blue-600 hover:text-blue-800 text-2xl">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/faizan-khan234" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800 text-2xl">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/jellyfishing2346" aria-label="GitHub" className="text-blue-600 hover:text-blue-800 text-2xl">
            <GitHubIcon />
          </a>
        </div>
      </section>
    </main>
  );
}