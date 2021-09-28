import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WalletContextProvider } from '@provenanceio/wallet-lib';
import { Helmet } from 'react-helmet';
import { SpriteSheet, BaseStyle, Menu } from 'Components';
import { GlobalStyle, Themes } from 'theme';
import { Home, NotFound, Passport } from 'Pages';
import { useWallet } from 'redux/hooks';
import { PASSPORT_INFO_URL, HOME_URL } from 'consts';

const Content = styled.div``;

function App() {
  const { walletUrl } = useWallet();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <WalletContextProvider walletUrl={walletUrl}>
        <GlobalStyle theme={Themes.default} />
        <SpriteSheet />
        <ThemeProvider theme={Themes.default}>
          <BaseStyle>
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Content>
              <Menu />
              <Switch>
                <Route exact path={HOME_URL} component={Home} />
                <Route path={PASSPORT_INFO_URL} component={Passport} />
                <Route component={NotFound} />
              </Switch>
            </Content>
          </BaseStyle>
        </ThemeProvider>
      </WalletContextProvider>
    </BrowserRouter>
  );
}

export default App;
