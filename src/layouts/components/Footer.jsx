import React from 'react';

import messages from '../shared/messages';

class Footer extends React.Component {
  render() {
    const {
      intl: { formatMessage },
    } = this.props;

    return <div>{formatMessage(messages.footer)}</div>;
  }
}

export default Footer;
