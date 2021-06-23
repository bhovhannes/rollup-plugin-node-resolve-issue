# rollup-plugin-node-resolve-issue

To reproduce issue with @rollup/plugin-node-resolve, TS, and "exports" field.

## Steps

1. git clone this repo
1. run `npm ci`
1. run `npm run build`

### Expected
An `output.js` should be created.

### Actual

Build ends up with an error:

```
Error: Could not load /Users/hovhannesbabayan/Projects/github/bhovhannes/rollup-plugin-node-resolve-issue/node_modules/@abcdef/lib-utils/dist_esm/sum.ts (imported by input.ts): ENOENT: no such file or directory, open '/Users/hovhannesbabayan/Projects/github/bhovhannes/rollup-plugin-node-resolve-issue/node_modules/@abcdef/lib-utils/dist_esm/sum.ts'
```

As you can see `@rollup/plugin-node-resolve` incorrectly resolves the import `@abcdef/lib-utils/dist/sum.js` as `node_modules/@abcdef/lib-utils/dist_esm/sum.ts` (there should be no `.ts` extension).  
Then file cannot be found and the build errors out.