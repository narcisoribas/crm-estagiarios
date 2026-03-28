import {Sidebar} from "./components/Sidebar"
import { TopBar } from "./components/TopBar"
import { StatCard } from "./components/StatCard"

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

        <div className="dashboard">

          {/** div aonde iremos colocar os cards */}
          <div className="stats-row">

              <StatCard />
               <StatCard />
                <StatCard />
                 <StatCard />

          </div>

        </div>

      </div>
    
   </div>
  )
}

export default App
