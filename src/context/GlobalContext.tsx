import  {createContext, useState} from "react"
import type { ReactNode } from "react";
import type { Client } from "../models/Client";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";



interface props{
    children:ReactNode
}

interface globalContextProps{
    clients:Client[]
    setClients:(value:Client[])=>void;
    onAdd: (client: Omit<Client, "id">) => void;
    getClientes:()=>void
     login:(data:loginProps)=>void
}

interface loginProps{
    email:string
    password:string;
}




export const GlobalContext = createContext({} as globalContextProps);



export function GlobalContextProvider({children}:props){
    const navigate = useNavigate();

    const [clients, setClients] = useState<Client[]>([]);


     function onAdd(data:Omit<Client,'id'|'created_at'|'updated_at' >){
        
        api.post("/clientes",data)
        .then((res)=>{
            const copy =[...clients]
            if(res.data){
                 copy.push(res.data);
                 setClients(copy);
            }
           
            console.log(res);
        }).catch((err)=>{
            console.log(err)
        })
       

       

     
       

     }

     function getClientes(){
         api.get("/clientes")
         .then((res)=>{
            setClients(res.data || [])
         }).catch(err=>{
            console.log(err)
         })
     }

     function login(data:loginProps){
         navigate("/dashboard");
        api.post("/login",data)
        .then((res)=>{
            
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
     }

    return(
        <GlobalContext.Provider value={{
            clients,
            setClients, 
            onAdd,
             getClientes,
             login
             }}>
                {children}
        </GlobalContext.Provider>
    )
}