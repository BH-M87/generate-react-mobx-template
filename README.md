# generateReactMobxTemplate
Template when generating react mobx using generate-react-template in VSCode

Usage refers to https://marketplace.visualstudio.com/items?itemName=joshjg.generate-react-component

## Usage
1. Install the extention of VSCode first: ext install generate-react-component.
2. Clone this project into your local workspace.
3. Change the config "generate-react-component.componentTemplatePath" in VSCode preference to the path of this project in your local drive.
4. Right click any directory in the explorer panel.
5. Select component or container.
6. Input name and choose options.
7. Submit and happy coding.

## Syntax

Template syntax is very simple:

Any occurrence of __ComponentName__ in a filename or a file's content will be replaced with the user's text input.
Any text surrounded by /* IF condition */ and /* ENDIF */, where condition is the name of an option (definted in the package settings) will be removed unless condition is enabled (or invalid)
Any text surrounded by /* IF !condition */ and /* ENDIF */ will be removed unless condition is disabled (or invalid)
Any remaining /* IF */ or /* ENDIF */ comments will be removed, but the text between them will be untouched
