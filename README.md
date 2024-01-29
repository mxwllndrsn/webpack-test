## webpack-test

*test misc webpack features for ci/cd purposes etc*

### instructions

```console
mkdir webpack-test
cd webpack-test
npm init -y
npm install webpack webpack-cli --save-dev
```

Where `npm init -y` initializes a `package.json` and

`npm i webpack --save-dev` specifies webpack as a development dependency. 

*if bash*, oneliner for creating and ignoring node_modules dir when npm added to existing repo: 

```console
touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status
```

### overview

webpack utilizes an `entry` point (in our case `index.js`) as the source of import requirements to build out the distribution file `main.js`. 

this can be specified in webpack config `webpack.config.js` and invoked by `npx webpack --config webpack.config.js` during build (but should be picked up by default):

```js
const path = require('path');

module.exports ={
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
}
```

additionally, we can run webpack build through npm by editing `package.json` to specify our `build` command:

```js
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

webpack can then be invoked using `npm run build`.