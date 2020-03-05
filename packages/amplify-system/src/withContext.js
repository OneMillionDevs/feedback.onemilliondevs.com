import { useContext } from 'react';
import Context from './Context';
const withContext = () => {
	const context = useContext(Context);
	return context;
};

export default withContext;
