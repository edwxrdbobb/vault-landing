import { PhoneFrame } from "./phone-frame";
import { HistoryScreen, VaultDetailScreen, VaultsScreen } from "./phone-screens";
import { BoltIcon, LockIcon } from "./icons";

/** Small glass chips that fan out around the devices. */
function FloatingCard({
  className = "",
  children,
  animate = "animate-float",
}: {
  className?: string;
  children: React.ReactNode;
  animate?: string;
}) {
  return (
    <div className={`absolute z-30 ${animate} ${className}`}>
      <div className="glass glass-strong sheen rounded-2xl px-4 py-3">{children}</div>
    </div>
  );
}

export function DeviceComposition() {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl justify-center">
      {/* Flanking devices — desktop only, angled and set back. */}
      <div
        aria-hidden
        className="absolute left-0 top-28 hidden xl:block"
        style={{ transform: "rotate(-8deg)" }}
      >
        <div className="opacity-90">
          <PhoneFrame width={252} glow={false}>
            <VaultDetailScreen />
          </PhoneFrame>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute right-0 top-28 hidden xl:block"
        style={{ transform: "rotate(8deg)" }}
      >
        <div className="opacity-90">
          <PhoneFrame width={252} glow={false}>
            <HistoryScreen />
          </PhoneFrame>
        </div>
      </div>

      {/* Hero device */}
      <div className="relative z-20">
        <PhoneFrame width={330}>
          <VaultsScreen />
        </PhoneFrame>
      </div>

      {/* Floating detail cards */}
      <FloatingCard className="left-0 top-[6%] hidden md:block xl:left-[-4%] xl:top-[-3%]">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(47,128,255,0.18)] text-brand-light">
            <LockIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] text-ink-2">Locked until</p>
            <p className="text-[13px] font-extrabold">15 Dec 2026</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="left-0 top-[46%] hidden md:block xl:left-[-6%] xl:top-auto xl:bottom-[4%]"
        animate="animate-float-slow"
      >
        <p className="text-[11px] text-ink-2">Deposit confirmed</p>
        <p className="mt-0.5 text-[17px] font-extrabold text-positive">+SLE 250.00</p>
        <p className="mt-0.5 text-[10px] text-ink-3">Orange Money · *715*1#</p>
      </FloatingCard>

      <FloatingCard
        className="right-0 top-[16%] hidden md:block xl:right-[-4%] xl:top-[-3%]"
        animate="animate-float-slow"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(61,214,176,0.18)] text-positive">
            <BoltIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] text-ink-2">Auto-pay sent</p>
            <p className="text-[13px] font-extrabold">SLE 1,200.00</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="right-0 bottom-[16%] hidden md:block xl:right-[-6%] xl:bottom-[4%]">
        <p className="text-[11px] text-ink-2">Vacation Fund</p>
        <div className="mt-2 flex items-center gap-2.5">
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-[#4C9BFF]" />
          </div>
          <span className="text-[12px] font-extrabold">70%</span>
        </div>
      </FloatingCard>
    </div>
  );
}
