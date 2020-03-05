/**
 * @function useCommonSetWallet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { SET_WALLET_SUCCESS, SET_WALLET_FAILURE } from '../types';

/* --- Effect --- */
export const useCommonSetWallet = (state, dispatch) => {
  useEffect(() => {
    if (state.address) {
      const runEffect = async () => {
        try {
          const provider = await ethers.providers.Web3Provider(
            window.web3.currentProvider
          );
          const wallet = provider.getSigner();
          dispatch({
            type: SET_WALLET_SUCCESS,
            payload: wallet
          });
        } catch (error) {
          dispatch({
            type: SET_WALLET_FAILURE,
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.address]);

  return true;
};
