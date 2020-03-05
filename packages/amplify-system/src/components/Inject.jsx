import React from 'react';
import { Component } from '@horizin/ui-compose';
import Context from '../Context';

const withAmplify = (ComponentRender, props) => (
  <Context.Consumer>
    {amplify => <>{Component(ComponentRender, { amplify, ...props })}</>}
  </Context.Consumer>
);

export default withAmplify;
