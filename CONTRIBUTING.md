<p align='center'>
  English | <a href='./CONTRIBUTING.ja.md'>日本語</a>
</p>

## Thanks for your interest in contribute to Yamada UI 😎, you are amazing!!!

When it comes to open source, there are different ways you can contribute, all of which are valuable. Here are some guidelines that should help you as you prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Yamada UI:

1. Fork the [repository](https://github.com/yamada-ui/yamada-ui).

2. Clone your fork locally.

```sh
git clone https://github.com/<your_github_username>/yamada-ui.git

cd yamada-ui
```

3. Setup all the dependencies and packages by running `pnpm install`. This command will install dependencies.

## Development

To improve our development process, we have set up tools and systems. Yamada UI uses a monorepo structure and treats each component as an independent package.

### Tooling

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Tsup](https://tsup.egoist.dev/) to bundle packages
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Testing Library](https://testing-library.com/) for testing components and
  hooks
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.
- [Next.js](https://nextjs.org/) Framework for documentation sites.

### Commands

- **`pnpm install`**: bootstraps the entire project, symlinks all dependencies for cross-component development.
- **`pnpm storybook`**: starts storybook server and loads stories.
- **`pnpm build`**: run build for all component packages.
- **`pnpm test`**: run test for all component packages.
- **`pnpm gen:component`**: create a component package from a template using [Plop](https://plopjs.com/).
  - Please enter package and component names in kebab case
  - If the provider is true, it sets up a provider that provides styles used in `children`.
- **`pnpm gen:hook`**: create a hook package from a template using [Plop](https://plopjs.com/).
  - Please enter package and custom hook names in kebab case
- **`pnpm gen:tokens`**: generate theme tokens.

### Visual Studio Code

#### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

To ensure the extension works correctly, please add the following settings to `.vscode/settings.json`.

```json
{
  ...
  "eslint.options": {
    "flags": ["unstable_ts_config"]
  },
  "eslint.workingDirectories": [
    "docs",
    "examples/hono",
    "examples/next/app",
    "examples/next/pages",
    "examples/remix",
    "examples/vite"
  ],
  ...
}
```

## Think you found a bug?

Please conform to the [issue template](https://github.com/yamada-ui/yamada-ui/issues/new/choose) and provide a clear path to reproduction.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`type(scope or module): message` in your commit message while using one of
the following types:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above categories

> [!TIP]
>
> If you are interested in the detailed specification you can visit [Conventional Commits](https://www.conventionalcommits.org) or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork and clone the [repository](https://github.com/yamada-ui/yamada-ui).

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. After making changes, please add test code for those changes. Run `pnpm test` or `pnpm test <package-name>` to ensure all tests pass. please check [Tips for Test](https://github.com/yamada-ui/yamada-ui/wiki/Tips-for-Test) for further guidance.

4. Run `pnpm changeset` to create a detailed description of your changes. This
   will be used to generate a changelog when we publish an update.
   [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).

5. Also, if you provide `jsx` snippets to the changeset, please turn off the
   live preview by doing the following at the beginning of the snippet:
   ` ```jsx live=false`

> If you made minor changes like CI config, prettier, etc, you can run
> `pnpm changeset add --empty` to generate an empty changeset file to document
> your changes.

6. Next, commit your changes following the
   [commit convention](#commit-convention).
   - `Confirming changes`: Run the `pnpm storybook` command to launch Storybook. The source for Storybook is in `./stories`.
   - `Creating a new component`: When you run the pnpm `gen:component` command, a component is created from a template and dependencies are installed.
   - `Adding functionality to an existing component`: After adding, please add a story for the target component so that the functionality can be understood.
   - `Creating a new hook`: When you run the `pnpm gen:hook` command, a hook is created from a template and dependencies are installed.
   - `Adding functionality to an existing hook`: After adding, please add a story for the target hook so that the functionality can be understood.

7. Once you have completed all of the above tasks, please push your changes.
   After pushing, a URL for the pull request will be generated. Follow the template and submit your request accordingly.
   Additionally, check the Checks within the pull request and ensure that the Quality check has successfully completed.
   If there are any issues, this pull request will not be merged.

## License

By contributing code to the `Yamada UI` GitHub repository, you agree that your contributed code will be licensed under the MIT license.

### Thank you for reading till the end. I love you too. 💖
