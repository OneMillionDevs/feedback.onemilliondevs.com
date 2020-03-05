import {Dashboard, Canvas, Site} from '@templates';

export default ({children, pageContext}) => {
  if (pageContext.layout === 'canvas') {
    return <Canvas>{children}</Canvas>;
  }
  if (pageContext.layout === 'dashboard') {
    return <Dashboard>{children}</Dashboard>;
  }
  return <Site>{children}</Site>;
};
