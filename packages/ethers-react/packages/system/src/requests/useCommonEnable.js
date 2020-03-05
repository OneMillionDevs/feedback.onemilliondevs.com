/**
 * @function useCommonEnableEffect
 * @description Handle the Ethereum wallet enable request.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { ENABLE_SUCCESS, ENABLE_FAILURE } from '../types';

/* --- Effect --- */
export const useCommonEnable = (state, dispatch) => {
  useEffect(() => {
    if (state.isEnableRequested) {
      const runEffect = async () => {
        try {
          const accounts = await window.ethereum.enable();
          if (accounts[0]) {
            dispatch({
              type: ENABLE_SUCCESS
            });
          }
        } catch (error) {
          dispatch({
            type: ENABLE_FAILURE,
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.isEnableRequested]);

  return true;
};
