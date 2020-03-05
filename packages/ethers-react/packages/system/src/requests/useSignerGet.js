/**
 * @function useSignerGet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { SIGNER_GET_SUCCESS, SIGNER_GET_FAILURE } from '../types';

/* --- Effect --- */
export const useSignerGet = (state, dispatch) => {
  useEffect(() => {
    const runEffect = async () => {
      if (state.injected) {
        const provider = new state.instance.providers.Web3Provider(
          state.injected
        );
        const signer = await provider.getSigner();
        dispatch({
          type: SIGNER_GET_SUCCESS,
          payload: signer
        });
      } else {
        dispatch({
          type: SIGNER_GET_FAILURE,
          payload: undefined
        });
      }
    };
    runEffect();
  }, [state.injected]);

  return true;
};
