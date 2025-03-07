<script lang="ts">
	// You can add any dashboard-specific logic here
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-lg">
	<div class="px-4 py-5 sm:px-6">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Dashboard</h3>
		<p class="mt-1 max-w-2xl text-sm text-gray-500">Welcome to your protected dashboard area.</p>
	</div>
	<div class="border-t border-gray-200">
		<dl>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Authentication Status</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
						Authenticated
					</span>
				</dd>
			</div>
			<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Session Information</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					Your session is active and secure.
				</dd>
			</div>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Actions</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<p>You can now access protected resources and features.</p>
					<p class="mt-2">Use the logout button in the navigation bar to end your session.</p>
				</dd>
			</div>
		</dl>
	</div>
</div>
