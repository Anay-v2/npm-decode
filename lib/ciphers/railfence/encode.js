function railFenceEncode(string, key = [2, 0]) {
	const cycle = (key[0] - 1) * 2
	const rows = new Array(key[0]).fill('')
	;[...string].forEach((v, i) => {
		rows[key[0] - 1 - Math.abs(cycle / 2 - ((i + key[1]) % cycle))] += v
	})
	return rows.join('').trim()
}

export { railFenceEncode }
