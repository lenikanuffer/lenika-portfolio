import { ArrowBack, GlutenFree, LactoseFree, SugarFree, Vegan, LocalIngredient } from '../../assets/icons/icons';
import { Link } from 'wouter';
import BuenamanoMockUp from '/Buenamano-hero.png';
import ProductCard from '/product-card.png';
import HeroScreen from '/hero-screen.png';
import AboutScreen from '/about-screen.png';
import LocalsScreen from '/locals-screen.png';
import ContactForm from '/contact-form.png';
import Sketch from '/sketch.jpg';
import Wireframe from '/Wireframe.png';
import MockUp from '/SingleProduct.png';
import Architecture from '/Flowchart.jpg';
import Concept from '/References.png';
import Mobile from '/file.png';
import Desktop from '/desktop.png';

function Buenamano () {
    return (
        <>
   <main className='hero-landing flex flex-col'>
    <Link href='/' className='mx-10'><ArrowBack /></Link>
    <div className='hero-flex-box flex flex-col md:flex-row'>
    <div className='inner-text-container md:w-3/5'>
        <h1 className='landing-title mx-10 pt-10'>
            Buenamano website
        </h1>
        <h2 className='ml-10 main-font'>2024</h2>
        <p className='landing-bio main-font mx-10 pt-3 text-justify'>
         Buenamano is a small Author's ice cream factory located in Pichilemu, Chile. They offer original flavours inspired by regional products, and that adapt to a variaty of clients nutritional needs. They have succeed to partner with several local business who distribute their products.
        </p>
        <p className='mx-10 mb-10 pt-3 main-font'>Roles: User Research, UX Designer, Frontend Devloper</p>
        </div>
        <div className='inner-img-container w-64 self-center md:w-1/4 mx-10'>
       <img src={BuenamanoMockUp} alt='Phone showing Buenamano website'/>
        </div>
        </div>
   </main>

    <section className='flex flex-col'>
        <div className='content-box mx-10 my-5'>
            <h1 className='landing-title pb-2'>Problem</h1>
            <p className='main-font md:w-2/3 text-justify'>Buenamano is a small business with online presence trough social media (Instagram). They offer their products to two types of clients: people who visit their café, and distributors. We identified as main needs for this customer: 
                <li>To professionalize their online presence, showcasing their product, values, and story to possible partners and clients.</li>
                <li>To offer detailed nutritional information to their clients, specially those with allergies, vegan, lactose free, sugar free or gluten free nutritional requirements.</li> 
                <li>To have a direct B2B communication channel.</li>
                 </p>
        </div>
        <div className='content-box mx-10 my-5 flex flex-col'>
            <div className='inner-text-container'>
           <h1 className='landing-title pb-2'> Key solutions</h1>
           <div className='main-font md:w-2/3 text-justify'>
            <li>The creation of a catalog of products, accessible from different components of the website. Each product card contains the list of ingredients, and icons to identify vegan, lactose free, sugar free and gluten free products. </li>
            <li>Icons identifying the use of regional ingredients, and brief description of the story/inspiration for the product.</li>
            <li>Special component dedicated to Hotels, Restaurants and Cafés, facilitating a direct and professional B2B communication.</li>
            <li>Showcase the story and values of the company, improving their online presence.</li>
           </div>
           </div>
           <div className='inner-imgs-container mx-5 md:ml-10 flex flex-col gap-10 my-10'>
            <div className='landing-page-imgs flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row gap-4'>
                <img src={HeroScreen} alt='Landing page top' className='rounded-xl fig' />
                <img src={LocalsScreen} alt='Landing page center' className='rounded-xl fig'/>
                <img src={AboutScreen} alt='Landing page bottom' className='rounded-xl fig'/>
                </div>
              <div> <p className='icon-description'>Landing page - mobile first design</p></div>
              </div>
            
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='product-card-container flex flex-col'>
                    <div className='flex flex-col md:flex-row gap-5 pb-4'>
            <img src={ProductCard} alt='Product card mockup' className='rounded-xl mb-5 fig' />
            <div className='food-icons flex flex-col gap-2'>
                <div className='icon-description flex gap-2 text-justify'> <GlutenFree /> 
                <p>GLUTEN FREE</p></div>
                <div className='icon-description flex gap-2'> <LactoseFree /> 
                <p>LACTOSE FREE</p></div>
                <div className='icon-description flex gap-2'> <SugarFree /> 
                <p>SUGAR FREE</p></div>
                <div className='icon-description flex gap-2'>  <Vegan />
                <p>VEGAN</p></div>
                <div className='icon-description flex gap-2'>  <LocalIngredient />
                <p>LOCAL INGREDIENTS</p></div>
            </div>
            </div>
            <div>
                <p className='icon-description'>Product card and food icons</p>
            </div>
            </div>
            <div className='contact-container flex flex-col gap-5'>
                <img src={ContactForm} alt='Contact from mockup' className='rounded-xl fig'/>
                <p className='icon-description'>B2B contact form</p>
            </div>
            </div>
           </div>
        </div>
        <div className='content-box mx-10 my-5'>
           <h1 className='landing-title pb-2'> Features</h1>
           <div className='web-architecture'>
           <img src={Architecture} alt='Map of the website' className='md:w-4/6'/>
           <p className='icon-description pt-4'>Website architecture</p>
           </div>
        </div>
        <div className='content-box mx-10 my-5'>
            <h1 className='landing-title pb-2'>Design concept</h1>
            <p className='main-font md:w-2/3 text-justify'>
                The project aimed to maintain consistancy with the visual identity of the business promoted on their social media. The font and color palette were extracted from the logo.
                Designed with mobile first principles, and a responsive interface for ipad and desktop users. 
            </p>
            <div className='mockups-container flex-col md:flex-wrap'>
            <div>
                <img src={Concept} alt='Logos, colors adn fonts of the website' className='md:h-96 rounded-xl pt-4' /> 
                <p className='icon-description pt-4'>Color palette and fonts inspired in company's logo</p>
            </div>
            <div className='imgs-container flex flex-col md:flex-row gap-5 pt-5 items-center'>
           <div>
            <img src={Sketch} alt='Sketch of the product page component' className='rounded-xl fig2' />
            <p className='icon-description pt-4'>Concept sketch</p>
           </div>
           <div>
            <img src={Wireframe} alt='Wireframe of the product page component' className='rounded-xl fig2'/>
            <p className='icon-description pt-4'>Wireframe</p>
           </div>
           <div>
            <img src={MockUp} alt='Mockup Product page component' className='rounded-xl fig2'/>
            <p className='icon-description pt-4'>Mockup</p>
           </div>
           </div>
            <div className='flex flex-col md:flex-row gap-5 pt-4 items-center'>
                <div>
            <img src={Mobile} alt='Mockup of the landing page, mobile layout' className='fig rounded-xl' />
            <p className='icon-description pt-4'>Mobile layout</p>
            </div>
            <div>
            <img src={Desktop} alt='Mockup of the landing page, desktop layout' className='md:h-96 rounded-xl'/>
            <p className='icon-description pt-4'>Desktop layout</p>
            </div>
            </div>
            </div>
            
        </div>
        <div className='content-box mx-10 my-5'>
           <h1 className='landing-title pb-2'>Reflection</h1> 
           <p className='main-font md:w-2/3 text-justify'>
           The live version of this project was hardcoded as part of my UX/UI design - Frontend development program. Some design improvements are yet to be implemented. The next step is to integrate a headless Content Management System to allow the business owners to upload new content, and to activate and deactivate stock and partner's locations. Although the feedback from the shop owners is positive, it is necessary to test the intuitiveness and accessibility of the site with real clients, in order to identify further adjustments to achieve our goals.
 <br />*The content of the website has been translated to English to be presented in this porfolio. Original content is presented in Spanish.  </p>
        </div>
        <div className='content-box mx-10 my-5'>
           <ul className='main-font'>
            <a href='https://buenamanohelados.netlify.app/'><li className='blue-link '>Visit live project!</li></a>
            <a href='https://github.com/lenikanuffer/buena-mano/commits/dev'><li className='blue-link '>See project on GitHub</li></a>
           </ul>
        </div>

    </section>
</>
        
    )
}


export default Buenamano