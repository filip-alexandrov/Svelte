// Endpoints = get/post requests
const x = 'something';
export const get = () => {
	return {
		body: {
			x: x
		}
	};
};

export const post = async ({ request }) => {
	const data = await request.json();
	const name = data.name;
	const email = data.email;

	return {
		status: 201,
		body: {
			name,
			email
		}
	};
};
