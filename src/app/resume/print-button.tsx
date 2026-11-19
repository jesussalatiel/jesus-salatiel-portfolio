"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-10 items-center rounded-lg bg-[#0B1220] px-4 text-sm font-semibold text-white transition hover:bg-[#111735]"
    >
      Print / Save PDF
    </button>
  );
}
