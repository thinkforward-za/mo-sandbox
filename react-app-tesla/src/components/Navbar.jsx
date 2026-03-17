const Navbar = () => {
    return (
        <header className="navbar">
            {/* Logo */}
            <img src="./images/tesla.svg" alt="tesla logo" className="h-6" />

            {/* Nav links */}
            <div className="hidden lg:block">
                <a href="#modelS" className="nav-link">
                    Model S
                </a>
                <a className="nav-link" href="#model3">
                    Model 3
                </a>
                <a className="nav-link" href="#modelX">
                    Model X
                </a>
                <a className="nav-link" href="#modelY">
                    Model Y
                </a>
                <a className="nav-link" href="#solarRoof">
                    Solar Roof
                </a>
                <a className="nav-link" href="#solarPanels">
                    Panels
                </a>
            </div>

            {/* Ext Links */}
            <div className="flex">
                <a className="nav-link hidden lg:block" href="#shop">
                    Shop
                </a>
                <a className="nav-link hidden lg:block" href="#account">
                    Account
                </a>
                <a className="nav-link" href="#menu">
                    Menu
                </a>
            </div>
        </header>
    );
};

export default Navbar;
