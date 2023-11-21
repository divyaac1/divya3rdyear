// //  import React from 'react'
// //  import ReactPlayer from 'react-player'
// // import Body from './Components/Body'
// //  import Header from './Components/Header'
// //  import Footer from './Components/Footer'
// //  const App = () => {
// //  return (
// //     <div>
// //        <Header/>
// //       <Body/>
// //       <Footer/>

// //     </div>
// //   )
// // }
// //  export default App
//  import React from 'react'
//  import Navigation from './Components/Navigation'
//  const App = () => {
//     return (
//       <div>
//         <Navigation/>
//         </div>
//     )
//  }

//   export default App



 import React from 'react'
 import Navigation from './Components/Navigation'
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
 import Home from './Components/Home'
 import Contact from './Components/Contact'
 import Todolist from './Components/Todolist'
 import Footer from './Components/Footer'
 import { BottomNavigation } from '@mui/material'

 const App= () => {
  return (
     <div>
       <Router>
         <div>
        <Navigation/>
        </div>
        <Routes>
         <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Todolist' element={<Todolist/>}/>
        
         </Routes>
       </Router>
      <div>
        <Footer/>
      </div>
     </div>
   )
 }

 export default App
