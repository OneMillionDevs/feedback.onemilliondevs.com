/* --- Global --- */
import React, { useContext, useReducer } from 'react';

/* --- Module --- */
import Context from '../Context';
import reducers from '../reducer';
import { enhanceActions } from '../middleware/actions';

/* --- Effects --- */
import { useBootstrap } from '../effects';

/* --- Provider Component --- */
const Provider = ({ config, ...props }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);

  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);
  useBootstrap(actions, config);

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions
      }}
      {...props}
    />
  );
};
export default Provider;
