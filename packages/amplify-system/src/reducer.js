export default (state, action) => {
	switch (action.type) {
		case 'BOOTSTRAP_CONTEXT':
			if (typeof window !== `undefined`) {
				const Amplify = require('aws-amplify').default;
				return {
					...state,
					api: Amplify.API,
					instance: Amplify.configure(action.payload)
				};
			} else {
				return {
					...state
				};
			}

		default:
			throw new Error(`No Reducer Type Set ${action.type} `);
	}
};
