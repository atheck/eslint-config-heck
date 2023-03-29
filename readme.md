# eslint-config-heck

eslint-config-heck contains an ESLint configuration for ES2015+, TypeScript, and React.

## Installation

~~~sh
npm install --save-dev eslint eslint-config-heck
~~~

## Usage

To use one of the included configurations, create a `.eslintrc.json` file and use the `extends` keyword.

For a Node.js project use:

~~~json
{
    "extends": "heck/node"
}
~~~

If you are in the browser, use:

~~~json
{
    "extends": "heck/browser"
}
~~~

## Extensions

### Complexity

Optionally you can enable some complexity rules by using the **complexity** configuration in addition to the **node** or **browser** rules:

~~~json
{
    "extends": ["heck/node", "heck/complexity"]
}
~~~

### Group imports

Optionally you can switch to another import sorting rule, which groups the imports by type and supports auto fixing. You can enable this rule by adding the **groupImports** configuration in addition to the **node** or **browser** rules:

~~~json
{
    "extends": ["heck/node", "heck/groupImports"]
}
~~~

### React Native

If you are using react-native, you can enable react-native specific rules:

~~~json
{
    "extends": ["heck/node", "heck/reactNative"]
}
~~~

### No formatting

To disable some of the formatting rules (when using a formatter like prettier or Rome) you can use this configuration:

~~~json
{
    "extends": ["heck/node", "heck/noFormatting"]
}
~~~

### Exclude rules included in Rome

To disable some the rules that are already included in Rome you can use this configuration:

~~~json
{
    "extends": ["heck/node", "heck/excludeRome"]
}
~~~
