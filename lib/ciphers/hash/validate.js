const validate = (string, key = ['sha256', 'hex']) =>
	typeof string == 'string' &&
	typeof key[0] == 'string' &&
	typeof key[1] == 'string' &&
	Array.isArray(key)

export { validate }
