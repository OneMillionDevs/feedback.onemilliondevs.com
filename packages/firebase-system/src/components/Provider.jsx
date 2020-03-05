/**
 * @function Provider
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */
import React, {useContext, useReducer, useState, useEffect} from 'react';

/* --- Local --- */
import Context from '../Context';
import reducer from '../reducer';
import * as actionsList from '../actions';
import {enhanceActions} from '../middleware/actions';

/* --- Component --- */
const Provider = ({children, contracts, extensions}) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = enhanceActions(actionsList, dispatch);

  /* --- Developer Messages --- */
  console.log(state, 'Firebase Provider');
  return (
    <Context.Provider
      value={{
        ...state,
        ...actions,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
