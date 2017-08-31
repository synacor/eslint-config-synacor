import compatibility from './rules/compatibility';
import react from './rules/react';
import security from './rules/security';
import style from './rules/style';

export default {
	parser: require.resolve('babel-eslint'),
	extends: 'eslint:recommended',
	plugins: [
		'compat',
		'react',
		'mocha'
	],
	env: {
		browser: true,
		es6: true,
		mocha: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
			impliedStrict: true,
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true
		}
	},
	globals: {
		CONFIG: true,
		sinon: true,
		expect: true,
		browser: true,
		global: true,
		element: true,
		sleep: true,
		by: true,
		$: true
	},
	settings: {
		//Target the last two versions of the major browsers (except for Opera and IE Mobile), and IE9+
		targets: ['last 2 versions', 'ie >= 9', 'not Opera > 0', 'not ExplorerMobile > 0'],
		//tell eslint-plugin-compat what we polyfill so it doesn't complain about browser incompatibility:
		polyfills: ['fetch']
	},
	rules: {
		...compatibility,
		...react,
		...security,
		...style
	}
};
