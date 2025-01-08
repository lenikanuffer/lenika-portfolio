import { Link } from 'wouter';


function Header () {
    return (
        <header className='h-15 flex main-font'>
            <div className='flex my-5 mx-10 w-screen justify-between'>
            <p>Lenika Nuffer</p>
            <nav>
                <ul className='flex gap-2 '>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/About'> <li>About</li></Link>
                    <Link href='/Contact'><li>Contact</li></Link>
                </ul>
            </nav>
            </div>
        </header>
    )
} 

export default Header