# Vowel `emoji-mart` fork

This fork contains various fixes for `emoji-mart` that are either unique to Vowel or are awaiting upstream pull requests.

See the `vowel` branch / [this PR](https://github.com/vowel-com/emoji-mart-new/pull/2) to see all of the changes that have been made.

## Pending PRs

- https://github.com/missive/emoji-mart/pull/699
    - Fixes an error with our `react-native` app
- https://github.com/missive/emoji-mart/pull/700
    - Adds callback for skin tone and fixes bug with skin tone not changing when props change
- https://github.com/missive/emoji-mart/pull/701
    - Add `part` to root element to allow overriding CSS variables
- https://github.com/missive/emoji-mart/pull/705
    - Add optional ref to pass for search input
- https://github.com/missive/emoji-mart/pull/710
    - Add optional skin tone emoji/label
- https://github.com/missive/emoji-mart/pull/711
    - Allow passing spritesheet URL as a string to `em-emoji` web component
- https://github.com/missive/emoji-mart/pull/712
    - Fix width/height of custom emoji

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

One liner to build and push new version of the `emoji-mart` package:

```sh
git checkout vowel-build-emoji-mart && \
git fetch origin && \
git reset --hard origin/vowel && \
yarn vowel:build:emoji-mart && \
git add . && \
git commit -am "Build" && \
git push origin vowel-build-emoji-mart --force
```

---

This will:
- Build all packages
- Copy the `dist` folder to the root of the repo
- Override the root `package.json` with the package's `package.json`
- Change `.gitignore` to commit the `dist` folder (see `.gitignore-vowel`)

---

Commit these changes and push them to GitHub (you may have to force push)
Grab the commit SHA, and change it in any `package.json` dependency lists that are using it.
