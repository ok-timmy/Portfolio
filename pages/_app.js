import '../styles/globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import gsap from "gsap";

function MyApp({ Component, pageProps }) {
  
  let timeline = gsap.timeline();
  return <>
  <Header timeline={timeline}/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
