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

Optionally you can enable some complexity rules by using the **complexity** configuration in addition to the **node** or **browser** rules:

~~~json
{
    "extends": ["heck/node", "heck/complexity"]
}
~~~
