export default {
	'react/jsx-boolean-value': [2, 'never'],
	'react/jsx-closing-bracket-location': 2,
	'react/jsx-curly-spacing': 2,
	'react/display-name': [2, { ignoreTranspilerName: false }],
	'react/jsx-equals-spacing': 2,
	'react/jsx-indent-props': [2, 'tab'],
	'react/jsx-max-props-per-line': [2, { maximum: 6 }],
	'react/jsx-no-bind': [2, { ignoreRefs: true }],
	'react/jsx-no-comment-textnodes': 2,
	'react/jsx-no-duplicate-props': 2,
	'react/jsx-no-target-blank': 2,		// avoids security vuln, see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
	'react/jsx-no-undef': 2,
	'react/jsx-pascal-case': 2,
	'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
	'react/jsx-uses-react': 2,
	'react/jsx-uses-vars': 2,
	'react/jsx-wrap-multilines': 2,
	'react/no-danger': 2,
	'react/no-did-mount-set-state': 2,
	'react/no-did-update-set-state': 2,
	'react/no-find-dom-node': 2,
	'react/no-is-mounted': 2,
	'react/no-string-refs': 0, // disabled for now because it does not work with linkref
	'react/prefer-es6-class': 2,
	'react/prefer-stateless-function': 1,
	'react/require-render-return': 2,
	'react/self-closing-comp': 2,
	'react/sort-comp': [2, {
		order: [
			'properties',
			'static-methods',
			'everything-else',
			'lifecycle',
			'rendering'
		],
		groups: {
			properties: [
				'state'
			],
			rendering: [
				'/^render.+$/',
				'render'
			]
		}

	}]
};
