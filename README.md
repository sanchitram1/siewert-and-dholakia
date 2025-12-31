# Siewert & Dholakia Website

This is the static React website for Siewert & Dholakia. It is hosted on Firebase Hosting.

## Live URL

[https://tea-siewert.web.app/](https://tea-siewert.web.app/)

## Setup

1. **Install Dependencies:**

   ```bash
   npm install

   ```

2. **Install Firebase Tools:**

   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase**
   ```bash
   firebase login
   ```

## Deployment

Super easy:

```bash
npm run build
firebase deploy

# Optionally specify a destination using -P: firebase deploy -P production
```

## Tasks

### deploy

```bash
npm run build
firebase deploy -P production
```
