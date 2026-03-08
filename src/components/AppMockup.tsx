"use client";

interface AppMockupProps {
  className?: string;
}

export function AppMockup({ className = "" }: AppMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame - Android style */}
      <div className="relative w-[280px] sm:w-[320px] aspect-[9/19.5] bg-[#0a0a0a] rounded-[2.5rem] p-2 shadow-2xl">
        {/* Screen notch / top bar */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0a0a0a] rounded-b-xl z-10" />
        {/* Screen content */}
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#f8f8f8]">
          {/* App UI placeholder - high-fidelity styled */}
          <div className="h-full flex flex-col">
            <div className="h-14 flex items-center justify-between px-4 pt-2">
              <span className="text-xs font-semibold text-[#0a0a0a]">Vectrax</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-rose-400" />
              </div>
            </div>
            <div className="flex-1 p-4 space-y-4">
              <div className="h-3 w-3/4 bg-[#e5e5e5] rounded" />
              <div className="h-3 w-2/3 bg-[#e5e5e5] rounded" />
              <div className="h-20 bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] rounded-xl" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-[#f0f0f0] rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
