import { MAILCHIMP_API_KEY } from '$env/static/private';
import { default as mc } from '@mailchimp/mailchimp_marketing';

mc.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us14'
});

async function ping() {
	const response = await mc.ping.get();
	console.log(response);
}

async function subscribeToNewsletter(email) {
	const response = await mc.lists.addListMember('fb8865a350', {
		email_address: email,
		status: 'subscribed'
	});
	return response;
}

const mailchimp = {
	ping,
	subscribeToNewsletter
};

export default mailchimp;
