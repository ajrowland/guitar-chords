export type ChordVariation = {
  name: string;
  frets: (number | "x")[];
  fingers: (number | null)[];
};

export const chords: Record<string, ChordVariation[]> = {
  C: [
    {
      name: "C major (open)",
      frets: ["x", 3, 2, 0, 1, 0],
      fingers: [null, 3, 2, null, 1, null],
    },
    {
      name: "C major barre",
      frets: [8, 10, 10, 9, 8, 8],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "C minor barre",
      frets: [8, 10, 10, 8, 8, 8],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "C7 (open)",
      frets: ["x", 3, 2, 3, 1, 0],
      fingers: [null, 3, 2, 4, 1, null],
    },
    {
      name: "Cmaj7 (open)",
      frets: ["x", 3, 2, 0, 0, 0],
      fingers: [null, 3, 2, null, null, null],
    },
    {
      name: "Cm7 (barre)",
      frets: [8, 10, 8, 8, 8, 8],
      fingers: [1, 3, 1, 1, 1, 1],
    },
    {
      name: "Csus2 (open)",
      frets: ["x", 3, 0, 0, 1, 3],
      fingers: [null, 3, null, null, 1, 4],
    },
    {
      name: "Csus4 (open)",
      frets: ["x", 3, 3, 0, 1, 1],
      fingers: [null, 3, 4, null, 1, 2],
    },
    {
      name: "Caug (barre)",
      frets: [8, 11, 10, 9, 9, 8],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Cdim (barre)",
      frets: [8, 9, 10, 8, 10, 8],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
  D: [
    {
      name: "D major (open)",
      frets: ["x", "x", 0, 2, 3, 2],
      fingers: [null, null, null, 1, 3, 2],
    },
    {
      name: "D major barre",
      frets: [10, 12, 12, 11, 10, 10],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "D minor (open)",
      frets: ["x", "x", 0, 2, 3, 1],
      fingers: [null, null, null, 2, 3, 1],
    },
    {
      name: "D minor barre",
      frets: [10, 12, 12, 10, 10, 10],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "D7 (open)",
      frets: ["x", "x", 0, 2, 1, 2],
      fingers: [null, null, null, 2, 1, 3],
    },
    {
      name: "Dmaj7 (open)",
      frets: ["x", "x", 0, 2, 2, 2],
      fingers: [null, null, null, 1, 2, 3],
    },
    {
      name: "Dm7 (open)",
      frets: ["x", "x", 0, 2, 1, 1],
      fingers: [null, null, null, 2, 1, 1],
    },
    {
      name: "Dsus2 (open)",
      frets: ["x", "x", 0, 2, 3, 0],
      fingers: [null, null, null, 1, 3, null],
    },
    {
      name: "Dsus4 (open)",
      frets: ["x", "x", 0, 2, 3, 3],
      fingers: [null, null, null, 1, 3, 4],
    },
    {
      name: "Daug (barre)",
      frets: [10, 13, 12, 11, 11, 10],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Ddim (barre)",
      frets: [10, 11, 12, 10, 12, 10],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
  E: [
    {
      name: "E major (open)",
      frets: [0, 2, 2, 1, 0, 0],
      fingers: [null, 2, 3, 1, null, null],
    },
    {
      name: "E major barre",
      frets: [7, 9, 9, 8, 7, 7],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "E minor (open)",
      frets: [0, 2, 2, 0, 0, 0],
      fingers: [null, 2, 3, null, null, null],
    },
    {
      name: "E minor barre",
      frets: [7, 9, 9, 7, 7, 7],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "E7 (open)",
      frets: [0, 2, 0, 1, 0, 0],
      fingers: [null, 2, null, 1, null, null],
    },
    {
      name: "Emaj7 (open)",
      frets: [0, 2, 1, 1, 0, 0],
      fingers: [null, 3, 1, 2, null, null],
    },
    {
      name: "Em7 (open)",
      frets: [0, 2, 0, 0, 0, 0],
      fingers: [null, 2, null, null, null, null],
    },
    {
      name: "Esus2 (open)",
      frets: [0, 2, 4, 4, 0, 0],
      fingers: [null, 1, 3, 4, null, null],
    },
    {
      name: "Esus4 (open)",
      frets: [0, 2, 2, 2, 0, 0],
      fingers: [null, 2, 3, 4, null, null],
    },
    {
      name: "Eaug (barre)",
      frets: [7, 10, 9, 8, 8, 7],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Edim (barre)",
      frets: [7, 8, 9, 7, 9, 7],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
  F: [
    {
      name: "F major (barre)",
      frets: [1, 3, 3, 2, 1, 1],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "F major (mini barre)",
      frets: ["x", "x", 3, 2, 1, 1],
      fingers: [null, null, 3, 2, 1, 1],
    },
    {
      name: "F minor barre",
      frets: [1, 3, 3, 1, 1, 1],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "F7 (barre)",
      frets: [1, 3, 1, 2, 1, 1],
      fingers: [1, 3, 1, 2, 1, 1],
    },
    {
      name: "Fmaj7 (barre)",
      frets: [1, 3, 2, 2, 1, 1],
      fingers: [1, 3, 2, 4, 1, 1],
    },
    {
      name: "Fm7 (barre)",
      frets: [1, 3, 1, 1, 1, 1],
      fingers: [1, 3, 1, 1, 1, 1],
    },
    {
      name: "Fsus2 (barre)",
      frets: [1, 3, 0, 0, 1, 1],
      fingers: [1, 3, null, null, 1, 1],
    },
    {
      name: "Fsus4 (barre)",
      frets: [1, 3, 3, 3, 1, 1],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "Faug (barre)",
      frets: [1, 4, 3, 2, 2, 1],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Fdim (barre)",
      frets: [1, 2, 3, 1, 3, 1],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
  G: [
    {
      name: "G major (open)",
      frets: [3, 2, 0, 0, 0, 3],
      fingers: [2, 1, null, null, null, 3],
    },
    {
      name: "G minor barre",
      frets: [3, 5, 5, 3, 3, 3],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "G7 (open)",
      frets: [3, 2, 0, 0, 0, 1],
      fingers: [2, 1, null, null, null, 3],
    },
    {
      name: "Gmaj7 (open)",
      frets: [3, 2, 0, 0, 0, 2],
      fingers: [2, 1, null, null, null, 3],
    },
    {
      name: "Gm7 (barre)",
      frets: [3, 5, 3, 3, 3, 3],
      fingers: [1, 3, 1, 1, 1, 1],
    },
    {
      name: "Gsus2 (open)",
      frets: [3, 0, 0, 0, 3, 3],
      fingers: [2, null, null, null, 3, 4],
    },
    {
      name: "Gsus4 (open)",
      frets: [3, 3, 0, 0, 1, 1],
      fingers: [2, 3, null, null, 1, 1],
    },
    {
      name: "Gaug (barre)",
      frets: [3, 6, 5, 4, 4, 3],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Gdim (barre)",
      frets: [3, 4, 5, 3, 5, 3],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
  A: [
    {
      name: "A major (open)",
      frets: ["x", 0, 2, 2, 2, 0],
      fingers: [null, null, 2, 1, 3, null],
    },
    {
      name: "A major barre",
      frets: [5, 7, 7, 6, 5, 5],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "A minor (open)",
      frets: ["x", 0, 2, 2, 1, 0],
      fingers: [null, null, 2, 3, 1, null],
    },
    {
      name: "A minor barre",
      frets: [5, 7, 7, 5, 5, 5],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "A7 (open)",
      frets: ["x", 0, 2, 0, 2, 0],
      fingers: [null, null, 2, null, 1, null],
    },
    {
      name: "Amaj7 (open)",
      frets: ["x", 0, 2, 1, 2, 0],
      fingers: [null, null, 2, 1, 3, null],
    },
    {
      name: "Am7 (open)",
      frets: ["x", 0, 1, 0, 1, 0],
      fingers: [null, null, 1, null, 2, null],
    },
    {
      name: "Asus2 (open)",
      frets: ["x", 0, 2, 2, 0, 0],
      fingers: [null, null, 1, 2, null, null],
    },
    {
      name: "Asus4 (open)",
      frets: ["x", 0, 2, 2, 3, 0],
      fingers: [null, null, 1, 2, 3, null],
    },
    {
      name: "Aaug (barre)",
      frets: [5, 8, 7, 6, 6, 5],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Adim (barre)",
      frets: [5, 6, 7, 5, 7, 5],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
  B: [
    {
      name: "B major (barre)",
      frets: ["x", 2, 4, 4, 4, 2],
      fingers: [null, 1, 3, 4, 2, 1],
    },
    {
      name: "B major barre",
      frets: [7, 9, 9, 8, 7, 7],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "B minor barre",
      frets: [7, 9, 9, 7, 7, 7],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "B7 (barre)",
      frets: [7, 9, 7, 8, 7, 7],
      fingers: [1, 3, 1, 2, 1, 1],
    },
    {
      name: "Bmaj7 (barre)",
      frets: [7, 9, 8, 8, 7, 7],
      fingers: [1, 3, 2, 4, 1, 1],
    },
    {
      name: "Bm7 (barre)",
      frets: [7, 9, 7, 7, 7, 7],
      fingers: [1, 3, 1, 1, 1, 1],
    },
    {
      name: "Bsus2 (barre)",
      frets: [7, 9, 7, 7, 7, 7],
      fingers: [1, 3, 1, 1, 1, 1],
    },
    {
      name: "Bsus4 (barre)",
      frets: [7, 9, 9, 9, 7, 7],
      fingers: [1, 3, 4, 2, 1, 1],
    },
    {
      name: "Baug (barre)",
      frets: [7, 10, 9, 8, 8, 7],
      fingers: [1, 4, 3, 2, 2, 1],
    },
    {
      name: "Bdim (barre)",
      frets: [7, 8, 9, 7, 9, 7],
      fingers: [1, 2, 4, 1, 3, 1],
    },
  ],
};
