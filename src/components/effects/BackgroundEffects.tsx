export default function BackgroundEffects() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 -z-50 bg-[#070B14]" />

      {/* Aurora 1 */}
      <div className="pointer-events-none fixed -top-40 -left-40 -z-40 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[170px]" />

      {/* Aurora 2 */}
      <div className="pointer-events-none fixed top-1/3 right-0 -z-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[170px]" />

      {/* Aurora 3 */}
      <div className="pointer-events-none fixed bottom-0 left-1/3 -z-40 h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-[150px]" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Radial */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, #070B14 80%)",
        }}
      />
    </>
  );
}