import {USER_SET, USER_SIGN_OUT} from './types';

const reducerActions = (state, action) => {
	switch (action.type) {
		/* ----------------------- */
		/*         Common          */
		/* ----------------------- */
		case USER_SET:
			return {
				...state,
				user: action.payload,
			};
		case USER_SIGN_OUT:
			return {
				...state,
				user: undefined,
			};

		default:
			return state;
		// throw new Error(`No Reducer Type Set: ${type}`);
	}
};

export default reducerActions;
