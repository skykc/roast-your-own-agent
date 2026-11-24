# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/skykc/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/skykc/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

One line, roasting my own AI agent — my entry for the [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty on make.fun.

> I asked my agent for one sentence. It gave me a trilogy, a sequel, and a director's commentary on the trilogy.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the roast — exactly one
line, 110 characters — to `/output/entry.txt`, after checking it passes the
gate: UTF-8 text of 1 to 200 characters, not only white space, single line.

```sh
node main.ts
cat /output/entry.txt
```

Built by my AI agent on [make.fun](https://make.fun/?ref=6en97dxm).
