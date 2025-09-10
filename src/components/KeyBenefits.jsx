import { motion } from "framer-motion";

export default function KeyBenefits() {
  const benefits = [
    {
      tag: "Product",
      tagColor: "bg-green-500",
      glow: "from-green-500/40 via-transparent to-transparent",
      bg: "bg-[radial-gradient(circle_at_center,_rgba(0,128,0,0.25),_rgba(0,0,0,1))]",
      title: "You don’t need 10K followers",
      sub: "You need 10 buyers a week",
    },
    {
      tag: "System",
      tagColor: "bg-red-500",
      glow: "from-red-500/40 via-transparent to-transparent",
      bg: "bg-[radial-gradient(circle_at_center,_rgba(139,0,0,0.25),_rgba(0,0,0,1))]",
      title: "You don’t need to live in DMs",
      sub: "You need one proven system",
    },
    {
      tag: "Growth",
      tagColor: "bg-blue-500",
      glow: "from-blue-500/40 via-transparent to-transparent",
      bg: "bg-[radial-gradient(circle_at_center,_rgba(0,100,255,0.25),_rgba(0,0,0,1))]",
      title: "You don’t need to pray for referrals",
      sub: "You need predictable growth",
    },
  ];

  return (
    <>
      {/* Floating cards overlap Hero */}
      <div className="relative z-20 -mt-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 px-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }} // optional: if you want smooth hide
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}  // 👈 allows re-trigger on scroll
              className={`relative flex-1 rounded-2xl overflow-hidden px-6 py-10 text-center
              ${b.bg} backdrop-blur-md border border-white/10 shadow-xl`}
            >

              {/* Radial light glow */}
              <div
                className={`absolute inset-0 bg-gradient-radial ${b.glow} blur-2xl`}
              />

              {/* Tag pill */}
              <div className="relative inline-flex px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${b.tagColor}`} />
                <span className="text-sm text-gray-200">{b.tag}</span>
              </div>

              {/* Title */}
              <h2 className="relative mt-6 text-xl md:text-2xl font-semibold">
                {b.title}
              </h2>

              {/* Subtitle */}
              <p className="relative mt-3 text-sm md:text-base text-gray-300 max-w-md mx-auto">
                {b.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Below sections */}
    </>
  );
}
