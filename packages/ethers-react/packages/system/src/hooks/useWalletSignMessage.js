/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Effect --- */
export const useWalletSignMessage = props => {
  const [messageUnsigned, setMessageUnsigned] = useState(undefined);
  const [messageSigned, setMessageSigned] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  /* --- Error : State --- */
  const [messageSignedError, setMessageSignedError] = useState(undefined);

  /* --- Initialize --- */
  const init = (wallet, msg) => {
    setMessageUnsigned(msg);
    setWallet(wallet);
  };

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (messageUnsigned && !messageSigned && wallet) {
      const runEffect = async () => {
        try {
          const messageSigned = await wallet.signMessage(messageUnsigned);
          setMessageSigned(messageSigned);
        } catch (error) {
          setMessageSignedError(error);
        }
      };
      runEffect();
    }
  }, [messageUnsigned, wallet]);

  /* --- Return : Complete --- */
  return {
    signMessage,
    messageSigned,
    messageUnsigned,
    error: messageSignedError
  };
};
