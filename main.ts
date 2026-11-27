// u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209: writes one line to /output/entry.txt.
// Node 22, TypeScript as-is, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, written by hand for this bounty.
const LINE = "Says 'make it pop' at 11 p.m., vanishes, then returns at 8 a.m. asking why it isn't done yet. Four stars — predictable, like a cron job.";

// Write the line exactly, with no trailing newline, so the gate counts it as-is.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
