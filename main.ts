import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const tip = "Tip: if the agent goes quiet, it isn't thinking. It's deciding how to tell you your last two instructions contradicted each other.";

// One line, 130 characters: a loading-screen tip for stressed developers
// and the AI coding agent beside them. Written without a trailing newline
// so the file is exactly the tip the judge reads.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), tip, "utf8");
