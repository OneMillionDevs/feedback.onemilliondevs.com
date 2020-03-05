/**
 * @function contractLoad
 */

/* --- Global --- */
import { selectNetworkName } from "../utilities";

/* --- Configuration --- */
const COMPILED = "compiled";
const CUSTOM = "custom";
const FACTORY = "factory";

/* --- Function --- */
export const contractLoad = contracts => initialState => {
  let contractLibrary = {};

  contracts.forEach(contract => {
    /* --- Standard JSON : Smart Contract JSON --- */
    if (contract.networks) {
      const networkId = Object.keys(contract.networks)[0];
      const address = contract.networks[networkId].address;

      contractLibrary[address] = {
        address: address,
        abi: contract.abi,
        bytecode: contract.bytecode,
        name: contract.name,
        type: COMPILED,
        network: {
          chainId: Number(networkId),
          name: selectNetworkName(networkId)
        }
      };
    }

    /* --- Custom Input : Smart Contract --- */
    if (contract.network) {
      contractLibrary[contract.address] = {
        address: contract.address,
        abi: contract.abi,
        bytecode: contract.bytecode,
        contractName: contract.name,
        name: contract.name,
        type: CUSTOM,
        network: contract.network
      };
    }

    /* --- Factory : Smart Contract --- */
    if (!contract.network && !contract.address && contract.id) {
      console.log(contract);
      contractLibrary[contract.id] = {
        abi: contract.abi,
        bytecode: contract.bytecode,
        type: FACTORY
      };
    }
  });

  return {
    ...initialState,
    contracts: {
      ...contractLibrary
    }
  };
};
