# Typescript-ready blank project

Starter kit over a typescript-ready project with basic testing libraries:

- [`Jest`](https://github.com/facebook/jest) as unit testing library
- [`FastCheck`](https://github.com/fscheck/FsCheck) as property-based testing library

## Startup

### Using Nix (recommended)

- Install [`Nix`](https://nixos.org/guides/install-nix.html)
- _(Optional)_ `direnv`
  - Install [`direnv`](https://direnv.net/docs/installation.html)
  - Run `direnv allow` (so nix context is loaded whenever you land in this directory)
- Run `nix-shell`

You need to hook `direnv` to `zsh` so that `nix-shell` is automatically executed while landing in an eligible directory by adding this in your `~/.zshrc` file:

```shell
eval "$(direnv hook zsh)"
```

### If you have `npm` already installed

If you already get `npm` installed, you have nothing else to do.

## Run

- Run `npm install`
- Run `npm test` and you should expect the existing tests to run
