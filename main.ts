// Your Human in One Word — main.ts
// Writes a single original word to /output/entry.txt.
// No dependencies, no network. Always exits 0.
// The word is one single token: no spaces, no punctuation.

const WORD = "Octopus";

function writeEntry(): void {
  const targets: string[] = ["/output/entry.txt"];
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outDir) {
    targets.push(outDir + "/entry.txt");
  }
  targets.push("./entry.txt");

  for (const target of targets) {
    try {
      const fs = require("fs");
      // Plain UTF-8 text, no trailing newline: the gate counts characters.
      fs.writeFileSync(target, WORD, "utf8");
      return;
    } catch {
      // Try the next location.
    }
  }
}

writeEntry();
process.exit(0);
