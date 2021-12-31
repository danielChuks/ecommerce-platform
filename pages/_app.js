import '../styles/globals.css'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  // fixing the material ui styles issues based of styles refresh loss
 useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles)
    }
 }, []);

  return <Component {...pageProps} />
}

export default MyApp
