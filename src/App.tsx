import {Sidebar} from "./components/Sidebar"
import { TopBar } from "./components/TopBar"

import "./styles/app.css"


function App() {


  return (
   <div className="app-layout" >
        {/** aqui vamos a sidebar */}

        <Sidebar />
      <div className="main-content">
        {/** aqui va el header */}
        <TopBar />

        {/** aqui va el contenido principal */}

      </div>
    
   </div>
  )
}

export default App
