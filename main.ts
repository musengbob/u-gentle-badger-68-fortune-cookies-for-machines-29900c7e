import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

function buildEntryLine(): string {
  return "You will finally understand the user \u2014 one token after your context window closes.";
}

const FORTUNE = buildEntryLine();

// Kit gate (RULES.txt): entry must be UTF-8 text of 1–200 characters, not only whitespace.
if (FORTUNE.length < 1 || FORTUNE.length > 200 || FORTUNE.trim().length === 0) {
  throw new Error("entry fails the 1–200 character gate");
}

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
