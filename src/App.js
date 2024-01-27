// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Layout from './Layout';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contacts" element={<Contact />} />
//           <Route path="service" element={<Service />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react'
import Counter from './pages/Counter'
import Effect from './pages/Effect'
import Reducer from './pages/Reducer'
import Callback from './pages/Callback'

export default function App() {
  return (
    <div><Counter/>
    <Effect/>
    <Reducer/>
    <Callback/></div>
  )
}


