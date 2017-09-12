# generateReactMobxTemplate
Template when generating react mobx using generate-react-template in VSCode

Usage refers to https://marketplace.visualstudio.com/items?itemName=joshjg.generate-react-component

Syntax

Template syntax is very simple:

Any occurrence of __ComponentName__ in a filename or a file's content will be replaced with the user's text input.
Any text surrounded by /* IF condition */ and /* ENDIF */, where condition is the name of an option (definted in the package settings) will be removed unless condition is enabled (or invalid)
Any text surrounded by /* IF !condition */ and /* ENDIF */ will be removed unless condition is disabled (or invalid)
Any remaining /* IF */ or /* ENDIF */ comments will be removed, but the text between them will be untouched
