import '../styles/globals.css'
import Layout from "../components/Layout";
import { ContextProvider } from '../context/darkModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp
