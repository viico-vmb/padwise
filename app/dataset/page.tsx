import { Container, Card, CardBody, CardHeader, Pill, Button } from "@/components/ui";
import { pads } from "@/data/pads";

export default function DatasetPage() {
  return (
    <Container className="py-12">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold">Dataset</h1>
          <p className="mt-2 text-zinc-400 text-sm">
            30 popular pads with heuristic attributes (speed/control/humidity/durability). Verify specs before buying.
          </p>
        </div>
        <Button href="/quiz" variant="primary">Take the quiz</Button>
      </div>

      <div className="mt-6 grid gap-4">
        {pads.map((p) => (
          <Card key={p.id}>
            <CardHeader title={`${p.brand} — ${p.model}`} subtitle={p.notes} />
            <CardBody>
              <div className="flex flex-wrap gap-2">
                <Pill>{p.surface}</Pill>
                <Pill>{p.material}</Pill>
                <Pill>{p.priceTier}</Pill>
                <Pill>{p.thicknessMm}mm</Pill>
                <Pill>sizes: {p.sizes.join(", ")}</Pill>
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                  <div className="text-xs text-zinc-400">Speed</div>
                  <div className="font-semibold">{p.speed}/10</div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                  <div className="text-xs text-zinc-400">Control</div>
                  <div className="font-semibold">{p.control}/10</div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                  <div className="text-xs text-zinc-400">Humidity</div>
                  <div className="font-semibold">{p.humidityResistance}/10</div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                  <div className="text-xs text-zinc-400">Durability</div>
                  <div className="font-semibold">{p.durability}/10</div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
}
