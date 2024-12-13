import { LinkedIn } from "../../assets/icons/icons";

function Footer () {
    return (
        <footer className="h-15 flex border-t-2">
            <div className="flex flex-col mx-10 w-screen gap-5 py-4">
            <p>Lenika Nuffer</p>
            <a href="http://www.linkedin.com/in/lenika-nuffer"><LinkedIn /></a>
            </ div>
            <div>
                <ul className="flex flex-col gap-2 ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
           
        </footer>
    )
}

export default Footer