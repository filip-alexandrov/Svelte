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
