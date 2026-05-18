# Getting Started — Disk Space First

Heads up: when I tried to run `npm install` for you, your **C: drive ran out of space mid-install**. I already cleaned up the half-installed `node_modules` folder so it's not wasting space anymore. The source code itself is fine — every file is intact.

## You need to free up disk space first

`node_modules` for this project is roughly **350-450 MB**. You probably want at least **2 GB free** before running `npm install` and `npm run dev` (Next.js builds and caches add more).

### Fastest wins on your machine

Based on your Downloads folder, here are the biggest space hogs to attack:

#### 1. Clean out Downloads — easily 20-50 GB
Your `C:\Users\seanp\Downloads` is packed with:
- **Dozens of installer .exe files** (Chrome, Discord, Cursor, Anaconda, JDK, Python, Loom, BlueStacks, Antigravity, etc.) — once installed, the installer is dead weight. Delete them.
- **Many duplicates** (`Sean McGovern Resume (1).docx` through `(5).docx`, `Designer (1).png` through `(28).png`, `Generic A.I. receptionist prompt (1)` through `(8).docx`, etc.) — keep the latest, delete the rest.
- **Video files**: `.mov`, `.mp4`, `.webm` — often hundreds of MB each.
- **Old zip files** you've already extracted.

Run this in PowerShell to see your biggest Download files:
```powershell
Get-ChildItem C:\Users\seanp\Downloads -File |
  Sort-Object Length -Descending |
  Select-Object -First 30 Name, @{N='MB';E={[math]::Round($_.Length/1MB,1)}}
```

#### 2. Empty Recycle Bin
```powershell
Clear-RecycleBin -Force -Confirm:$false
```

#### 3. Windows Disk Cleanup
Press `Win`, type `Disk Cleanup`, run it on C:, include "Clean up system files" — usually recovers 5–20 GB (Windows Update leftovers, temp files, old Windows installs).

#### 4. npm cache (if you've used npm before)
```powershell
npm cache clean --force
```

#### 5. Check existing node_modules elsewhere
```powershell
Get-ChildItem C:\Users\seanp -Recurse -Directory -Filter node_modules -ErrorAction SilentlyContinue |
  Select-Object FullName, @{N='SizeMB';E={[math]::Round((Get-ChildItem $_.FullName -Recurse -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1MB,1)}}
```
Old project node_modules folders are usually safe to delete.

---

## Once you have ~2 GB free

```powershell
cd C:\Users\seanp\kraus-law
npm install
npm run dev
```

Open http://localhost:3000.

Then continue with the full guide in `README.md`:
- Section 2: Add your OpenAI + Resend + Vapi keys to `.env.local`
- Section 3: Push to GitHub
- Section 4: Set up the Vapi.ai phone receptionist
- Section 5: Deploy to Vercel
- Section 6: Point a custom domain

---

## Alternative: skip your laptop entirely

If your drive is genuinely too small to free up enough space, you can:

1. **Use Vercel directly** — push to GitHub, import the repo on vercel.com, and let Vercel's servers build it. Local dev isn't required.
2. **Use a cloud IDE** — GitHub Codespaces, Gitpod, or StackBlitz can clone the repo and run `npm run dev` in your browser with zero local install.

You'd still need the source code on GitHub first:

```powershell
cd C:\Users\seanp\kraus-law
git init
git add .
git commit -m "Initial commit"
gh repo create kraus-law --private --source=. --push
```

Then go to vercel.com/new, import `kraus-law`, paste env vars, deploy.
