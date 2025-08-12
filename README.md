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

```
bun run chords e --lh
```

Outputs (truncated to 2 chords):

```
E major (open)
    e  B  G  D  A  E
   O  O           O
1  |  |  ●  |  |  |
2  |  |  |  ●  ●  |
3  |  |  |  |  |  |
4  |  |  |  |  |  |


E major barre
    e  B  G  D  A  E

 7 [================]
 8  |  |  ●  |  |  |
 9  |  |  |  ●  ●  |
10  |  |  |  |  |  |
```
