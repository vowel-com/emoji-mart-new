# Vowel `emoji-mart` fork

This fork contains various fixes for `emoji-mart` that are either unique to Vowel or are awaiting upstream pull requests.

See the `vowel` branch / [this PR](https://github.com/vowel-com/emoji-mart-new/pull/2) to see all of the changes that have been made.

## Pending PRs

- https://github.com/missive/emoji-mart/pull/699
    - Fixes an error with our `react-native` app

## Building

There is a branch for each `emoji-mart` package:

- `emoji-mart` -> `vowel-build-emoji-mart` branch
- `@emoji-mart/react` -> `vowel-build-emoji-mart-react` branch
- `@emoji-mart/data` -> `vowel-build-emoji-mart-data` branch

### Deploying a package with changes

First, make sure that any changes you want are in the `vowel` branch.

Then, check out the branch for the package you want to deploy (see above).

Reset the package build branch to the base `vowel` branch:

```sh
git fetch origin && git reset --hard origin/vowel
```

Then, run the `yarn` command to build the package you want:

- `emoji-mart` -> `yarn vowel:build:emoji-mart`
- `@emoji-mart/react` -> `yarn vowel:build:emoji-mart-react`
- `@emoji-mart/data` -> `yarn vowel:build:emoji-mart-data`

---

This will:
- Build all packages
- Copy the `dist` folder to the root of the repo
- Override the root `package.json` with the package's `package.json`
- Change `.gitignore` to commit the `dist` folder (see `.gitignore-vowel`)

---

Commit these changes and push them to GitHub (you may have to force push)
Grab the commit SHA, and change it in any `package.json` dependency lists that are using it.
