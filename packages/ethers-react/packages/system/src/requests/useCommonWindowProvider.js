import { ethers } from "ethers";
/**
 * @function useCommonSetWallet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import { SET_PROVIDER, SET_PROVIDER_STATUS } from "../types";

/* --- Effect --- */
export const useCommonWindowProvider = (state, dispatch) => {
  useEffect(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: SET_PROVIDER,
        payload: {
          mainnet: ethers.getDefaultProvider("mainnet"), // TODO(@kames) Add toggle.
          kovan: ethers.getDefaultProvider("kovan"), // TODO(@kames) Add toggle.
          rinkeby: ethers.getDefaultProvider("rinkeby") // TODO(@kames) Add toggle.
        }
      });
    } else {
      dispatch({
        type: SET_PROVIDER_STATUS,
        payload: undefined
      });
    }
  }, [window.web3 && window.web3.currentProvider]);

  return true;
};
