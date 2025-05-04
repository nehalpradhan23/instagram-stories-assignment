
# Instagram Stories feature

A simplified version of Instagram Stories feature allowing users to view a series of stories.


## Deployed Link

https://instagram-stories-assignment-kappa.vercel.app/


## Installation

```bash
git clone git@github.com:nehalpradhan23/instagram-stories-assignment.git
```

Install with npm

```bash
  npm install
  npm run dev
```
    
## Features and Design

- Horizontal stories list
- Border color change to notify viewed vs story that is not viewed yet
- Stories screen navigation previous or next with screen tap
- Auto advance after 5 seconds along with progress bar

### Component Modularity

- I split the app into small, focused components (StoriesList, StoryViewModal, etc.) to ensure maintainability and reusability. This makes the codebase easier to scale as new features (like videos or story reactions) can be added without major refactoring.

### Global State with Context API

- I used React’s Context API with TypeScript to manage shared state across components (e.g., current story, viewed status). This avoids prop-drilling and ensures consistent state access while remaining lightweight—ideal for small to mid-sized apps.

### Type Safety for Future Growth

- All shared data structures and props are strictly typed.
