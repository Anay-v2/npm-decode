import { baconCode } from './code.js'

function baconEncode(string, alphs = ['A', 'B']) {
	return [...string]
		.map(v => {
			if (!Object.keys(baconCode).includes(v.toLowerCase())) return v
			return baconCode[v.toLowerCase()]
				.replace(/A/g, alphs[0])
				.replace(/B/g, alphs[1])
		})
		.join(' ')
}

export { baconEncode }
