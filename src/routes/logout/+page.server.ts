import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }) => {
		console.log('Logout action called');
		
		// Clear the session cookie
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		
		// Redirect to login page
		throw redirect(303, '/login');
	}
};
