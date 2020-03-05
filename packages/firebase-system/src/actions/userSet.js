import {USER_SET} from '../types';
export const userSet = dispatch => payload =>
	dispatch({
		type: USER_SET,
		payload: payload,
	});
