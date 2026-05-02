import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface LayoutProps {
    children: React.ReactNode;
}


export function Layout({children}: LayoutProps){
    return(
       <div className="app-layout" >
        {/** aqui vamos a sidebar */}

        <Sidebar />
      <div className="main-content">
        {/** aqui va el header */}
        <TopBar />

        {/** aqui va el contenido principal */}
   
      {children}

      </div>
    
   </div>
    )   
}