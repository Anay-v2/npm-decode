function charCodeDecode(string, delimiter = ' ') {
	return string
		.split(delimiter)
		.map(v => String.fromCharCode(v))
		.join('')
}

export { charCodeDecode }
