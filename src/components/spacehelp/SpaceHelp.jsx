import { ArrowBack } from '../../assets/icons/icons';
import { Link } from 'wouter';
import SpacehelpMockup from '/Space-hero.png';
import SpaceLanding from '/SpaceLanding.png';
import SingleChallenge from '/single-challenge.png';
import Progress from '/Progress.png';
import SpaceConcept from '/Spacehelp-concept.png';
import ChallengeInitial from '/challenge-initial.png';
import ChallengeCompleted from '/challenge-completed.png';
import ItemInitial from '/item-initial.png';
import ItemRecycle from '/item-recycle.png';
import ItemDonate from '/item-donate.png';
import ItemSell from '/item-sell.png';

function SpaceHelp () {
    return (
        <>
   <main className='hero-landing flex flex-col'>
    <Link href='/' className='mx-10'><ArrowBack /></Link>
    <div className='hero-flex-box flex flex-col md:flex-row'>
    <div className='inner-text-container md:w-3/5'>
        <h1 className='landing-title mx-10 pt-10'>
            Space Help
        </h1>
        <h2 className='ml-10 main-font'>2024</h2>
        <p className='landing-bio main-font mx-10 pt-3 text-justify	'>
        Space Help is a decluttering assistant designed to help people clean their spaces. Inspired by different decluttering methods, this app turns this process into small daily challenges, helping to turn this overwhelming task into a sustainable and fun habit.        </p>
        <p className='mx-10 mb-10 pt-3 main-font'>Roles: User Research, UX Designer, Frontend Devloper, Illustrator</p>
        </div>
        <div className='inner-img-container w-64 self-center md:w-1/4 mx-10'>
       <img src={SpacehelpMockup} alt='Phone showing Buenamano website'/>
        </div>
        </div>
   </main>

    <section className='flex flex-col'>
        <div className='content-box mx-10 my-5'>
            <h1 className='landing-title pb-2'>Problem</h1>
            <p className='main-font md:w-2/3 text-justify'>Many people approach decluttering as a one-time big task, making this process overwhelming. Space Help was created to help users change this idea, and to think of decluttering as a process, integrating it into their habits. Inspired by different methods, such as the '30 day minimalism challenge', Space Help encourages users to tackle their space into small areas, completing daily decluttering challenges while tracking their total progress.</p>
        </div>
        <div className='content-box mx-10 my-5 flex flex-col'>
            <div className='inner-text-container'>
           <h1 className='landing-title pb-2'> Key solutions</h1>
           <div className='main-font md:w-2/3 text-justify'>
            <li>The division of the decluttering process into 15 daily challenges, each containing a number of items to eliminate, from 1 to 15. By completing these small tasks, the user can remove a total of 120 objects from their spaces. </li>
            <li>Each challenge contains illustrations representing the number of items to eliminate. The user can select if the item will be recycled, donated, or sold by clicking on each illustration. </li>
            <li>The progress is recorded on the local storage, and displayed on the progress component. The user can visualize the number of challenges completed, the total of articles eliminated, and the percentage of recycled, donated, and sold items.</li>
           </div>
           </div>
           <div className='inner-imgs-container mx-5 md:ml-10 flex flex-col gap-10 my-10'>
            <div className='landing-page-imgs flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-4'>
            <div className='single-screen'>
                <img src={SpaceLanding} alt='Space Help landing page' className='rounded-xl fig' />
                <p className='icon-description pt-4'>Landing page with 15 challenges</p>
                </div>
                <div className='single-screen'>
                <img src={SingleChallenge} alt='Space Help single day challenge' className='rounded-xl fig'/> 
                <p className='icon-description pt-4'>Single challenge and different states</p>
                </div>
                <div className='single-screen'>
                <img src={Progress} alt='Space Help progress component' className='rounded-xl fig'/>
                <p className='icon-description pt-4'>Progress component</p>
                </div>
                </div>
              </div>
           </div>
        </div>

        {/* <div className="content-box mx-10 my-5">
           <h1 className="landing-title pb-2"> Features</h1>
           <div className="web-architecture">
           <img src={Architecture} alt=""  className="w-4/6"/>
           <p className="icon-description pt-4">Website architecture</p>
           </div>
           <div className="imgs-container flex gap-5 pt-5">
           <div>
            <img src={Sketch} alt="" className="rounded-xl fig2" />
            <p className="icon-description pt-4">Concept sketch</p>
           </div>
           <div>
            <img src={Wireframe} alt="" className="rounded-xl fig2"/>
            <p className="icon-description pt-4">Wireframe</p>
           </div>
           <div>
            <img src={MockUp} alt="" className="rounded-xl fig2"/>
            <p className="icon-description pt-4">Mockup</p>
           </div>
           </div>
        </div> */}

        <div className='content-box mx-10 my-5'>
            <h1 className='landing-title pb-2'>Design concept</h1>
            <p className='main-font md:w-2/3 text-justify'>
                The purpose of this app is to create a fun game-like interface that plays with the idea of space (as in having more space after decluttering), and the space in the galaxy. For this reason, all illustrations follow this line, with meteors, aliens, satellites, and rockets showing the different states of the challenges and items. The interface was designed to be responsive, adapting to mobile and desktop formats. In the live version, all icons are animated and reproduce sound to give feedback to the user.
            </p>
            <div className='mockups-container flex flex-col md:flex-wrap'>
            <div>
                <img src={SpaceConcept} alt='Colors and fonts' className='md:h-72 rounded-xl pt-4' /> 
                <p className='icon-description pt-4'>Color palette inspired in various galaxy illustrations and images</p>
            </div>
            <div className='all-icons-container flex flex-col md:flex-row gap-5 pt-4'>
                <div className='ufo-icons-container flex flex-col'>
            <div className='flex'>
            <img src={ChallengeInitial} alt='Challenge icon initial state' className='h-36' />
            <img src={ChallengeCompleted} alt='Challenge icon completed state' className='h-36' />
            </div>
            <p className='icon-description pt-4'>Icons representing challenges in initial and completed state.</p>
            </div>
            <div className='flex flex-col'>
            <div className='icons-container flex flex-wrap'>
            <img src={ItemInitial} alt='item icon initial state' className='h-36'/>
            <img src={ItemRecycle} alt='item icon recycle state' className='h-36'/>
            <img src={ItemDonate} alt='item icon donate state' className='h-36'/>
            <img src={ItemSell} alt='item icon sell state' className='h-36'/>
            </div>
            <p className="icon-description pt-4">Icons representing each item and their state: initial, recycle, donate and sell</p>
            </div>
            </div>
            </div>
        </div>
        <div className='content-box mx-10 my-5'>
           <h1 className='landing-title pb-2'>Reflection</h1> 
           <p className='main-font md:w-2/3 text-justify'>
           This single-page application was created to show versatility in my portfolio, prioritizing the interactivity and functionality of the different components during the development of the project. In this context, some features tough to provide a more intuitive user experience have not been completed, providing instead the instructions and tips components. Therefore, the user is required to learn how to use the product. Mentioned components could be replaced with new features that guide the user on their journey, such as modals, audio, or animations. </p>
        </div>
        <div className='content-box mx-10 my-5'>
           <ul className='main-font'>
            <a href='https://spacehelp.netlify.app/'><li className='blue-link '>Visit live project!</li></a>
            <a href='https://github.com/lenikanuffer/Space-Help_app'><li className='blue-link '>See project on GitHub</li></a>
           </ul>
        </div>

    </section>
</>
        
    )
}


export default SpaceHelp