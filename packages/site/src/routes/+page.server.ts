import type { Actions } from './$types';
import mailchimp from '$lib/services/mailchimp';
import { z } from 'zod';

const subscribeSchema = z.object({
	email: z.string().email({ message: 'Email must be a valid email address' })
});

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			subscribeSchema.parse(formData);
		} catch (error) {
			const { fieldErrors: errors } = error.flatten();
			return {
				data: formData,
				errors
			};
		}

		try {
			const { email } = formData;
			await mailchimp.subscribeToNewsletter(email);
		} catch (err) {
			return {
				status: 500,
				body: {
					succuss: true,
					message: 'It appears you have already subscribed. Thank you.'
				}
			};
		}

		return {
			status: 200,
			body: {
				succuss: true,
				message: 'Thank you for subscribing!'
			}
		};
	}
};
