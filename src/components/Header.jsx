import '../App.css'
function Header() {
    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <img className="header-nav-img" src="../src/assets/globe.png" alt="Earth logo" />
                    <h1 className='header-nav-h1'>my travel journal</h1>
                </nav>
            </header>
        </>
    )
}
export default Header;