# Canvas Assignment Template

Base template for Canvas assignments. Currently (September of 2019) it does not appear to be possible to pull changes from the template into a repository that was based on the template.

Each assignment is its own repository. The content that is visible on Canvas is in the **docs** folder.

## Usage

This template is the boilerplate for a single Canvas assignment.

1. In **Settings** enable GitHub Pages using the **docs** folder on the **master** branch.
1. Create an assignment on Canvas.
1. Edit the assignment:
   - Switch to HTML mode.
   - Add an ```<iframe src="" width="100%" height="660px">``` tag.
   - Use the GitHub pages URL of this repository as the ```src``` artribute of the ```iframe``` tag.
1. Edit ```docs/_data/assignment.yml``` to reflect the parameters of this assignment. Custom values may be added, they can be referenced in [Liquid][] code as ```site.data.assignments.valueName```.
   - If an **outcome** is set, the text will be displayed above the tabs.
1. Edit ```docs/_data/tabs.yml``` to change the names (or number) of the tabs and/or the file they refer to.

[liquid]: <https://shopify.github.io/liquid/>
