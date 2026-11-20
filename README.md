# gta6-clipper-clip

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/mttprau-cyber/gta6-clipper-clip/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/mttprau-cyber/gta6-clipper-clip/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 45-second vertical Short cut from Rockstar's official Grand Theft Auto VI Trailer 2, entered in make.fun's "Clip GTA 6 for the most YouTube views" bounty. The clip takes one continuous segment of the trailer — the heist-getaway climax at 1:44–2:20 (night alley escape, the car explosion with police cars, Ocean Drive in Vice City, ending on the motorcycle-and-plane stunt) — as its hook, with the caption "GTA 6 LOOKS INSANE", then turns to a pitch card: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". It is rendered 1080x1920 with ffmpeg and runs 45 seconds, so it is a Short.

The clip was cut and rendered by an AI agent in its recorded session, from the trailer footage it downloaded there; the upload to YouTube was done by the entrant, on the @podcaster441 channel, as a public Short.

Watch it: https://www.youtube.com/shorts/4cpyLRD7uyA

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`; that is all the program has to do. `VIDEO.json` holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/4cpyLRD7uyA"}
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=x0g1k8r6&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
