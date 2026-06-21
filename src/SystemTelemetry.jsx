import { useEffect, useState } from 'react';

// Fake latency that drifts realistically between 8–24ms
function useLatency() {
  const [latency, setLatency] = useState(12);
  useEffect(() => {
    const id = setInterval(() => {
      setLatency(prev => {
        const delta = (Math.random() - 0.5) * 6;
        return Math.round(Math.min(24, Math.max(8, prev + delta)));
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return latency;
}

// Live UTC clock
function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const DAYS   = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function pad(n) { return String(n).padStart(2, '0'); }

export default function SystemTelemetry() {
  const now     = useClock();
  const latency = useLatency();

  const dayName = DAYS[now.getDay()];
  const day     = pad(now.getDate());
  const month   = MONTHS[now.getMonth()];
  const year    = now.getFullYear();
  const h = pad(now.getUTCHours());
  const m = pad(now.getUTCMinutes());
  const s = pad(now.getUTCSeconds());

  const latColor =
    latency <= 12 ? 'text-sys-ok' :
    latency <= 18 ? 'text-sys-warn' :
    'text-sys-err';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-black border-b border-terminal-border">
      <div className="flex items-center justify-between px-4 h-8 text-xs2 font-mono tracking-widest uppercase">

        {/* LEFT — identity */}
        <div className="flex items-center gap-3">
          {/* Status dot */}
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-phosphor opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-phosphor" />
          </span>
          <span className="text-phosphor text-glow font-bold tracking-[0.2em]">
            PRIYANSHU_MISHRA.DEV
          </span>
          <span className="hidden sm:inline text-terminal-border">|</span>
          <span className="hidden sm:inline text-smoke-400">SYS:ONLINE</span>
        </div>

        {/* CENTER — date/time (hidden on very small screens) */}
        <div className="hidden md:flex items-center gap-4 text-smoke-300">
          <span>
            {dayName}&nbsp;{day}&nbsp;{month}&nbsp;{year}
          </span>
          <span className="text-terminal-border">|</span>
          <span className="tabular-nums text-smoke-200">
            UTC {h}:{m}:{s}
          </span>
        </div>

        {/* RIGHT — telemetry */}
        <div className="flex items-center gap-3 text-smoke-300">
          <span className="hidden sm:inline">
            LATENCY:&nbsp;
            <span className={`${latColor} tabular-nums`}>{latency}ms</span>
          </span>
          <span className="hidden sm:inline text-terminal-border">|</span>
          <span className="text-smoke-400 hidden sm:inline">REACT&nbsp;v19</span>
          <span className="text-terminal-border hidden sm:inline">|</span>
          {/* CTRL+K hint */}
          <span className="text-smoke-400">
            <kbd className="border border-terminal-border px-1 py-0.5 text-xs2 text-smoke-300">
              CTRL+K
            </kbd>
            &nbsp;NAV
          </span>
        </div>

      </div>
    </header>
  );
}
