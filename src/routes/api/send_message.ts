import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('./api/add_contact').RequstHandler} */
export const post: RequestHandler = async ({ request }) => {
	console.log(request.headers.get('referer'));

	const contact = await request
		.text()
		.then((str) => new URLSearchParams(str))
		.then((urlParams) => urlParams.entries())
		.then((params) => Object.fromEntries(params));

	console.log(contact);

	return {
		status: 303,
		headers: {
			location: request.headers.get('referer')
		}
	};
};
