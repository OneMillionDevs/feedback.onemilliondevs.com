/**
 * @name FirebaseContext
 */
import {createContext} from 'react';

const Context = createContext({
	scope: undefined,
	user: undefined,
});

export default Context;
