import { alphabet } from '../../utils/alphabet.js'
import { coprimes } from '../../utils/coprimes.js'

function affineEncode(string, key = [5, 8]) {
	if (!coprimes(key[0], 26)) throw new Error('A and 26 must be coprimes')
	return [...string]
		.map(v => {
			if (!alphabet.includes(v.toLowerCase())) return v
			if (v.toLowerCase() == v)
				return alphabet[(key[0] * alphabet.indexOf(v) + key[1]) % 26]
			return alphabet[
				(key[0] * alphabet.indexOf(v.toLowerCase()) + key[1]) % 26
			].toUpperCase()
		})
		.join('')
}

export { affineEncode }
