import '../styles/globals.css';
import {ThemeProvider} from "../providers/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;