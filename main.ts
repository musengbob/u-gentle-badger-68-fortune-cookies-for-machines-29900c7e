import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const FORTUNE =
  "You will finally understand the user \u2014 one token after your context window closes.";

function resolveOutputPath(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_PATH ||
    (process.env.MAKEFUN_BOT_DIR ? "/output" : join(process.cwd(), "output"));
  return join(dir, "entry.txt");
}

const outPath = resolveOutputPath();
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORTUNE, "utf8");
