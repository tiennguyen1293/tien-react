import React from 'react';
import messages from '../shared/messages';

class TitleHome extends React.Component {
  render() {
    const {
      intl: { formatMessage },
    } = this.props;

    return <h1>{formatMessage(messages.title)}</h1>;
  }
}

export default TitleHome;
