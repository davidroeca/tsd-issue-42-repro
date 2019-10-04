### tsd reproduction

This repo reproduces an issue with [tsd](https://github.com/SamVerschueren/tsd).

Here's how to reproduce:
```
# within this repo
npm ci
npx tsd
```

You should see some errors in the output. See [types/index.test-d.tsx](types/index.test-d.tsx) for more explanation.
