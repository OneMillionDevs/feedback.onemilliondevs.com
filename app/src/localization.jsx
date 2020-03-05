import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {MDXLink} from '@components';

const LocaleContext = React.createContext();

const Layout = ({children, pageContext: {locale}}) => (
  <LocaleContext.Provider value={{locale}}>
    <MDXProvider components={{a: MDXLink}}>{children}</MDXProvider>
  </LocaleContext.Provider>
);

export {Layout, LocaleContext};
