import { Container } from "@/components/ui";
import { copy } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900/70">
      <Container className="py-10">
        <div className="text-sm text-zinc-400">
          <div className="font-medium text-zinc-200">{copy.brand}</div>
          <div className="mt-2 max-w-3xl">{copy.disclaimer}</div>
          <div className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} — Built for clarity, not hype.</div>
        </div>
      </Container>
    </footer>
  );
}
