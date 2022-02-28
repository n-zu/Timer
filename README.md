# Timer PWA

## Description

TODO

## Usage

TODO

## Development

- Progresive Wep App using Next.js
- App created with `create-next-app`

### TODO

- Deploy to Vercel

  - That thing were u dont run development branches

- Persistance Strategies

  - In-Browser
  - Local Server ( Can just use FS / simple db )
  - Data Base ( Fire Base ? )

- Development

  - [x] Event Selector 1 - All Events
  - [x] Event Selector 2 - Group by type
  - [x] Event Timeline 1 - Save Events List
  - [x] Middle Ware 1 - Implement Redux API
  - [x] Event Timeline 2 - Show Events List
  - [ ] Stats 1 - Show totals & avg
  - [ ] UX / UI

- Fix

  - 59m 59s appears when selecting an event

- Refactor

  - addEvent should recieve untimed events

- Other
  - Licensing ?
  - non blocking memoized calculations ( worker ? promise - {loading, result, error} api )

### Imports

- `typescript @types/react @types/node`: Type definitions for React and Node.js. ( else \_documnet.tsx throws an error )
- `next-pwa`

### Notes

- [Immer](https://immerjs.github.io/immer/) is so cool

  - should check [osawards](https://osawards.com/)

- [Vercel Ignore Build Step](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel)

- [Icons](https://fonts.google.com/icons)

- Web workers

  - [Explained](https://www.youtube.com/watch?v=Gcp7triXFjg&ab_channel=DevSage)
  - [Example](https://www.reddit.com/r/reactjs/comments/gcqlm9/how_to_show_a_spinner_while_doing_an_expensive/)

- [Persist Redux State](https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67)

- [https://overreacted.io/](https://overreacted.io/)
