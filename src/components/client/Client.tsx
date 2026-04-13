
import { useState } from "react";

export function Client(){
    const[name, setName]= useState<string>("");
    const[email, setEmail]= useState<string>("");

   

    return(
        <div className="client-page">
            <h1>Client Page</h1>

            <div>
                <form className="client-form" style={{marginTop:"3rem"}}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={e=>setName(e.target.value)} type="text" id="name" placeholder="Enter client name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter client email" />
                    </div>
                </form>


                <div className="client-preview">
                    <h2>Client Preview</h2>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            </div>
        </div>
    )
}