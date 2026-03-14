
import {Users, Settings2, Square, ListTodo,Briefcase} from "lucide-react"



export function Sidebar(){


    return(
      <aside className="sidebar">

        {/** logo section */}

        <div className="sidebar-logo">
            <div className="logo-icon"><Briefcase /></div>
            <span>Mini CRM</span>
        </div>

        {/*** NAVIGATION LINKS */}
         <ul className="sidebar-nav">
            <li>
                <a href="/dashboard">
                    <span className="nav-icon"><Square /></span>
                    Dashboard
                </a>
            </li>

            <li>
                <a href="/clients">
                    <span className="nav-icon"><Users /></span>
                    Clientes
                </a>
            </li>

            <li>
                <a href="/tasks">
                    <span className="nav-icon"><ListTodo /></span>
                    Tasks
                </a>
            </li>

            <li>
                <a href="/settings">
                    <span className="nav-icon"><Settings2 /></span>
                    Settings
                </a>
            </li>
         </ul>


         <div className="sidebar-user">
            <div className="user-avatar">NR</div>
            <div className="user-info">
                <span className="user-name">Narciso Ribas</span>
                <span className="user-email">narcisoribas@gmail.com</span>
            </div>

         </div>

      </aside>
    )

}