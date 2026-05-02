
import { StatCard } from "./../StatCard"
import {  CheckCircle,UserPlus,ListTodo,Clock } from "lucide-react"



export function Dashboard(){
    return(
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



        

        </div>
    )
}