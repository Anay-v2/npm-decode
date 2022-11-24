const validate = (d, string, key = ['sha256', 'hex']) =>
	typeof string[0] == 'string' &&
	typeof string[1] == 'string' &&
	/^[ a-f\d]+$/i.test(string[1]) &&
	typeof key[0] == 'string' &&
	typeof key[1] == 'string' &&
	Array.isArray(key)

export { validate }
