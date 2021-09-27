import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WalletContextProvider } from '@provenanceio/wallet-lib';
import { Helmet } from 'react-helmet';
import { SpriteSheet, BaseStyle, Menu, MenuMobile, MenuTablet } from 'Components';
import { GlobalStyle, Themes } from 'theme';
import { Home, NotFound, Passport } from 'Pages';
import { useWallet, useMediaQuery } from 'redux/hooks';
import { PASSPORT_INFO_URL, HOME_URL } from 'consts';

const Content = styled.div``;

function App() {
  const { walletUrl } = useWallet();
  const { matches: useTablet } = useMediaQuery('down', 'md');
  const { matches: useMobile } = useMediaQuery('down', 'sm');

  const renderMenu = () => {
    if (useMobile) { // Mobile (600)
      return <MenuMobile />
    } else if (useTablet) { // Tablet (960)
      return <MenuTablet />
    }
    return <Menu /> // Desktop
  }

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
              {renderMenu()}
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
