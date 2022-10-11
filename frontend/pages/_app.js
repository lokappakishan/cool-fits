import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

Router.events.on('routerChangeStart', () => NProgress.start());
Router.events.on('routerChangesComplete', () => NProgress.done());
Router.events.on('routerChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
