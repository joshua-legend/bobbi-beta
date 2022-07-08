import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../common/styles/global/global-reset";
import {theme} from "../common/styles/theme/theme.config";
import Main from "../common/modules/Main";
import {useTheme} from "../core/store/useTheme";
import {DarkTheme} from "../common/styles/theme/darktheme.config";

function MyApp({ Component, pageProps }: AppProps) {

  const { lightMode } = useTheme();

  return (
      <ThemeProvider theme={lightMode ? theme : DarkTheme}>
        <GlobalStyle />
          <Main>
              <Component {...pageProps} />
          </Main>
      </ThemeProvider>
  );
}
export default MyApp
