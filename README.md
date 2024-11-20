This repo demonstrates a bug in Next15 where `npm run dev` exits early without an error when using Turbopack.

## Steps to reproduce

- Install with `npm i`
- Run development server with `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) in your browser
- `npm run dev` will exit with code `0`, without an error.
