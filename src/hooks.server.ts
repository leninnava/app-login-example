import type { Handle } from '@sveltejs/kit';

/**
 * Server hook to handle session validation and protected routes
 */
export const handle: Handle = async ({ event, resolve }) => {
	// Get the session cookie
	const isUserAuthenticated = !!event.cookies.get('session');
   console.log('session cookie', event.cookies.get('session'));
	if (isUserAuthenticated) {
		event.locals.session = event.cookies.get('session')
		console.log('locals', event.locals)
	} else {
		event.cookies.set('session', '', {
			path: '/'
		})
	}

	console.log('from server hooks', isUserAuthenticated);

	// Check if the route is protected
	const isProtectedRoute = event.url.pathname.startsWith('/dashboard');
	const isLoginRoute = event.url.pathname === '/login';

	// Redirect to login if trying to access protected route without authentication
	if (isProtectedRoute && !isUserAuthenticated) {
		return new Response(null, {
			status: 303,
			headers: {
				Location: '/login'
			}
		});
	}

	// Redirect to protected area if already logged in and trying to access login page
	// Skip redirect if the request has a 'noRedirect' cookie to allow animations to complete
	const noRedirect = event.cookies.get('noRedirect') === 'true';
	if (isLoginRoute && isUserAuthenticated && !noRedirect) {
		return new Response(null, {
			status: 303,
			headers: {
				Location: '/dashboard'
			}
		});
	}

	// Continue with the request
	const response = await resolve(event);
	return response;
};
