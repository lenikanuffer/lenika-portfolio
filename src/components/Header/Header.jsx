function Header () {
    return (
        <header className="h-15 flex main-font">
            <div className="flex my-5 mx-10 w-screen justify-between">
            <p>Lenika Nuffer</p>
            <nav>
                <ul className="flex gap-2 ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header