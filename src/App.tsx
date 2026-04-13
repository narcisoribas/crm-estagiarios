import {Sidebar} from "./components/Sidebar"
import { TopBar } from "./components/TopBar"
import { StatCard } from "./components/StatCard"
import {  CheckCircle,UserPlus,ListTodo,Clock } from "lucide-react"

import "./styles/app.css"
import { Client } from "./components/client/Client"


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

                 <StatCard 
                 title="total de clientes" 
                 value={6}
                 subtitle="+2 neste mês"
                 subtitleColor="green"
                 icon={<UserPlus />}
                 iconColor="purple"
                 />



               <StatCard 
               title="Total de tarefas"
               value={8}
               subtitle="+5 neste mês"
               subtitleColor="blue"
               icon={<ListTodo />}
               iconColor="green"
               />


                <StatCard title="Em progresso" 
                value={3}
                subtitle=""
                subtitleColor=""
                icon={<Clock />}
                iconColor="blue"
                />

                 <StatCard 
                 value={2}
                 title="Completados" 
                 subtitle="75% este mês"
                subtitleColor="orange"
                icon={<CheckCircle />}
                iconColor="orange"

                 />
            
          </div>



          <Client />

        </div>

      </div>
    
   </div>
  )
}

export default App
