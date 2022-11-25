const validate = (string, alphs = ['A', 'B']) =>
	typeof string == 'string' &&
	Array.isArray(alphs) &&
	typeof alphs[0] == 'string' &&
	typeof alphs[1] == 'string'

export { validate }
