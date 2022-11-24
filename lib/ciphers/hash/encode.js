import { createHash } from 'crypto'

function hashCreate(string, options = ['sha256', 'hex']) {
	return createHash(options[0])
		.update(string)
		.digest(options[1] || 'hex')
}

export { hashCreate }
