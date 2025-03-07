<script lang="ts">
  	import { enhance } from '$app/forms';
	let { data, children } = $props();
</script>

{#if data.isUserAuthenticated}
	<div class="flex h-screen bg-gray-100">
		<!-- Sidebar -->
		<div class="w-64 bg-indigo-800 text-white">
			<!-- Logo -->
			<div class="flex items-center justify-center h-16 border-b border-indigo-700">
				<span class="text-xl font-bold">App Dashboard</span>
			</div>
			
			<!-- Navigation Links -->
			<nav class="mt-5">
				<a href="/dashboard" class="flex items-center px-6 py-3 text-white hover:bg-indigo-700">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
					</svg>
					Dashboard
				</a>
				<a href="#" class="flex items-center px-6 py-3 text-white hover:bg-indigo-700">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
					Profile
				</a>
				<a href="#" class="flex items-center px-6 py-3 text-white hover:bg-indigo-700">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					Settings
				</a>
			</nav>
		</div>
		
		<!-- Main Content -->
		<div class="flex-1 flex flex-col overflow-hidden">
			<!-- Top Header -->
			<header class="bg-white shadow-sm">
				<div class="flex items-center justify-between px-6 h-16">
					<div>
						<h1 class="text-lg font-medium">Welcome to Dashboard</h1>
					</div>
					<div>
						<form method="POST" action="/logout">
							<button
								type="submit"
								class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Logout
							</button>
						</form>
					</div>
				</div>
			</header>
			
			<!-- Content Area -->
			<main class="flex-1 overflow-y-auto bg-gray-100 p-6">
				<!-- Breadcrumbs -->
				<nav class="text-sm mb-6">
					<ol class="list-none p-0 inline-flex">
						<li class="flex items-center">
							<a href="/" class="text-indigo-600 hover:text-indigo-800">Home</a>
							<svg class="h-4 w-4 fill-current text-gray-400 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
							</svg>
						</li>
						<li class="text-gray-500">Dashboard</li>
					</ol>
				</nav>
				
				<!-- Dashboard Content -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h2 class="text-lg font-medium mb-4">Overview</h2>
						<div class="flex items-center">
							<div class="p-3 rounded-full bg-indigo-100 text-indigo-500 mr-4">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<div>
								<p class="text-sm text-gray-500">Session Status</p>
								<p class="text-lg font-semibold">Active</p>
							</div>
						</div>
					</div>
					
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h2 class="text-lg font-medium mb-4">Quick Actions</h2>
						<div class="space-y-4">
							<button class="w-full flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
								<svg class="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
								</svg>
								Create New Item
							</button>
							<button class="w-full flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
								<svg class="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
								</svg>
								Export Data
							</button>
						</div>
					</div>
				</div>
				
				<!-- Main Content -->
				<div class="bg-white rounded-lg shadow-sm p-6">
					{@render children()}
				</div>
			</main>
		</div>
	</div>
{:else}
	<div class="min-h-screen flex items-center justify-center bg-gray-50">
		<div class="text-center">
			<h2 class="text-xl font-semibold text-red-600">Access Denied</h2>
			<p class="mt-2 text-gray-600">You need to be logged in to view this page.</p>
			<a href="/login" class="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
				Go to Login
			</a>
		</div>
	</div>
{/if}
