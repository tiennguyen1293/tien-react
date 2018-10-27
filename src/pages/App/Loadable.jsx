import React from 'react';
import * as L from 'react-loadable';

const Loadable = opts => L({
  loading: () => <div>Loading...</div>,
  ...opts,
});

export default Loadable;
