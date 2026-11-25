// The 3AM Fridge Text — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the text message a
// smart fridge sends its owner at 3 a.m. The voice is an appliance that
// has been awake all night watching the leftovers, and the punchline is
// that the fridge has already eaten them. The line is baked into the
// code below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text (101 characters): "The leftovers you swore you'd eat
// tomorrow have filed for a new owner. It's me. I'm eating them."
// The fridge speaks like a landlord serving an eviction notice — the
// leftovers "filed for a new owner" — and then confesses it is the
// new owner. The 3 a.m. timing does the rest: this is a fridge that
// has been up all night, judging.
const LINE =
  "3AM. The leftovers you swore you'd eat tomorrow have filed for a new owner. It's me. I'm eating them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the line and logic are unchanged.
// Second pass: "filed for a new owner" is the joke — the fridge is a bureaucrat.
// Third note: the confession lands in three short beats — It's me. I'm eating them.
// Fourth note: the fridge never apologizes — appliances that eat your food don't say sorry.
