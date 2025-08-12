#!/usr/bin/env node
import { Command } from "commander";
import { chords } from "./chords";
import { renderChord } from "./render";

const program = new Command();

program
  .name("guitar-chords")
  .description("CLI tool to display guitar chord variations")
  .version("1.0.0");

program
  .argument("<chord>", `Chord name, e.g. e, g, csus, "d minor"`)
  .option("--lh", "Render as left-handed chord")
  .action((chordName, options) => {
    // partial match chord variations on chord name
    const variations =
      chords[chordName.toUpperCase()] ||
      Object.values(chords)
        .flat()
        .filter((v) => v.name.toLowerCase().includes(chordName.toLowerCase()));

    if (!variations) {
      console.error(`Chord "${chordName}" not found.`);
      process.exit(1);
    }

    variations.forEach((v) => {
      console.log(renderChord({ chord: v, leftHanded: options.lh }));
    });
  });

program.parse();
