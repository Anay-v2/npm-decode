const validate = (string, key) =>
	typeof string == 'string' &&
	typeof key[0] == 'number' &&
	Array.isArray(key) &&
	key[0] >= 2 &&
	key[0] < 99 &&
	key[0] < string.length &&
	typeof key[1] == 'number' &&
	key[1] >= 0

export { validate }
