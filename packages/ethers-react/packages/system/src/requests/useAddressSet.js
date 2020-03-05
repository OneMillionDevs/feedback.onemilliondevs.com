/**
 * @function useAddressSet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { SET_ADDRESS } from '../types';

/* --- Effect --- */
export const useAddressSet = (state, dispatch) => {
  useEffect(() => {
    if (state.isEnableSuccess) {
      const runEffect = async () => {
        try {
          const accounts = await ethereum.send('eth_requestAccounts');
          const address = accounts.result[0];
          if (address) {
            dispatch({
              payload: address,
              type: SET_ADDRESS
            });
          }
        } catch (error) {
          // TODO(@kames) handle errors
        }
      };
      runEffect();
    }
  }, [state.isEnableSuccess]);

  return true;
};
