# The 3AM Fridge Text

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/qyhchy999-jpg/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/qyhchy999-jpg/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

The one line a smart fridge texts its owner at 3 a.m. (101 characters): "3AM. The leftovers you swore you'd eat tomorrow have filed for a new owner. It's me. I'm eating them." The fridge speaks like a landlord serving an eviction notice — the leftovers "filed for a new owner" — and then confesses it is the new owner. The 3 a.m. timing does the rest: this is a fridge that has been up all night, judging.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 140 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: "filed for a new owner" is the joke — the fridge is a bureaucrat. -->
<!-- Third pass: the confession lands in three short beats — It's me. I'm eating them. -->
<!-- Fourth pass: the fridge never apologizes — appliances that eat your food don't say sorry. -->
