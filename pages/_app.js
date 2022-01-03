import '../styles/globals.css'
import { useEffect } from 'react';
import { StoreProvider } from '../utlis/store';


function MyApp({ Component, pageProps }) {
  // fixing the material ui styles issues based of styles refresh loss
 useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles)
    }
 }, []);

  return (<StoreProvider> 
            <Component {...pageProps} />
          </StoreProvider>
      ); 
}

export default MyApp
