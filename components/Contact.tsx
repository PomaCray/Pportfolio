import React, { useEffect, useState } from "react";

const STORAGE_KEY = "contact_form_v1";
const RECIPIENT = "abdurrazaqawwal@gmail.com";

const sanitizeHeader = (s: string) =>
  s
    .replace(/(\r|\n|%0a|%0d)/gi, " ") // strip CR/LF and encoded CR/LF
    .replace(/(bcc:|cc:|to:)/gi, "") // strip common header labels
    .trim();

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  // restore from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setName(parsed.name || "");
        setEmail(parsed.email || "");
        setMessage(parsed.message || "");
      }
    } catch {
      /* ignore parse errors */
    }
  }, []);

  // persist on changes
  useEffect(() => {
    const payload = { name, email, message };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore localStorage errors */
    }
  }, [name, email, message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = sanitizeHeader(name);
    const cleanEmail = sanitizeHeader(email);

    if (!cleanName) {
      setError("Please enter your name.");
      return;
    }
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message?.trim()) {
      setError("Please enter a message.");
      return;
    }

    const subject = `Portfolio contact from ${cleanName || cleanEmail}`;
    // keep message newlines but encode them with encodeURIComponent
    const body = `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${message.trim()}`;

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // navigate to mail client
    window.location.href = mailto;
    // note: we don't automatically clear stored draft because user may cancel.
    // If you want to clear after opening mail client, uncomment:
    // localStorage.removeItem(STORAGE_KEY);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    localStorage.removeItem(STORAGE_KEY);
    setError(null);
  };

  return (
    <div className="font-mono text-primary/100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p>If you have any questions or inquiries, feel free to reach out!</p>

      <form onSubmit={handleSubmit} className="mt-4" noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded-full border border-gray-300 p-2 w-full"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="rounded-full border border-gray-300 p-2 w-full"
            placeholder="you@domain.com"
            autoComplete="email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg border border-gray-300 p-2 w-full"
            rows={4}
            placeholder="Write your message..."
          />
        </div>

        {error && (
          <div className="mb-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            className="hover:translate-x-2 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-primary text-white py-2 px-4 rounded-full"
          >
            Send
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="py-2 px-4 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-full border border-gray-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
