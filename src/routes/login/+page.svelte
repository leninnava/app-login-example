<script lang="ts">
    import type { PageProps } from './$types';
    import { enhance } from '$app/forms';
    import { fade, fly } from 'svelte/transition';
    import { goto } from '$app/navigation';
	import { cubicOut } from 'svelte/easing';
    
    let username = $state('');
    let password = $state('');
    let loading = $state(false);
    let success = $state(false);
    let formVisible = $state(true);
    let { form, data }: PageProps = $props();

    // Function to handle successful login animation sequence
    function handleSuccessAnimation() {
        console.log('Animation sequence started');
        success = true;
        
        // After showing the checkmark, fade out the form
        setTimeout(() => {
            console.log('Fading out form');
            formVisible = false;
            
            // After form fades out, redirect to dashboard
            setTimeout(() => {
                console.log('Redirecting to dashboard');
                goto('/dashboard');
            }, 500);
        }, 1000);
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    {#if formVisible}
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md" 
             transition:fade={{ duration: 300, easing: cubicOut }}>
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account.</h2>
		</div>
		
		<form class="mt-8 space-y-6" method="POST" action="?/login" use:enhance={({ formData }) => {
			// Log the form data being submitted
			console.log('Form data being submitted:', Object.fromEntries(formData));
			loading = true;
			
			return async ({ update, result }) => {
                console.log('Form submission result:', result);
                
                // Update the form data
                await update({ reset: false });
                
                console.log('Updated form data:', form);
                
                // Check if login was successful based on the result type and form.success property
                if (result.type === 'success' && form?.success === true) {
                    console.log('Login successful, starting animation');
                    handleSuccessAnimation();
                } else {
                    console.log('Login failed or form.success not true');
                    loading = false;
                }
            }
		}}>
			{#if form?.message}
				<div class="rounded-md bg-red-50 p-4">
					<div class="flex">
						<div class="ml-3">
							<h3 class="text-sm font-medium text-red-800">{form?.message}</h3>
						</div>
					</div>
				</div>
			{/if}

			<input type="hidden" name="noRedirect" value="true">
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="username" class="sr-only">Username</label>
					<input
						id="username"
						name="User"
						type="string"
						autocomplete="username"
						required
						bind:value={username}
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Username"
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="Password"
						type="password"
						autocomplete="current-password"
						required
						bind:value={password}
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
				</div>
			</div>
			
			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
				>
					{#if loading}
						<span class="absolute left-0 inset-y-0 flex items-center pl-3">
							{#if success}
								<!-- Checkmark icon -->
								<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
									 stroke="currentColor" stroke-width="3" in:fly={{ y: 10, duration: 300 }}>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							{:else}
								<!-- Loading spinner -->
								<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
							{/if}
						</span>
						{success ? 'Success!' : 'Signing in...'}
					{:else}
						Sign in
					{/if}
				</button>
			</div>
		</form>
        </div>
    {/if}
</div>
