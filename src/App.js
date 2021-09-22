import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WalletContextProvider } from '@provenanceio/wallet-lib';
import { SpriteSheet, BaseStyle, Menu } from 'Components';
import { GlobalStyle, Themes } from 'theme';
import { Home, NotFound, Passport } from 'Pages';
import { useWallet } from 'redux/hooks';
import { PASSPORT_INFO_URL, HOME_URL } from 'consts';

const Version = styled.div`
  text-align: right;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  background: ${({ theme }) => `linear-gradient(
    270deg,
    ${theme.TRANSPARENT} 0%,
    ${theme.GRAY_LIGHTEST} 50%,
    ${theme.TRANSPARENT} 100%
  )`};
  width: 80px;
  padding: 4px 0;
`;
const Content = styled.div`
  display: flex;
`;

function App() {
  const { walletUrl } = useWallet();
  console.log('App() - test console.log()');

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <WalletContextProvider walletUrl={walletUrl}>
        <GlobalStyle theme={Themes.default} />
        <SpriteSheet />
        <ThemeProvider theme={Themes.default}>
          <BaseStyle>
            <Content>
              <Menu />
              <Switch>
                <Route exact path={HOME_URL} component={Home} />
                <Route path={PASSPORT_INFO_URL} component={Passport} />
                <Route component={NotFound} />
              </Switch>
              <Version>v{process.env.REACT_APP_VERSION}</Version>
            </Content>
          </BaseStyle>
        </ThemeProvider>
      </WalletContextProvider>
    </BrowserRouter>
  );
}

export default App;
