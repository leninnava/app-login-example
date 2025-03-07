<script lang="ts">
	import { goto } from '$app/navigation';
	
	function goToLogin() {
		goto('/login');
	}
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
	<p class="text-lg text-gray-600 mb-8">You're probably looking for the login page.</p>
	
	<button
		on:click={goToLogin}
		class="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	>
		Go to Login
	</button>
</div>
