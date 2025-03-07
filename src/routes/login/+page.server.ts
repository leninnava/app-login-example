import { fail } from '@sveltejs/kit';
import { login, type LoginCredentials } from '$lib/auth/auth';
import { LOGIN_API_URL, LOGIN_API_URL_TOKEN } from '$env/static/private';


export const actions = {
	login: async ({ cookies, request }) => {
		// Check if noRedirect parameter is present in the form data
		const formData = await request.formData();
		const noRedirect = formData.get('noRedirect') === 'true';
		if (noRedirect) {
			cookies.set('noRedirect', 'true', {
				path: '/',
				maxAge: 10 // Short-lived cookie, just enough for the animation
			});
		}
		try {
			const username = formData.get('User');
			const password = formData.get('Password');

            if (!username || !password) {
				console.log('incomplete form data')
                return { success: false, message: 'Username and password are required.' };
            }

			const result = await login({ username, password } as LoginCredentials, LOGIN_API_URL, LOGIN_API_URL_TOKEN);

			console.log('Action triggered with:', { username, password });
			if (result.success) {
				cookies.set('session', result.token, {
					path: '/',
					maxAge: 30 * 60 // thirty mins
				});
				return { success: true, message: 'Login successful.' };
			} else return {
				success: false,
				message: result.message
			}

		} catch (error) {
		  return fail(422, {
			success: false,
			error: error
		  })
		}
	}
};
