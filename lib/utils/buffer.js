function encodeWithBuffer(type) {
	return string => Buffer.from(string).toString(type)
}

function decodeWithBuffer(type) {
	return string => Buffer.from(string, type).toString('utf8')
}

export { encodeWithBuffer, decodeWithBuffer }
