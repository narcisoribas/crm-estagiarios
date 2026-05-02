import {Route, Routes} from 'react-router-dom';
import { ClientPage } from '../pages/ClientPage';
import { Dashboard } from '../components/dashboard/Dashboard';
import { Layout } from '../components/Layout';





export function AppRoutes(){
    return(
    
            <Routes>
                <Route path="/" element={<h1>LOGIN</h1>} />
                <Route path="/dashboard" element={<Layout  children={<Dashboard />} />} />
                <Route path="/clientes" element={<Layout  children={<ClientPage />} />} />
                <Route path="*" element={<Layout  children={<h1>Pagina nao encontrada</h1>} />} />
            </Routes>
        
    )
}