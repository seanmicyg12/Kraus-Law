"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Phone } from "lucide-react";
import { SITE } from "@/lib/seo";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "How much does a divorce cost in Illinois?",
  "What's the closing process for a home in Elmhurst?",
  "I was denied SSDI — what now?",
  "Do you offer free consultations?"
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi, I'm the Kraus Law AI assistant. I can answer questions about divorce, family law, real estate closings, and SSDI in Illinois — and book you a free consult with Grace. What can I help you with?"
};

export default function Chatbot() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(1);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply || "Sorry, something went wrong. Please call us at " + SITE.phone + "." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: `I'm having trouble connecting. Please call ${SITE.phone} or use the contact form.` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-30 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-4 text-base font-semibold text-cream-50 shadow-2xl hover:scale-105 active:scale-95 transition-all ring-2 ring-gold-400/40"
            aria-label="Open AI assistant"
          >
            <span className="relative">
              <MessageCircle className="h-6 w-6" />
              {unread > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-[11px] font-bold text-navy-900">
                  {unread}
                </span>
              )}
            </span>
            <span>Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-40 w-[calc(100vw-2.5rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl border border-navy-100 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-cream-50 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/20 ring-2 ring-gold-400/40">
                  <Sparkles className="h-4 w-4 text-gold-300" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Kraus Law AI</div>
                  <div className="text-[11px] text-cream-200/80 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online · replies instantly
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 hover:bg-white/10 rounded-md" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-navy-900 text-cream-50 rounded-br-sm"
                        : "bg-white text-navy-900 border border-navy-100 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-navy-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-navy-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-navy-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-navy-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              {messages.length === 1 && (
                <div className="pt-2 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-navy-500 font-medium px-1">Try asking</div>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full text-left text-sm bg-white hover:bg-navy-900 hover:text-cream-50 text-navy-800 border border-navy-100 rounded-lg px-3 py-2 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="px-4 py-3 border-t border-navy-100 bg-white">
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 text-sm bg-cream-50 border border-navy-100 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-navy-400"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-cream-50 disabled:opacity-40 hover:bg-navy-800 transition"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-2 flex items-center justify-between text-[11px] text-navy-500">
                <span>AI assistant · not legal advice</span>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-1 hover:text-navy-900 font-medium">
                  <Phone className="h-3 w-3" /> Talk to Grace
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
