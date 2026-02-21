import { Container, Pill, Button } from "@/components/ui";
import { copy } from "@/lib/copy";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/70 bg-zinc-950/70 backdrop-blur">
      <Container className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{copy.brand}</div>
            <div className="text-xs text-zinc-400">{copy.tagline}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Pill>Local • No tracking</Pill>
          <Button href="/quiz" variant="primary">Start</Button>
          <Button href="/dataset" variant="secondary">Dataset</Button>
        </div>
      </Container>
    </header>
  );
}
