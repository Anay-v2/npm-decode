const validate = (string, key) =>
	typeof string == 'string' && typeof key == 'number' && key > 0

export { validate }
