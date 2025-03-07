import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const isUserAuthenticated = !!locals.session


  return {
	isUserAuthenticated
  }
};
