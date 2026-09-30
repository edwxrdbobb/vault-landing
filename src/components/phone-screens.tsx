import { StatusBar } from "./phone-frame";
import {
  GearIcon,
  ListIcon,
  LockIcon,
  PlusIcon,
  PulseIcon,
  SearchIcon,
  TimerIcon,
} from "./icons";

const vaults = [
  { name: "Dream House Fund", balance: "SLE 5,000.00", percent: 62, accent: "#8B5CF6", unlock: "Unlocks in 42 days" },
  { name: "Vacation Fund", balance: "SLE 3,500.00", percent: 70, accent: "#4C9BFF", unlock: "Unlocks in 14 days" },
  { name: "Emergency Reserve", balance: "SLE 1,980.00", percent: 66, accent: "#3DD6B0", unlock: "Unlocks in 96 days" },
];

const actions = [
  { icon: PlusIcon, label: "Add Vault", filled: true },
  { icon: TimerIcon, label: "Auto Pay", filled: false },
  { icon: ListIcon, label: "History", filled: false },
  { icon: GearIcon, label: "Settings", filled: false },
];

const tabs = [
  { icon: LockIcon, label: "Vaults" },
  { icon: TimerIcon, label: "AutoPay" },
  { icon: PulseIcon, label: "History" },
  { icon: GearIcon, label: "Settings" },
];

function TabBar({ active }: { active: string }) {
  return (
    <div className="relative flex items-center justify-around border-t border-white/10 bg-[rgba(12,18,38,0.96)] px-2 pb-5 pt-2.5">
      {tabs.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className={`flex flex-col items-center gap-1 ${
            label === active ? "text-brand-light" : "text-ink-3"
          }`}
        >
          <Icon className="h-[18px] w-[18px]" />
          <span className="text-[9px] font-semibold">{label}</span>
        </div>
      ))}
    </div>
  );
}

/** Home — the vaults dashboard. */
export function VaultsScreen() {
  return (
    <>
      <StatusBar />
      <div className="relative px-5 pb-3 pt-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[13px] leading-tight text-ink-2">Welcome back,</p>
            <p className="text-[19px] font-extrabold leading-tight tracking-tight">Edward Bob</p>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(180deg,#5AA0FF,#1E63E0)] text-[14px] font-bold ring-1 ring-white/25">
            EB
          </div>
        </div>

        <div className="glass sheen mb-6 rounded-[20px] p-4">
          <p className="text-[12px] text-ink-2">Total Locked Savings</p>
          <p className="mt-1 text-[30px] font-extrabold leading-none tracking-[-0.02em]">
            SLE 10,480<span className="text-ink-2">.00</span>
          </p>

          <div className="my-4 h-px bg-white/10" />

          <div className="flex justify-between">
            {actions.map(({ icon: Icon, label, filled }) => (
              <div key={label} className="flex w-[54px] flex-col items-center gap-1.5">
                <span
                  className={
                    filled
                      ? "btn-gloss grid h-10 w-10 place-items-center rounded-full"
                      : "grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.055] shadow-[var(--shadow-soft)]"
                  }
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-[9.5px] leading-tight text-ink-2">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-[15px] font-extrabold">My Active Vaults (3)</p>
          <span className="text-[11px] font-semibold text-brand-light">View All</span>
        </div>

        <div className="space-y-2.5">
          {vaults.map((vault) => (
            <div key={vault.name} className="glass glass-muted sheen rounded-[18px] p-3.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: vault.accent }}
                  />
                  <span className="truncate text-[13px] font-bold">{vault.name}</span>
                </div>
                <span className="shrink-0 text-[13px] font-extrabold">{vault.balance}</span>
              </div>

              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${vault.percent}%`, backgroundColor: vault.accent }}
                />
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-ink-3">
                <LockIcon className="h-3 w-3" />
                <span className="text-[10.5px]">{vault.unlock}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="Vaults" />
    </>
  );
}

/** The circular countdown ring from the vault detail screen. */
export function CountdownRing({
  size = 132,
  percent = 72,
  days = 14,
  hours = 6,
}: {
  size?: number;
  percent?: number;
  days?: number;
  hours?: number;
}) {
  const stroke = size * 0.075;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5AA0FF" />
            <stop offset="100%" stopColor="#1E63E0" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
        />
      </svg>
      <div className="absolute text-center">
        <p className="font-extrabold leading-none" style={{ fontSize: size * 0.17 }}>
          {days}d
        </p>
        <p className="mt-1 text-ink-2" style={{ fontSize: size * 0.085 }}>
          {hours}h remaining
        </p>
      </div>
    </div>
  );
}

/** Vault detail — countdown, progress, deposit history. */
export function VaultDetailScreen() {
  return (
    <>
      <StatusBar />
      <div className="relative px-4 pb-4 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[15px] font-extrabold">Vacation Fund</p>
          <span className="rounded-full border border-[rgba(90,160,255,0.35)] bg-[rgba(47,128,255,0.16)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-light">
            Locked
          </span>
        </div>

        <div className="mb-4 flex justify-center">
          <CountdownRing size={124} percent={72} />
        </div>

        <div className="glass sheen mb-3 rounded-[18px] p-3.5 text-center">
          <p className="text-[24px] font-extrabold leading-none tracking-[-0.02em]">
            SLE 3,500<span className="text-ink-2">.00</span>
          </p>
          <p className="mt-1.5 text-[10px] text-ink-2">Target: SLE 5,000.00 · 70% complete</p>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-[#4C9BFF]" />
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <span className="btn-gloss flex-1 rounded-full py-2 text-center text-[11px] font-bold">
            Deposit
          </span>
          <span className="btn-ghost flex-1 rounded-full py-2 text-center text-[11px] font-bold">
            Extend Lock
          </span>
        </div>

        <p className="mb-2 text-[11px] font-bold">Deposit history</p>
        <div className="space-y-2">
          {[
            ["Orange Money", "+SLE 250.00"],
            ["AfriMoney", "+SLE 1,000.00"],
            ["Orange Money", "+SLE 500.00"],
          ].map(([label, amount]) => (
            <div
              key={amount}
              className="glass glass-muted sheen flex items-center justify-between rounded-[14px] px-3 py-2.5"
            >
              <span className="text-[10.5px] text-ink-2">{label}</span>
              <span className="text-[11px] font-bold text-positive">{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/** Transaction history with filters. */
export function HistoryScreen() {
  const rows = [
    ["Vacation Fund deposit", "Jan 12, 2026", "+SLE 250.00", true],
    ["Landlord — Wilkinson Rd", "Jan 01, 2026", "-SLE 1,200.00", false],
    ["Emergency Reserve", "Dec 28, 2025", "+SLE 50.00", true],
    ["School fees", "Dec 05, 2025", "-SLE 180.00", false],
    ["Dream House Fund", "Dec 01, 2025", "+SLE 1,000.00", true],
  ] as const;

  return (
    <>
      <StatusBar />
      <div className="relative px-4 pb-4 pt-4">
        <p className="mb-3 text-[15px] font-extrabold">History</p>

        <div className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2">
          <SearchIcon className="h-3.5 w-3.5 text-ink-3" />
          <span className="text-[10.5px] text-ink-3">Search transactions…</span>
        </div>

        <div className="mb-3 flex gap-1.5">
          {["All", "Deposits", "Auto-Pay"].map((tab, i) => (
            <span
              key={tab}
              className={
                i === 0
                  ? "btn-gloss rounded-full px-2.5 py-1 text-[9.5px] font-bold"
                  : "rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[9.5px] font-semibold text-ink-2"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {rows.map(([label, date, amount, positive]) => (
            <div
              key={label}
              className="glass glass-muted sheen flex items-center justify-between gap-2 rounded-[14px] px-3 py-2.5"
            >
              <div className="min-w-0">
                <p className="truncate text-[11px] font-bold">{label}</p>
                <p className="mt-0.5 text-[9px] text-ink-3">{date}</p>
              </div>
              <span
                className={`shrink-0 text-[11px] font-extrabold ${
                  positive ? "text-positive" : "text-negative"
                }`}
              >
                {amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
