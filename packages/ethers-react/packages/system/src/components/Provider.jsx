/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */
import React, { useContext, useReducer } from "react";
import Context from "../Context";
import reducers from "../reducer";
import { enhanceActions } from "../middleware/actions";
import { contractLoad } from "../middleware/initialize";
import * as GlobalEffects from "../requests";
import * as ReactiveEffects from "../reactive";
import { WALLET_SEND_TRANSACTION_REQUEST } from "../types";

/* --- Component --- */
const Provider = ({ children, contracts = [] }) => {
  /* --- Ethers Context --- */
  const initialState = useContext(Context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    reducers,
    initialState,
    contractLoad(contracts)
  );
  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);

  /* --- Global Effects --- */
  Object.values(GlobalEffects).map(effect => effect(state, dispatch));

  /* --- Reactive Effects --- */
  Object.values(ReactiveEffects).map(effect => effect(state, dispatch));

  /* --- Developer Messages --- */
  console.log(state, "Ethers Provider");

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
