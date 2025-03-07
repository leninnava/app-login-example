/**
 * Authentication service for handling login and session management
 */

// Mock test users
const TEST_USERS = [
    { 
        username: "mockusername",
        password: "password123",
        user: { 
            id: "1",
            name: "Test User",
            role: "user",
            token: "mock_user_token"
        }
    },
    {
        username: "mockusername2",
        password: "admin123",
        user: {
            id: "2",
            name: "Admin User",
            role: "admin", 
            token: "mock_admin_token"
        }
    }
];



import { PUBLIC_MOCK_API } from '$env/static/public';
import type { RequestEvent } from '@sveltejs/kit';


export interface LoginCredentials {
	username: string;
	password: string;
}

// Export the union type for use in other files
export type LoginResponse = SuccessLoginResponse | ErrorLoginResponse;

// Success response type with required token
interface SuccessLoginResponse {
	success: true;
	token: string;
	id?: string;
}
// Error response type with optional message
interface ErrorLoginResponse {
	success: false;
	message?: string;
}

// Union type of possible responses
type TypedLoginResponse = SuccessLoginResponse | ErrorLoginResponse;

/**
 * Attempts to log in a user with the provided credentials
 */
export async function login(credentials: LoginCredentials, api: string, token: string): Promise<TypedLoginResponse> {
	if (PUBLIC_MOCK_API === 'true') {
		console.warn('Notice: using the mock API');
		await new Promise((resolve) => setTimeout(resolve, 2000));
		const mockUser = TEST_USERS.find(
			(user) => user.username === credentials.username && user.password === credentials.password
		);
		if (mockUser) {
			const successResponse: SuccessLoginResponse = {
				success: true,
				token: mockUser.user.token,
				id: mockUser.user.id
			};
			return successResponse;
		} else {
			const errorResponse: ErrorLoginResponse = {
				success: false,
				message: 'Invalid credentials'
			};
			return errorResponse;
		}
	}
	try {
		// Transform credentials to match API's expected format
		const apiCredentials = {
			User: credentials.username,
			Password: credentials.password
		};
		
		const response = await fetch(api, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
				'Accept': '/*/',
				'Accept-Encoding': 'gzip, deflate, br',
				'Connection': 'keep-alive'
			},
			body: JSON.stringify(apiCredentials)
		});

		const data = await response.json();

		if (data.error) {
			const errorResponse: ErrorLoginResponse = {
				success: false,
				message: data.message || 'Login failed. Please try again.'
			};
			return errorResponse;
		}

		// Assert this is a success response with a valid token
		const successResponse: SuccessLoginResponse = {
			success: true,
			token: data.token,
			id: data.id
		};
		
		return successResponse;
	} catch (error) {
		console.error('Login error:', error);
		const errorResponse: ErrorLoginResponse = {
			success: false,
			message: 'An error occurred during login. Please try again.'
		};
		
		return errorResponse;
	}
}

/**
 * Checks if the user is currently logged in
 */
export function isLoggedIn(): boolean {
	return false;
}


/**
 * Logs out the current user by calling the server-side logout endpoint
 */
export async function logout(event: RequestEvent ): Promise<void> {
	event.cookies.set('session', '', {
		httpOnly: true,
		sameSite: 'lax',
		maxAge: 0,
		path: '/'
	});
}
