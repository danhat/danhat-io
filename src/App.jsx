// import React, {useState, useEffect} from 'react'
// import Toggle from './components/toggle/Toggle'
// import Loader from './components/loader/Loader'
// import Nav from './components/nav/Nav'
// import Header from './components/header/Header'
// import Portfolio from './components/portfolio/Portfolio'
// import Blog from './components/blog/Blog'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

import React from 'react'

const App = () => {
  return(
    <div id='underConstruction' className='App' data-theme='dark'>
      <h2>Site is Under Construction</h2>
    </div>
    
  )
}


// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 4500);
//   }, []);

//   const [isDark, setIsDark] = useState(true)


//   return (
//       <div className='App' data-theme={isDark ? 'dark' : 'light'}>
        
//         {
//           loading ? (
//             <Loader/>
//           ) : (
//             <>
//               <Nav isDark={isDark} setIsDark={() => setIsDark(!isDark)}/>
//               <Header/>
//               <Portfolio/>
//               <Blog/>
//               <Footer/>
//             </>
//           )
//         }
//       </div>
    
//   )
// }

export default App