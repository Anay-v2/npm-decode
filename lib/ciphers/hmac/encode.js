import { createHmac } from 'crypto'

function hmacCreate(string, options = ['sha256', 'hex']) {
	console.log(string, options)
	return createHmac(options[0], string[1])
		.update(string[0])
		.digest(options[1] || 'hex')
}

export { hmacCreate }
