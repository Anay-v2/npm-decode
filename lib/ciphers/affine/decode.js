import { alphabet } from '../../alphabet.js'
import { modInv } from '../../modinv.js'
import { coprimes } from '../../coprimes.js'

function affineDecode(string, key = [5, 8]) {
	if (!coprimes(key[0], 26)) throw new Error('A and 26 must be coprimes')
	const aModInv = modInv(key[0], 26)
	return [...string]
		.map(v => {
			if (!alphabet.includes(v.toLowerCase())) return v
			const x = (alphabet.indexOf(v.toLowerCase()) - key[1]) * aModInv
			if (v.toLowerCase() == v) return alphabet[((x % 26) + 26) % 26]
			return alphabet[((x % 26) + 26) % 26].toUpperCase()
		})
		.join('')
}

export { affineDecode }
