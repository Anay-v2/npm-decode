import { alphabet } from '../../utils/alphabet.js'

function vignereDecode(string, k) {
	let key = k.repeat(Math.ceil(string.length / k.length))
	return [...string]
		.map((v, i) => {
			if (!alphabet.includes(v.toLowerCase())) return v
			if (!alphabet.includes(v))
				return alphabet[
					(alphabet.indexOf(v.toLowerCase()) -
						alphabet.indexOf(key[i]) +
						26) %
						26
				].toUpperCase()
			return alphabet[
				(alphabet.indexOf(v) - alphabet.indexOf(key[i]) + 26) % 26
			]
		})
		.join('')
}

export { vignereDecode }
