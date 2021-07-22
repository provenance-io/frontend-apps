import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SpriteSheet, BaseStyle } from 'Components';
import { GlobalStyle, Themes } from 'theme';
import { Home, NotFound } from 'Pages';

const Version = styled.div`
  text-align: right;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
`;

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <GlobalStyle theme={Themes.default} />
      <SpriteSheet />
      <ThemeProvider theme={Themes.default}>
        <BaseStyle>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Version>v{process.env.REACT_APP_VERSION}</Version>
        </BaseStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
