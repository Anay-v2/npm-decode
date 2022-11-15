function charCodeEncode(string, delimiter = ' ') {
	return [...string].map(v => v.charCodeAt().toString()).join(delimiter)
}

export { charCodeEncode }
