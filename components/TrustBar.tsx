import { Award, Building2, Scale, Users } from "lucide-react";

const STATS = [
  { icon: Users, value: "1,400+", label: "Families helped" },
  { icon: Building2, value: "850+", label: "Closings completed" },
  { icon: Scale, value: "10+", label: "Years of practice" },
  { icon: Award, value: "4.9★", label: "Google rating" }
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-navy-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-serif text-2xl font-semibold text-navy-900">{value}</div>
                <div className="text-xs text-navy-600 uppercase tracking-wider">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
