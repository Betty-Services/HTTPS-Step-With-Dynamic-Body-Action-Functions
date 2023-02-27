![Action Validation](https://github.com/betty-services/Custom-Action-Functions-Template/actions/workflows/main.yml/badge.svg?event=push)

# Custom Action Functions Template

This repository can be used to kick-start your new repositories for Custom Action Functions.

### What does this repository include

- `config.json`
  - Simply set your applications' ID (make sure to use the lowest sandboxes' ID) to publish new functions.
- `.gitignore`
  - To not commit any unnecessary files.
- Function validation
  - Currently only scoped to validate the custom action steps when pushed to the repository.
- Ready to use jest configuration
  - Install jest using `npm i -g jest`
  - Run the `jest` command
- An example function including an example Jest test script
- A protected `main` branch that requires pulls to be updated.

### First steps:

1.  Create a new repository. Use this repository as a template.
2.  Pull your repository.
3.  Run `npm ci` to install all required packages.
4.  Develop!

### To do:

- [ ] Automated jest testing
  - [ ] Include coverage report in `README.md` file
- [ ] Automated block publishing
- [ ] Fix hardcoded badge URL in `README.md`

---

**Remove the content above when you made a new repository from this template and keep the following:**

# 'Block Name' Custom Action Functions

This repository hosts the code for the custom actions steps found in the [the blocks' name](https://my.bettyblocks.com/block-store/blockId/) from the Betty Blocks block store.

### This repository hosts the following steps:

- Example Function

_Do not forget to update the badge above once this repository has been used._
