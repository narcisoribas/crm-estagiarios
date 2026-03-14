



export function TopBar(){


    return(
        <div className="topbar">
            <div className="topbar-title">
                <span>Dashboard</span>
            </div>


            {/** right side content  */}

            <div className="topbar-actions">
                <input
                type="text"
                className="search-input"
                placeholder="Search..."
                />

                <button className="topbar-icon-btn">
                    <span className="badge">badge</span>
                </button>

                <div className="topbar-avatar">NR</div>

            </div>





        </div>
    )
}