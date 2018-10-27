import React from 'react';

import messages from '../shared/messages';

class ContainerMain extends React.Component {
  render() {
    const {
      intl: { formatMessage },
      data,
    } = this.props;

    return (
      <React.Fragment>
        <h2>{formatMessage(messages.contentMain)}</h2>
        <span>{data}</span>
      </React.Fragment>
    );
  }
}

export default ContainerMain;
