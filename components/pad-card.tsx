import { Pad } from "@/lib/types";
import { Card, CardBody, Pill } from "@/components/ui";

export function PadCard({ pad, score, reasons }: { pad: Pad; score?: number; reasons?: string[] }) {
  return (
    <Card className="overflow-hidden">
      <CardBody>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-zinc-400">{pad.brand}</div>
            <div className="text-xl font-semibold">{pad.model}</div>
          </div>
          {typeof score === "number" ? (
            <div className="text-right">
              <div className="text-xs text-zinc-400">Match</div>
              <div className="text-2xl font-semibold text-emerald-400">{Math.round(score)}</div>
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>{pad.surface}</Pill>
          <Pill>{pad.material}</Pill>
          <Pill>{pad.priceTier}</Pill>
          <Pill>{pad.thicknessMm}mm</Pill>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
            <div className="text-xs text-zinc-400">Speed</div>
            <div className="font-semibold">{pad.speed}/10</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
            <div className="text-xs text-zinc-400">Control</div>
            <div className="font-semibold">{pad.control}/10</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
            <div className="text-xs text-zinc-400">Humidity</div>
            <div className="font-semibold">{pad.humidityResistance}/10</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
            <div className="text-xs text-zinc-400">Durability</div>
            <div className="font-semibold">{pad.durability}/10</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-zinc-300">{pad.notes}</div>

        {reasons?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {reasons.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </CardBody>
    </Card>
  );
}
