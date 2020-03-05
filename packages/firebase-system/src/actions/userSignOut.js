import {USER_SIGN_OUT} from '../types';
export const userSignOut = dispatch => payload =>
	dispatch({
		type: USER_SIGN_OUT,
		payload: payload,
	});
