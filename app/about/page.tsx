import { Container, Card, CardBody, CardHeader } from "@/components/ui";

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">How PadWise works</h1>
        <p className="mt-3 text-zinc-300">
          The recommender is intentionally simple: it scores pads based on how well they match your preferred feel,
          your game type, your sens, your humidity needs, your budget tier, and your size requirement.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader title="Heuristic scoring (not a benchmark)" subtitle="We don’t claim scientific precision—just useful ranking." />
          <CardBody>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Feel match: speed/control closeness to your target.</li>
              <li>• Game bias: tac FPS leans control, tracking FPS leans speed.</li>
              <li>• Humidity: boosts pads that stay consistent in humid rooms.</li>
              <li>• Budget: soft penalty if a pad is above your tier.</li>
              <li>• Size: hard filter/penalty if your size isn’t available.</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Privacy-first" subtitle="Everything runs locally." />
          <CardBody>
            <p className="text-sm text-zinc-300">
              No accounts. No tracking pixels. No analytics by default. The dataset lives in the repo and your answers stay in your browser.
            </p>
            <p className="mt-3 text-sm text-zinc-400">
              If you deploy on Vercel, you can still add analytics later—your choice.
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10 text-xs text-zinc-500 max-w-3xl">
        Tip: Add screenshots (quiz + results) to your GitHub README. That’s what makes it look like a real product.
      </div>
    </Container>
  );
}
