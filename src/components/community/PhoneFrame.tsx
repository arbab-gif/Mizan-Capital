/** Simple modern phone frame; screen content is passed as children. */
export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative h-[580px] w-[284px] shrink-0 rounded-[48px] bg-[#1c1c1e] p-[10px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/40 ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#faf8f3]">
        <span className="absolute top-2.5 left-1/2 z-20 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
        <div className="flex items-center justify-between px-6 pt-3.5 text-[11px] font-semibold text-primary">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-3.5 rounded-[2px] border border-primary/80" />
          </span>
        </div>
        <div className="h-[calc(100%-28px)] overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
