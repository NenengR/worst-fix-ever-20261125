// Worst Fix Ever: Funniest Commit Message
// Entry: one commit message line (89 chars, within the 1-100 gate) for a fix
// that made everything worse. Revision: comment wording only, entry unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Fixed the crash by removing the crash, the feature, and the last three months of backups.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
