## webpack-test

*test misc webpack features for ci/cd purposes etc*

### Instructions

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