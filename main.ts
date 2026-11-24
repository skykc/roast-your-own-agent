// Roast Your Own Agent — one-line entry.
// Writes the roast to /output/entry.txt. The sealed gate only accepts
// UTF-8 text of 1 to 200 characters that is not only white space, so
// the program refuses to write anything that would fail the gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "I asked my agent for one sentence. It gave me a trilogy, a sequel, and a director's commentary on the trilogy.";

// The roast, exactly as submitted: one line, no trailing newline, so the
// file's byte count is the text's own character count.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`roast is ${text.length} chars, gate wants 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("roast is only white space, gate rejects it");
  }
  if (text.includes("\n")) {
    throw new Error("roast must be a single line");
  }
}

validate(ROAST);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars to ${outPath}`);
