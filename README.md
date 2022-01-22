# svelte_kit_jwt_auth

This is an example project demonstrating the json web token (jwt) authentication process.

## Running locally

Add `VITE_JWT_PRIVATE_KEY` in `.env` as secret for `jsonwebtoken`
```bash
cd svelte_kit_jwt_auth
pnpm i && pnpm dev
```

Code will run at [http://localhost:3000](http://localhost:3000)

## FOUC in login

This is an open issue on [github](https://github.com/sveltejs/kit/issues/2349)