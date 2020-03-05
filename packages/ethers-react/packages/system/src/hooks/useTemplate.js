/**
 * @function useTemplate
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Effect --- */
export const useWalletSignMessage = props => {
  const [, set] = useState();

  /* --- Error : State --- */
  const [error, setError] = useState();

  /* --- Initialize --- */
  const init = () => {};

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (true) {
      const runEffect = async () => {
        try {
          setMessageSigned(messageSigned);
        } catch (error) {
          setError(error);
        }
      };
      runEffect();
    }
  }, [messageUnsigned, wallet]);

  /* --- Return : Complete --- */
  return {
    init,
    error: error
  };
};
