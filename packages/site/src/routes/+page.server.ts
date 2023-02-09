import type { Actions } from './$types';
import mailchimp from '$lib/services/mailchimp';

export const actions: Actions = {
	subscribe: async ({ request }) => {
		try {
			const data = await request.formData();
			const email = data.get('email');

			console.log(email);

			//const result = await mailchimp.subscribeToNewsletter(email);

			const ping = await mailchimp.ping();

			console.log(ping);

			//return {
			//	status: result.status,
			//	body: result
			//};
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				body: error
			};
		}
	}
};
