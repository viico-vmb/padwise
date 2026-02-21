import { Container, Button, Card, CardBody } from "@/components/ui";
import { copy } from "@/lib/copy";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute top-40 left-12 h-[420px] w-[420px] rounded-full bg-zinc-700/15 blur-3xl" />
        </div>

        <Container className="relative py-16">
          <div className="max-w-3xl">
            <div className="text-xs text-zinc-400">Mousepad finder • gamer-first • no tracking</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              {copy.heroTitle}
            </h1>
            <p className="mt-4 text-zinc-300 text-lg">
              {copy.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quiz" variant="primary">{copy.ctaPrimary}</Button>
              <Button href="/dataset" variant="secondary">{copy.ctaSecondary}</Button>
              <Button href="/about" variant="ghost">How it works</Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {copy.bullets.map((b) => (
              <Card key={b.title}>
                <CardBody>
                  <div className="text-lg font-semibold">{b.title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{b.body}</div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-xs text-zinc-500 max-w-3xl">
            {copy.disclaimer}
          </div>
        </Container>
      </section>
    </div>
  );
}
