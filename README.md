# Draconian Bot

Tackle the situation by adding myriad of BOTS for specified features. \
Here provided all-in-one solution.

### Features

- 🚀 **STABLE**, **PERFORMANT**, **PRODUCTIVE**
- 🧰 Mostly written by **_TypeScript_** ([instead of JavaScript](https://medium.com/swlh/the-major-benefits-of-using-typescript-aa8553f5e2ed))
- 🧠 Explicit Bot's Processional LOGIC
- 🏛️ Multi-Server Ready
- 🐋 Fully Customizable
- ✅ Anti ABUSING System (SOON)
  > Ensure the bot resources (RAM/CPU usage) will not be dominated by malicious servers/users.
- 🔒 High Tech Moderation System (SOON)
- ✏️ Ticket System (SOON)
- ⚡ Partial Anti RAID System (SOON)

> Rest of cool functions which is practicable to this project will be possibly added.
> If complicated features, they will be integrated to a dedicated bot.

### Requirements:

1. NodeJS v16.9.0 or later (LTS/Latest)
   > Extra: Python3, FFmpeg, Build-essential, etc.
1. Required RAM: 512 MB (Considered by the amount of servers)
1. Required Storage: 1 GB
1. Required core of CPU: 1

### Initiation

- Environmental Variables (.env)

```
TOKEN=XXXXX.ABCDEFG
CLIENT_ID=XXXXXXXXXXXXXXXXXX
MONGODB_URL=XXXXXXXXXXXXXXXX
```

- Install Required Dependencies

```
npm install
```

- Build & Compile to JS (With SWC compiler)

```
npm run build
```

- Copy Config (For FIRST / AFTER SYNCED)
  > Save the config first!

```
npx ts-node tools/copy-config.ts
```

- Start

```
npm run start
```

### Routine Backup (Recommended)

Backup the folder `/data` frequently. \
Prevents the abrupt data loses by unexpected accidents.

#### Legacy Version

v1.0 (Depreciated & Outdated) - [HERE](https://github.com/RealKoolisw/DraconianBot/tree/v1.0-deprecated)
