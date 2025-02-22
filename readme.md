# eslint-config-heck

eslint-config-heck contains an ESLint configuration for ES2015+, TypeScript, and React.

## Installation

~~~sh
npm install --save-dev eslint@9 eslint-config-heck
~~~

## Usage

To use one of the included configurations, create a `eslint.config.js` and import the configuration you want to use.

For a Node.js project use:

~~~js
{
    import node from "eslint-config-heck/node";

    export default {
        ...node,
    };
}
~~~

## Extensions

### Complexity

Optionally you can enable some complexity rules by using the **complexity** configuration in addition to the **node** configuration:

~~~js
{
    import node from "eslint-config-heck/node";
    import complexity from "eslint-config-heck/complexity";

    export default {
        ...node,
        ...complexity,
    };
}
~~~

### Group imports

Optionally you can switch to another import sorting rule, which groups the imports by type and supports auto fixing. You can enable this rule by adding the **groupImports** configuration in addition to the **node** configuration:

~~~js
{
    import node from "eslint-config-heck/node";
    import groupImports from "eslint-config-heck/groupImports";

    export default {
        ...node,
        ...groupImports,
    };
}
~~~

### React Native

If you are using react-native, you can enable react-native specific rules:

~~~js
{
    import node from "eslint-config-heck/node";
    import reactNative from "eslint-config-heck/reactNative";
    export default {
        ...node,
        ...reactNative,
    };
}
~~~

### Rules with usage of Biome

If you are using Biome you can use the "nodeWithBiome" configuration:

~~~js
{
    import nodeWithBiome from "eslint-config-heck/nodeWithBiome";

    export default {
        ...nodeWithBiome,
    };
}
~~~

If you are using Biome you can also extend your Biome config with the "biomeLinting.json":

~~~json
{
    "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
    "extends": ["./node_modules/eslint-config-heck/biomeLinting.json"],
}
~~~

This enables all Biome rules (JavaScript, TypeScript, css, and json).

If you only want to enable rules for a specific language, you can use the following configurations:

- JavaScript/TypeScript: biomeJsTs.json
- CSS: biomeCss.json
- JSON: biomeJson.json
