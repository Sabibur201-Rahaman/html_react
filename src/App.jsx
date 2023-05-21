import Home from "./sections/Home"
import About from "./sections/About"
import Promo from "./sections/Promo"
import Services from "./sections/Services"
import Teams from "./sections/Teams"
import Projects from "./sections/Projects"
import Contacts from "./sections/Contacts"
import Layout from "./component/layout/Layout"
import ScrollBottom from "./component/layout/ScrollBottom"
function App() {
  return (
  
    <>
     <Layout>
      <Home/>
       <About/>
       <Promo/>
       <Services/>
       <Teams/>
       <Projects/>
       <Contacts/>
       <ScrollBottom/>
     </Layout>
     
    </>
    
  )
}

export default App
