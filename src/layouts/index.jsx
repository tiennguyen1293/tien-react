import React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

import Nav from 'components/Nav';
import Footer from 'components/Footer';

import Loading from './assets/loading.gif';

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  position: relative;
`;

const MainContent = styled.div`
  flex: 1 0 auto;
`;

const FooterWrapper = styled.footer`
  flex-shrink: 0;
`;

const LoadingWrapper = styled.img`
  width: 100px;
  height: 100px;
`;

const Layout = ({ children, intl, loading }) => {
  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { intl });
  });

  return (
    <LayoutWrapper>
      <Header>
        <Nav intl={intl} />
      </Header>
      <MainContent>
        {loading ? <LoadingWrapper src={Loading} alt="Loading" /> : childrenWithProps}
      </MainContent>
      <FooterWrapper>
        <Footer intl={intl} />
      </FooterWrapper>
    </LayoutWrapper>
  );
};

export default injectIntl(Layout);
