
import {Users, Settings2, Square, ListTodo,Briefcase} from "lucide-react"
import { Link } from "react-router-dom"


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
                <Link to="/dashboard">
                    <span className="nav-icon"><Square /></span>
                    Dashboard
                </Link>
            </li>

            <li>
                <Link to="/clientes">
                    <span className="nav-icon"><Users /></span>
                    Clientes
                </Link>
            </li>

            <li>
                <Link to="/tasks">
                    <span className="nav-icon"><ListTodo /></span>
                    Tasks
                </Link>
            </li>

            <li>
                <Link to="/settings">
                    <span className="nav-icon"><Settings2 /></span>
                    Settings
                </Link>
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