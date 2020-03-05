/**
 * @function enhanceActions
 * @description Wrap extenion actions with dispatch
 */
export const enhanceActions = (list, state, dispatch) => {
	let actions = {};
	Object.keys(list).forEach(action => {
		actions[action] = list[action](state, dispatch);
	});
	return actions;
};
