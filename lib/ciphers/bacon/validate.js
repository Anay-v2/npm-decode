const validate = (decode, string, alphs = ['A', 'B']) =>
	typeof string == 'string' &&
	typeof alphs[0] == 'string' &&
	typeof alphs[1] == 'string'

export { validate }
