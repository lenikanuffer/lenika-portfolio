import { ArrowBack } from "../../assets/icons/icons";
import { Link } from "wouter";
function Buenamano () {
    return (
        <>
   <main className="hero-landing flex flex-col">
    <Link href="/" className='mx-10'><ArrowBack /></Link>
        <h1 className="landing-title mx-10 pt-10">
            Buenamano website
        </h1>
        <h2 className="ml-10 main-font">2024</h2>
        <p className="landing-bio main-font mx-10 pt-3 w-3/5 text-justify	">
         Buenamano is a small Author's ice cream factory located in Pichilemu, Chile. They offer original flavours inspired by regional products, and that adapt to a variaty of clients nutritional needs. They have succeed to partner with several local business who distribute their products.
         
        </p>
        <p className="mx-10 mb-10 pt-3 main-font">Roles: User Research, UX Designer, Frontend Devloper</p>
   </main>
    <section className="flex flex-col">
        <div className="content-box mx-10 my-5">
            <p>Problem</p>
            <p className="main-font w-2/3">Buenamano is a small business with online presence only trough social media (Instagram). They offer their products to two types of clients: people who visit their café, and distributors. For these reasons, their needs are: 
                <li>To professionalize their online presence, showcasing their product, values of the company, and story to possible partners.</li>
                <li>To offer detailed nutritional information to their clients, specially those allergies, or vegan, lactose free, sugar free or gluten free requirements.</li> 
                <li>To have a direct communication channel for B2B.</li>
                 </p>
        </div>
        <div className="content-box mx-10 my-5">
           <p> Key solutions</p>
           <ul className="main-font w-2/3">
            <li>Creation of a catalog of products, accessible from different components of the website. Each product card contains the list of ingredients, and icons to identify vegan, lactose free, sugar free and gluten free products. </li>
            <li>Icons identifying the use of regional ingredients, and brief description of the story/inspiration for the product.</li>
            <li>Special component dedicated to Hotels, Restaurants and Cafés, facilitating a direct and professional B2B communication.</li>
            <li>Showcase the story and values of the company, improving their online presence.</li>
           </ul>
        </div>
        <div className="content-box mx-10 my-5">
           <p> Features</p>
           <ul className="main-font">
            <li>Sketches</li>
            <li>Wireframes</li>
            <li>Mockups</li>
           </ul>
        </div>
        <div className="content-box mx-10 my-5 ">
            <p>Design concept</p>
            <p className="main-font w-2/3">
                The project aimed to maintain consistancy with the visual identity of the business promoted on their social media. The font and color palette were extracted from the logo. 
            </p>
        </div>
        <div className="content-box mx-10 my-5 w-2/3">
           <p>Reflection</p> 
           <p className="main-font w-2/3">
           This project has been hard coded and deployed as part of an experimentation face. It is crucial to implement an easy to use CMS to allow the business owners/ website administrators to upload new products, and to activate and deactivate stock. This will allowed them to reuse content, and to maintain an inventory of the flavours created during a period of time. Designwise, it is important to improve the accessibility of the website in terms of colors/contrast. </p>
        </div>
        <div className="content-box mx-10 my-5">
           <ul className="main-font">
            <a href="https://buenamanohelados.netlify.app/"><li className="blue-link ">Visit live project!</li></a>
            <a href="https://github.com/lenikanuffer/buena-mano/commits/dev"><li className="blue-link ">See project on GitHub</li></a>
           </ul>
        </div>

    </section>
</>
        
    )
}


export default Buenamano