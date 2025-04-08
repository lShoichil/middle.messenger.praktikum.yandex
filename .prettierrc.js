export default {
	trailingComma: "none",
	tabWidth: 2,
	printWidth: 120,
	useTabs: false,
	semi: true,
	singleQuote: true,
	arrowParens: "always",
	importOrder: [
	  "^react",
	  "<THIRD_PARTY_MODULES>",
	  "(components|core|data|data/*|mokeData|pages|utils)",
	  "^../(.*)",
	  "^./(.*)",
	  "(.css|scss)"
	],
	importOrderSeparation: true,
	importOrderCaseInsensitive: true,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
  };
  