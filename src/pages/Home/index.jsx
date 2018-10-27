import React from 'react';
import Layouts from 'layouts';
import restAPI from 'api';
import Title from './components/Title';
import ContentMain from './components/ContentMain';

class Home extends React.Component {
  state = {
    loading: true,
    data: undefined,
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const api = await restAPI.put('/5bd3d1bd3200006700a3bcdd?mocky-delay=1000ms');
    this.setState({ loading: false, data: api.data });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <Layouts loading={loading}>
        <Title />
        <ContentMain data={data} />
      </Layouts>
    );
  }
}

export default Home;
