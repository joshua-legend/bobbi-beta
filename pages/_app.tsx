import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../shared/styles/global/global-reset";
import {theme} from "../shared/styles/theme/theme.config";
import Main from "../common/modules/Main";
import {useTheme} from "../core/store/useTheme";
import {DarkTheme} from "../shared/styles/theme/darktheme.config";

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
