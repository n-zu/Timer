# App Development

## Features

### Navigation

- [x] Navbar
- [x] Hamburger Menu

### Dashboard

> Meant for bigger that devices can see the timer and timeline/stats at the same time

TBA

### Timer

- [x] Current Time
- [x] Current Event 1 - Show
- [ ] Current Event 2 - Edit
- [x] Event Selector 1 - All Events
- [x] Event Selector 2 - Group by type

- UX / UI
  - [x] Show color for event type
  - [x] Switch events of the same type by clicking
  - [ ] See next/all(?) event of the same type

### Timeline

- [x] Event Timeline 1 - Save Events List
- [x] Event Timeline 2 - Show Events List
- [ ] Event Timeline 3 - Edit Events
- [ ] Event Timeline 4 - Organize per day
- [ ] Event Timeline 5 - Link to stats
- [ ] Event Timeline 6 - Search date / event

### Statistics

- [ ] Stats 1 - Show totals & avg
- [ ] Stats 2 - Select time period

### Settings

TBA

### Extra Features

- 478 breathing
- Pomodoro timer

## Implementation

- [x] Middleware 1 - Implement Redux API
  - [x] Save Events to Redux
  - [x] Save Events to Local Storage
- [ ] Middleware 2 - [Persistence](#Persistence)

- [ ] Page parameters 1 - Search Date ranges
- [ ] Page parameters 2 - Search Events
  - [ ] id
  - [ ] content : title / description / type

### Persistence

- In-Device
- Local Server
  > ( Can just use FS / simple db )
- Data Base
  > ( Fire Base ? )

## Design

> Check w/ C, she'll know better

### UI

TBA

### UX

- Keep it simple
- Timer: Fast Interactions
- Timeline: Events history & details
- Statistics: Overview of events
- Settings: Settings

## Deployment

- [x] Deploy to Vercel - [deployment](https://timer-xi.vercel.app/events/timer)
- [x] Set [Ignored Build Step](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel)

## Other

### Development details & technologies

- **[Next.js](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **PWA** : Progressive Web App
- **Mobile First**
- Possible additions: IndexDB, WASM,

### Documentation

TBA (?) - I'd like to keep everything well documented

### Resources

#### Development Resources

- [Google Icons](https://fonts.google.com/icons)

#### Tutorials , Guides & Articles

- Redux
  - [Guide](https://redux.js.org/usage/configuring-your-store)
  - [Persist Redux State](https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67)
- Web workers
  - [Explained](https://www.youtube.com/watch?v=Gcp7triXFjg&ab_channel=DevSage)
  - [Example](https://www.reddit.com/r/reactjs/comments/gcqlm9/how_to_show_a_spinner_while_doing_an_expensive/)
- [Storage for the web](https://web.dev/storage-for-the-web/)
  - [DB Catalogue](https://expressflow.com/blog/posts/best-storage-for-web-apps)
  - [Offline storage for PWAs](https://blog.logrocket.com/offline-storage-for-pwas/)

#### Interesting Links

- [overreacted](https://overreacted.io/)
- [osawards](https://osawards.com/)
  - [Immer](https://immerjs.github.io/immer/)

### Notes

<details>
<summary>28/2: On Future Features</summary>
Some of the features im thinking might not be plausible browser only.

Keeping data from various days may require more space than `localStorage` can provide and querying the data may be slow.

This is a good chance to try some [storage for the web](https://web.dev/storage-for-the-web/) (IndexedDB, FileSystem API, ).

And to try processing using `Web Workers` and `WASM`

</details>
