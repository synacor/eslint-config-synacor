import react from './rules/react';
import security from './rules/security';
import style from './rules/style';

export default {
	parser: require.resolve('babel-eslint'),
	extends: 'eslint:recommended',
	plugins: [
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
			jsx: true,
			legacyDecorators: true
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
	rules: {
		...react,
		...security,
		...style
	}
};
