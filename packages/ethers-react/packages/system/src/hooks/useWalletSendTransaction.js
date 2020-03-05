/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Effect --- */
export const useWalletSendTransaction = () => {
  const [transaction, setTransaction] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  const init = (wallet, tx) => {
    setTransaction(tx);
    setWallet(wallet);
  };

  /* --- Boolean : States --- */
  const [isTransactionBroadcast, setIsTransactionBroadcast] = useState(false);
  const [isTransactionConfirmed, setIsTransactionConfirmed] = useState(false);

  /* --- Transaction : States --- */
  const [transactionHash, setTransactionHash] = useState(undefined);
  const [transactionBroadcast, setTransactionBroadcast] = useState(undefined);

  /* --- Error : States --- */
  const [transactionConfirmed, setTransactionConfirmed] = useState(undefined);
  const [transactionBroadcastError, setTransactionBroadcastError] = useState(
    undefined
  );
  const [transactionConfirmedError, setTransactionConfirmedError] = useState(
    undefined
  );

  /* --- Broadcast Transaction :: Effect --- */
  useEffect(() => {
    if (transaction && wallet && !isTransactionBroadcast) {
      const runEffect = async () => {
        try {
          const transactionBroadcast = await wallet.sendTransaction(
            transaction
          );
          setIsTransactionBroadcast(true);
          setTransactionHash(transactionBroadcast.hash);
          setTransactionBroadcast(transactionBroadcast);
        } catch (error) {
          console.log(error);
          setTransactionBroadcastError(error);
        }
      };
      runEffect();
    }
  }, [transaction, wallet]);

  /* --- Wait for Transaction :: Effect --- */
  useEffect(() => {
    if (isTransactionBroadcast && transactionHash) {
      const runEffect = async () => {
        try {
          const transactionConfirmed = await wallet.provider.waitForTransaction(
            transactionHash
          );
          setIsTransactionConfirmed(true);
          setTransactionConfirmed(transactionConfirmed);
        } catch (error) {
          setTransactionConfirmedError(error);
        }
      };
      runEffect();
    }
  }, [isTransactionBroadcast, transactionHash]);

  return {
    init,
    isBroadacast: isTransactionBroadcast,
    isConfirmed: isTransactionConfirmed,
    hash: transactionHash,
    broadcast: transactionBroadcast,
    confirmed: transactionConfirmed,
    broadcastError: transactionBroadcastError,
    confirmedError: transactionConfirmedError
  };
};
