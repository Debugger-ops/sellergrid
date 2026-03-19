# SellerGrid — Review Intelligence Hub

A React + TypeScript dashboard that helps eCommerce brand owners monitor, analyse, and respond to thousands of customer reviews across multiple platforms — Amazon, Flipkart, Meesho, Nykaa, and Shopify — from a single interface.

Built with **React 18**, **TypeScript 5**, and **Vite 5**. Zero UI library dependencies — all components are hand-crafted with plain CSS.

---

## Preview

```
┌─────────────────────────────────────────────────────────────┐
│  Sidebar      │  Topbar  (sticky)                           │
│               ├─────────────────────────────────────────────┤
│  ⬡ Dashboard  │  🔴 Alert Banner                            │
│  📊 Analytics  │                                             │
│               │  [ KPI ]  [ KPI ]  [ KPI ]  [ KPI ]        │
│  📥 Inbox 47  │                                             │
│  ✦ AI Resp.   │  [ Trend Chart ──────── ] [ Sentiment Ring ]│
│  ⚑ Flagged 12 │                                             │
│               │  [ Platforms ] [ Star Ratings ] [ Topics ]  │
│  ◎ Sentiment  │                                             │
│  ⟁ Topics     └─────────────────────────────────────────────┘
│  ◈ Competitors
└───────────────
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | ^18.2.0 | UI framework |
| TypeScript | ^5.3.3 | Type safety |
| Vite | ^5.1.4 | Dev server & build |
| @vitejs/plugin-react | ^4.2.1 | JSX transform + HMR |

No Tailwind. No component library. No CSS-in-JS. Just React, TypeScript, and CSS variables.

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm **9+** (or pnpm / yarn)

### Install & Run

```bash
# 1. Clone or unzip the project
cd sellergrid

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build      # Type-check + production build → dist/
npm run preview    # Preview the production build locally
```

---

## Project Structure

```
sellergrid/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
└── src/
    ├── main.tsx              # ReactDOM.createRoot entry point
    ├── App.tsx               # Root layout — composes all components
    ├── App.css               # Single stylesheet (all components + shell)
    │
    ├── types/
    │   └── index.ts          # All TypeScript interfaces & union types
    │
    ├── data/
    │   └── mockData.ts       # Static mock data for every component
    │
    └── components/
        ├── Sidebar.tsx / .css        Fixed left navigation
        ├── Topbar.tsx / .css         Sticky page header
        ├── AlertBanner.tsx / .css    Critical review alert strip
        ├── KpiStrip.tsx / .css       4-card metric row
        ├── TrendChart.tsx / .css     SVG sparkline (total vs negative)
        ├── SentimentRing.tsx / .css  SVG donut — positive/neutral/negative
        ├── PlatformStats.tsx / .css  Animated progress bars per marketplace
        ├── StarRatings.tsx / .css    1–5 star distribution
        ├── TopicsCloud.tsx / .css    AI-extracted keyword chips
        ├── ReviewFeed.tsx / .css     Live review stream
        └── ResponseQueue.tsx / .css  AI reply priority queue
```

---

## Components

### `<Sidebar />`
Fixed 220px left navigation with four sections (Overview, Reviews, Insights, Settings). Active state and badge counts are hardcoded for the wireframe.

### `<Topbar />`
Sticky header with the page title, an AI-active badge, a time-period `<select>`, and Export / Add Platform buttons. All wired into `App.tsx` layout, no props required.

### `<AlertBanner />`
Animated red-tinted banner with a pulsing dot. Alerts the user to critical reviews needing immediate attention. No props — content is static for the wireframe.

### `<KpiStrip items={KpiData[]} />`
Four metric cards in a responsive grid. Each card receives a `KpiData` object and renders a coloured top bar, large value, and directional change label.

**Props**
```ts
interface KpiData {
  label:     string;
  value:     string;
  change:    string;
  direction: 'up' | 'down';
  accent:    'green' | 'yellow' | 'blue' | 'red';
}
```

### `<TrendChart totalData={number[]} negativeData={number[]} labels={string[]} />`
Pure SVG sparkline with two series (total reviews and negative reviews). No third-party chart library — coordinates are computed from raw number arrays and rendered as cubic Bézier paths.

**Props**
```ts
totalData:    number[]   // y-values for the total reviews line
negativeData: number[]   // y-values for the negative reviews line
labels:       string[]   // x-axis labels (empty strings are skipped)
```

### `<SentimentRing />`
SVG donut chart showing positive / neutral / negative split. Segments are drawn with `strokeDasharray` offsets. No props — data is internal to the component.

### `<PlatformStats stats={PlatformStat[]} />`
Animated horizontal progress bars, one per platform. Bar width transitions from 0 → percentage on mount via CSS `transition: width 1s ease`.

**Props**
```ts
interface PlatformStat {
  name:       Platform;   // 'Amazon' | 'Flipkart' | 'Meesho' | 'Nykaa' | 'Shopify'
  count:      number;
  color:      string;     // hex colour for dot + bar fill
  percentage: number;     // 0–100
}
```

### `<StarRatings ratings={StarRating[]} />`
1-to-5-star distribution bars with a weighted average footer.

**Props**
```ts
interface StarRating {
  stars:      number;   // 1–5
  count:      number;
  percentage: number;   // 0–100
}
```

### `<TopicsCloud topics={Topic[]} />`
Pill-shaped keyword chips extracted from review text. Hot topics (trending negatively) are highlighted in red.

**Props**
```ts
interface Topic {
  label: string;
  count: number;
  hot?:  boolean;
}
```

### `<ReviewFeed reviews={Review[]} />`
Live-streaming review list with per-item sentiment chips, platform colour tags, star ratings, and urgency flags.

**Props**
```ts
interface Review {
  id:             string;
  author:         string;
  initials:       string;
  avatarGradient: string;   // CSS gradient string for avatar background
  platform:       Platform;
  rating:         number;   // 1–5
  text:           string;
  time:           string;   // e.g. '2 min ago'
  sentiment:      'positive' | 'negative' | 'neutral';
  needsReply?:    boolean;
}
```

### `<ResponseQueue items={QueueItem[]} />`
Priority-sorted list of reviews awaiting a reply. Each item shows a colour-coded urgency bar, author info, and Auto Reply / View action buttons.

**Props**
```ts
interface QueueItem {
  id:       string;
  author:   string;
  platform: Platform;
  rating:   number;
  preview:  string;
  priority: 'high' | 'medium' | 'low';
}
```

---

## Styling

All styles live in **`src/App.css`** — a single file imported only by `App.tsx`. Individual component `.css` files exist but are no longer imported; `App.css` supersedes them all.

### CSS Architecture

```
App.css
 ├── @import  Google Fonts (Syne + DM Sans)
 ├── :root    Design tokens — colours, typography, layout vars
 ├── Reset    box-sizing, body, scrollbars, dot-grid texture
 ├── Shared   .card__header, .ai-badge, @keyframes fadeUp
 ├── Shell    .app, .app__main, .app__row--2col/3col
 ├── Topbar   .app__topbar, .app__btn, .app__period-select
 ├── Alert    .app__alert + pulse keyframes
 ├── §7–12   One section per component (KpiStrip → TopicsCloud)
 ├── §13     Sidebar
 └── §14     Responsive breakpoints (1280 / 900 / 600px)
```

### Design Tokens

```css
--bg:       #0a0c10   /* page background          */
--surface:  #111318   /* card background           */
--surface2: #181c24   /* input / hover background  */
--border:   #1f2430   /* all borders               */
--text:     #e8eaf0   /* primary text              */
--muted:    #6b7280   /* secondary text            */
--accent:   #00e5a0   /* green  — positive / CTA   */
--accent2:  #ff5c5c   /* red    — negative / alert */
--accent3:  #ffc85c   /* amber  — neutral / rating */
--accent4:  #5c9fff   /* blue   — AI / info        */
```

### Responsive Breakpoints

| Breakpoint | Layout change |
|---|---|
| ≤ 1280px | 2-col stacks to 1-col; 3-col becomes 2-col; KPI strip → 2 columns |
| ≤ 900px | Sidebar slides off-screen; content fills full width |
| ≤ 600px | KPI strip → 1 column; ghost buttons hidden |

---

## Data & Types

All data lives in `src/data/mockData.ts` and all TypeScript contracts in `src/types/index.ts`. To connect a real API, replace the exports in `mockData.ts` with `fetch` calls or React Query hooks — no component code needs to change.

### Exported mock arrays

```ts
kpiData        KpiData[]       4 metric cards
reviews        Review[]        5 live feed entries
queueItems     QueueItem[]     5 response queue entries
platformStats  PlatformStat[]  5 platforms
topics         Topic[]         9 keyword chips
starRatings    StarRating[]    5 star tiers (1–5)
trendData      number[]        19 daily total-review y-values
negativeData   number[]        19 daily negative-review y-values
trendLabels    string[]        19 x-axis labels (sparse)
```

---

## Roadmap / Extending

| Feature | Where to add |
|---|---|
| Real API data | Replace exports in `src/data/mockData.ts` |
| Mobile sidebar toggle | Add `useState` open/close to `App.tsx`; toggle `.sidebar--open` class |
| Dark / light theme toggle | Add `data-theme` attribute to `<html>`; duplicate token block in `App.css` |
| New platform | Add to `Platform` union in `src/types/index.ts` + entry in `platformStats` |
| Clickable nav items | Add `useState` active route to `Sidebar.tsx` |
| Auto-reply functionality | Wire `ResponseQueue` buttons to a POST endpoint |

---

## License

MIT — free to use, modify, and distribute.

---

> Built as a wireframe UI for SellerGrid's Review Intelligence product.
> All review data shown is fictional and for demonstration purposes only.
