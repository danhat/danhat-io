import React, {useState, useEffect} from 'react'


import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);


  return (
    
    <>
      <div id='root'>
        {loading ? (
          <Loader/>
        ) : (
          <>
          <Header/>
          <Portfolio/>
          <Blog/>
          <Contact/>
          <Footer/>
          </>
        )}
      </div>
    </>
  )
}

export default App