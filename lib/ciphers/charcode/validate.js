const validate = (v, k) =>
	typeof v == 'string' && typeof k == 'string' && !/\d/g.test(k)

export { validate }
