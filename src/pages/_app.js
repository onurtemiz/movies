import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import { GlobalStyles, Normalize, theme } from '@/utils';
import { ContentContainer, MainContainer } from '@/containers';
import { Spinner } from '@/common';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/user/reducer';
import { wrapper } from 'redux/store';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleTheme = () => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? dispatch(setTheme('dark'))
      : localTheme
      ? dispatch(setTheme(localTheme))
      : dispatch(setTheme('light'));
  };

  useEffect(() => {
    handleTheme();
    setMounted(true);
  }, []);

  if (!mounted) return <Spinner />;

  return (
    <ThemeProvider theme={theme[user.theme]}>
      <>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
          <title>Best Movies & Tv Shows - Totally not free!</title>
          <meta property="og:title" content="Best Movies & Tv Shows - Totally not free!" key="og:title" />
          <meta
            property="og:description"
            content="Actually, there is a secret menu in our website where you can watch anything FREE! Just..."
            key="og:description"
          />
          <meta property="og:site_name" content="Best Movies & Tv Shows - Totally not free!" key="og:site_name" />
          <meta property="og:locale" content="en_GB" key="og:locale" />
          <meta property="og:type" content="website" key="og:type" />
        </Head>
        <Normalize />
        <GlobalStyles />
        <MainContainer>
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </MainContainer>
      </>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
