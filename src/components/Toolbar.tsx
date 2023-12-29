import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Pizza</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Toolbar;