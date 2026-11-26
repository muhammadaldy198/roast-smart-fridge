import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast for "Roast the Smart Fridge: One Line, Best Laugh Wins".
// The fridge's own hum, reframed as snoring, plus its own sleep report
// turned against it: it sleeps perfectly while keeping its owner awake.
// The line is the whole entry: one sentence, one breath, sting in the tail.
// The fridge sleeps better than its owner — and its snoring is the reason why.
const LINE =
  "My smart fridge snores all night and still logs a 100% sleep score — it sleeps better than I do, and it's the reason why.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
