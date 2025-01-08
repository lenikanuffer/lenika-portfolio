import { LinkedIn } from '../../assets/icons/icons';
import { Link } from 'wouter';


function Footer () {
    return (
        <footer className='h-15 flex border-t-2'>
            <div className='flex flex-col mx-10 gap-5 py-4 w-1/5'>
            <p className='main-font'>Lenika Nuffer</p>
            <a href='http://www.linkedin.com/in/lenika-nuffer'><LinkedIn /></a>
            </ div>
            <div className='self-start'>
                <ul className='flex flex-col gap-2 main-font mt-4 '>
                    <Link href='/'><li>Home</li></Link>
                   <Link href='/About'> <li>About</li></Link>
                    <Link href='/Contact'><li>Contact</li></Link>
                </ul>
            </div>
           
        </footer>
    )
}

export default Footer