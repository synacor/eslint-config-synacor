# eslint-config-synacor

[![npm](https://img.shields.io/npm/v/eslint-config-synacor.svg)](http://npm.im/eslint-config-synacor)
[![Build Status](https://travis-ci.org/synacor/eslint-config-synacor.svg?branch=master)](https://travis-ci.org/synacor/eslint-config-synacor)
![Greenkeeper badge](https://badges.greenkeeper.io/synacor/eslint-config-synacor.svg)

Standard eslint rules for all Synacor javascript projects

# Use these rules in your project

## Installation
Add eslint-config-synacor as a development dependency for your project: `npm i -D eslint-config-synacor`

If you aren't already including eslint with your project, install that as a development dependency as well: `npm i -D eslint`.

## Configuration
### `package.json`
To specify for your entire project to use the global rules, add this as a clause in your `package.json` file:
````
"eslintConfig": {
	"extends": "eslint-config-synacor"
},
````

### `.eslintrc`
Optionally (or in addition to your package.json setup), to specify to use the global rules in all subdirectories of a given directory, you can create a `.eslintrc` file with the contents
````
{
    extends: 'eslint-config-synacor'
}
````

### Add/Override Rules For Tests `test/.eslintrc`
There are a set of overrides/rules for directories that contain unit tests.  These are available in the `test-rules` submodule of the package.  You can reference them via `estlint-config-synacor/test-rules`.  So, to apply these as overrides in your `tests/` directory, you would create a `.eslintrc` file in `tests/`.  The contents of that file would look like:

````
{
    extends: 'eslint-config-synacor/test-rules'
}

````

# Developing
All rule definition files are in [`src/rules`](src/rules).  Edit/create rule files there.  

Rules that are meant to be used for an entire project should go in files that are included by [`src/index.js`](src/index.js).  

Rules that are only meant to be run/overriden in test directories of a project should be included by [`src/test-rules.js`](src/test-rules.js).
