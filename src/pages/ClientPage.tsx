import { useState } from "react";
import DataPage, {Column} from "../components/DataPage";


interface Client{
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
}

interface ClientPageProps{
    clients?: Client[];
    onAdd?: (client: Client) => void;
}


export function ClientPage({clients, onAdd}: ClientPageProps){

    const[clientList, setClientsList] = useState<Client[]>([])

    const columns: Column<Client>[] = [
        {key: "name", label: "Name"},
        {key: "email", label: "Email"},
        {key: "phone", label: "Phone"},
        {key: "company", label: "Company"},
    ]
    return(
        <div className="client-page">
            <h1>Client Page</h1>
            <DataPage
                title="Clients"
                addLabel="Add Client"
                modalTitle="New Client"
                rows={clientList}
                columns={columns}
                searchKeys={["name", "email", "company"]}
                renderForm={(close)=><ClientForm onSubmit={()=>onAdd} onClose={close} />}
                
            />
        </div>
    )
}


 function ClientForm(props:{onSubmit: (client: Omit<Client,'id'>) => void, onClose: () => void}){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");


    function handleSubmit() {
    
        props.onSubmit({name, email, phone, company});
        props.onClose();

        console.log("Submitting client", {name, email, phone, company}  )
    }

    return(
        <form className="form" >

            <label className="form-field">
                <span>Name</span>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>

            <label className="form-field">
                <span>Email</span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>

            <label className="form-field">
                <span>Phone</span>
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
            </label>

            <label className="form-field">
                <span>Company</span>
                <input type="text" value={company} onChange={e => setCompany(e.target.value)} />
            </label>

            <div className="form-actions">
                <button type="button" onClick={props.onClose} className="btn-secondary">Cancelar</button>
                <button type="button" onClick={handleSubmit} className="btn-primary">Guardar</button>
                
            </div>

        </form>
    )

}
