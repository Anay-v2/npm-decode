function railFenceDecode(string, key = [2, 0]) {
	const cycle = (key[0] - 1) * 2
	const decoded = new Array(string.length)
	let j = 0
	let x, y
	for (y = 0; y < key[0]; y++) {
		for (x = 0; x < string.length; x++) {
			if (
				(y + x + key[1]) % cycle === 0 ||
				(y - x - key[1]) % cycle === 0
			) {
				decoded[x] = string[j++]
			}
		}
	}
	return decoded.join('').trim()
}

export { railFenceDecode }
