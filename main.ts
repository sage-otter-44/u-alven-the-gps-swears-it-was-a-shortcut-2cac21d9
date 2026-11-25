import { mkdirSync, writeFileSync } from "node:fs";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
const MAX_CHARS = 200;

// The GPS's excuse, in its own voice: smug, defensive, blaming the map.
// One line, at most 200 characters, no setup, no dialogue tags.
const entry =
  "The map swore it was a shortcut, the cornfield disagreed, and honestly the scarecrow waved us through with more confidence than my satellite ever had.";

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry failed the gate: ${entry.length} chars`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
