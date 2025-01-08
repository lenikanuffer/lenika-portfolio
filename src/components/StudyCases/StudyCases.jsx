import {Link} from 'wouter';
import Buenamano from '/Buenamano-hero.png';
import Spacehelp from '/Space-hero.png';

function StudyCases () {
    return (
      <>
      <div className='cases-main-container m-10 main-font'>
        <div className='single-case flex flex-col md:flex-row '>
          <div className='single-case-content w-fit md:w-2/5 my-5 mx-8 flex flex-col gap-2 '>
          <p>2024</p>
          <h1 className='main-font'>Buenamano website</h1>
          <p className='text-justify landing-bio'>Buenamano is an author's ice-cream's factory in Pichilemu, Chile. This website aims to professionalize their image, providing detailed nutritional information to their clients, and easy contact channels for their partner distributors. </p>
          <Link href='/Buenamano'>
          <p className='blue-link'>View case study</p>
          </Link>
          </div>
          <div className='h-auto flex justify-center md:w-3/5'>
            <img src={Buenamano} alt='Mockup displayed in mobile phone'className='placeholder h-64 mt-5'/>
          </div>
        </div>
      </div>

      <div className='cases-main-container m-10 main-font'>
        <div className='single-case flex flex-col md:flex-row '>
          <div className='single-case-content w-fit md:w-2/5 my-5 mx-8 flex flex-col gap-2  '>
          <p>2024</p>
          <h1 className='main-font'>Space Help</h1>
          <p className='text-justify landing-bio'>Space Help is an interactive decluttering assistant created to gamify cleaning chores. </p>
          <Link href='/Spacehelp'>
          <p className='blue-link'>View case study</p>
          </Link>
          </div>
          <div className='h-auto flex md:w-3/5 justify-center'>
            <img src={Spacehelp} alt='Mockup displayed in mobile phone' className='placeholder h-64 mt-5' />
          </div>
        </div>
      </div>



</>
    )
}

export default StudyCases