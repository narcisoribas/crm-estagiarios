import type { ReactNode } from "react";


interface statCardProps{
    title:string;
    value:number;
    icon:ReactNode;
    subtitle:string;
    subtitleColor:string;
    iconColor:string;
}

export function StatCard({
    title, 
    value, 
    icon,
    subtitle, 
    subtitleColor,
    iconColor
    }:statCardProps){


    return(
        <div className="stat-card">
            
            <div className="stat-info">
                <h3>{title}</h3>
                <div className="stat-number">{value}</div>
                <div className={`stat-sub ${subtitleColor}`} >
                    {subtitle}
                </div>
            </div>


            <div className={`stat-icon ${iconColor}`} >
                {icon}
            </div>


        </div>
    )
}