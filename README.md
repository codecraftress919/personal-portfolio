# Sadia Sultana — Interactive Developer Portfolio

A deliberately non-template React portfolio built around a physical draggable project-card deck.

## Run

```bash
npm install
npm run dev
```

## Add your assets

Place these files in `public/`:

- `profile.png`
- `projects/nigheban.jpg`
- `projects/ghazali.jpg`
- `projects/dashboard.jpg`
- `projects/lab.jpg`

Then edit `src/data/projects.js` with your real GitHub and live-demo URLs.

## Main interaction

The Projects section is a spring-animated deck. The top card is draggable on desktop and swipeable on touch devices. A sufficiently large drag advances the deck and recycles the current card to the back.

## Stack

- React
- Vite
- Framer Motion
- Lucide React
- CSS
