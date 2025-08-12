import type { ChordVariation } from "./chords";

export function renderChord({
  chord,
  tuning = ["E", "A", "D", "G", "B", "e"],
  leftHanded = false,
}: {
  chord: ChordVariation;
  tuning?: string[];
  leftHanded?: boolean;
}): string {
  const maxFretsToShow = 4;

  // Flip arrays for left-handed rendering
  const renderTuning = leftHanded ? [...tuning].reverse() : tuning;
  const renderFrets = leftHanded ? [...chord.frets].reverse() : chord.frets;
  let renderFingers: (number | null)[] | undefined;
  if (chord.fingers) {
    renderFingers = leftHanded ? [...chord.fingers].reverse() : chord.fingers;
  }

  // Detect starting fret
  const minFret = Math.min(
    ...(renderFrets.filter((f) => typeof f === "number" && f > 0) as number[])
  );
  const startFret = minFret > 1 ? minFret : 1;

  // Detect barre chords
  type Barre = { fret: number; from: number; to: number };
  const barres: Barre[] = [];
  if (chord.fingers) {
    const fingerGroups: Record<number, number[]> = {};
    renderFingers!.forEach((finger, stringIndex) => {
      if (!finger) return;
      const fret = renderFrets[stringIndex];
      if (typeof fret !== "number") return;
      const key = finger * 100 + fret;
      fingerGroups[key] ??= [];
      fingerGroups[key].push(stringIndex);
    });

    for (const key in fingerGroups) {
      const strings = fingerGroups[key];
      if (
        Array.isArray(strings) &&
        strings.length > 1 &&
        strings[0] !== undefined
      ) {
        const fret = chord.frets[strings[0]] as number;
        const from = Math.min(...strings);
        const to = Math.max(...strings);
        barres.push({ fret, from, to });
      }
    }
  }

  // Alignment calculation
  const largestFretNumber = startFret + maxFretsToShow - 1;
  const fretNumWidth = String(largestFretNumber).length;
  const padFret = (n: number | string) => String(n).padStart(fretNumWidth, " ");

  // Dynamic header based on tuning
  const paddedTuning = renderTuning.map((s) => s.padStart(2, " ")).join(" ");
  let output = `\n${chord.name}\n   ${paddedTuning}\n`;

  // Top row: X or O
  output += "  ";
  renderFrets.forEach((f) => {
    if (f === "x") output += " X ";
    else if (f === 0) output += " O ";
    else output += "   ";
  });
  output += "\n";

  // Frets
  for (let fret = startFret; fret < startFret + maxFretsToShow; fret++) {
    output += `${padFret(fret)} `;
    renderFrets.forEach((f, stringIndex) => {
      const barre = barres.find(
        (b) => b.fret === fret && stringIndex >= b.from && stringIndex <= b.to
      );
      if (barre && stringIndex > barre.from && stringIndex < barre.to) {
        output += "===";
      } else if (barre && stringIndex === barre.from) {
        output += "[==";
      } else if (barre && stringIndex === barre.to) {
        output += "==]";
      } else if (f === fret) {
        output += " ● ";
      } else {
        output += " | ";
      }
    });
    output += "\n";
  }

  return output;
}
