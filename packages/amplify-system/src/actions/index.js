import { BOOTSTRAP_CONTEXT } from './types';

/* -------------------------------- */
/* Initialization
/* -------------------------------- */
/**
 * @name bootstrapContext
 * @param {Object} provider
 */
export const bootstrapContext = (state, dispatch) => payload =>
	dispatch({
		type: BOOTSTRAP_CONTEXT,
		payload: payload
	});
