# Guitar chords

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run chords <chord>
```

Example:

```
bun run chords e
```

Outputs (truncated to 2 chords):

```
E major (open)
    E  A  D  G  B  e
   O           O  O
1  |  |  |  ●  |  |
2  |  ●  ●  |  |  |
3  |  |  |  |  |  |
4  |  |  |  |  |  |


E major barre
    E  A  D  G  B  e

 7 [================]
 8  |  |  |  ●  |  |
 9  |  ●  ●  |  |  |
10  |  |  |  |  |  |
```

To display left handed chord diagrams, use the `lh` switch:

```bash
bun run chords C --lh
```
