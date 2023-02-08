import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/main.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from '../api/themeStyle';
import { store } from '../store/store';
import { Provider } from 'react-redux';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
}
