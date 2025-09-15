# Dashboard Monorepo: Angular Web + Expo React Native

This monorepo contains both an **Angular web** and an **Expo React Native mobile** dashboard application. Shared functionality, types, and API clients are stored in the `packages/shared` folder for reuse across both platforms.

---

## 📂 Project Structure

```markdown
my-monorepo/
│
├─ apps/
│   ├─ angular-web/       # Angular Web Dashboard
│   └─ expo-mobile/       # Expo React Native Dashboard
│
├─ packages/
│   └─ shared/            # Shared code (utils, API client, types)
│
├─ package.json
└─ tsconfig.base.json

````

## 🚀 Getting Started

### Angular Web

```bash
cd my-monorepo
nx serve angular-web
````

The app runs by default at `http://localhost:4200`.

### Expo Mobile

```bash
nx run expo-mobile:start
```

This will launch the Expo Metro bundler. You can run the app on a mobile device or in a browser.

## 🛠 Shared Code

* Located in the `packages/shared` folder.
* Example usage:

```ts
import { greet } from '@my-monorepo/shared';

console.log(greet('Yağız'));
```

* Paths are configured in `tsconfig.base.json`.

## 📌 Features

* Responsive dashboard design (web + mobile)
* Shared API client and types
* Monorepo management using Nx
* Angular for web pages, Expo for mobile screens

## 📈 Future Plans

* Authentication / Authorization
* Real-time data / WebSocket integration
* Dark mode / Theme support
* Dashboard widget system (charts, tables, KPI cards)

## 💻 Requirements

* Node.js >= 18
* npm or pnpm
* Nx CLI installed globally
* Expo CLI (`npm install -g expo-cli`)
