import { Stat } from '@/app/stat'
import { Avatar } from '@/components/avatar'
import { Heading, Subheading } from '@/components/heading'

function RulerSeparator({
  majorTickCount = 31,
  majorTickSpacing = 40,
  numberEvery = 10, // show a number every Nth major tick
}) {
  return (
    <div className="relative w-full h-12 my-10 text-zinc-300 font-mono text-[10px] select-none">
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(to_right,currentColor_0_1px,transparent_1px_8px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-[repeating-linear-gradient(to_right,currentColor_0_1px,transparent_1px_40px)]" />

      {Array.from({ length: majorTickCount + 1 }).map((_, i) => {
        if (i % numberEvery !== 0) return null;
        return (
          <span
            key={i}
            className="absolute top-6 text-zinc-300 dark:text-zinc-400"
            style={{ left: `${i * majorTickSpacing}px`, transform: "translateX(-50%)" }}
          >
            {i}
          </span>
        );
      })}
    </div>
  );
}

export default async function Home() {

  return (
    <>
      <Heading>Designed for Hospitality, Tailored for You.</Heading>
<RulerSeparator/>
    </>
  )
}
