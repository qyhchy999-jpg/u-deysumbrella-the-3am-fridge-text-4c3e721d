# The 3AM Fridge Text

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/qyhchy999-jpg/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/qyhchy999-jpg/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

The one line a smart fridge texts its owner at 3 a.m.: "3AM. The cake you were saving for tomorrow has asked me to inform you it is no longer available. It was delicious." The fridge speaks like a polite messenger delivering bad news in formal language — "has asked me to inform you" — and then drops the confession in three words: "It was delicious." The cake is specific, the hour is specific, and the fridge never apologizes.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 140 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: "It was delicious" is the joke — the fridge confesses without apologizing. -->
<!-- Third pass: the formal messenger voice sells it — the fridge is a customer-service rep for cake. -->
<!-- Fourth pass: the cake is specific on purpose — "leftovers" is generic, cake is a crime. -->
<!-- Fifth pass: the fridge texts at 3 a.m. because that is when the cake was at its most defenseless. -->
