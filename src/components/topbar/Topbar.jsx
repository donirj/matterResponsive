import './Topbar.css';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="assets\logo_william_ligth.png" alt="LOGO" />
                    </a>
                    <div className="itemContainer">
                        
                        <span>+51935995979</span>
                    </div>
                    <div className="itemContainer">
                        
                        <span>william_monroy777@hotmail.com</span>
                    </div>
                </div> 
                    
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
