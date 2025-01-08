import { LinkedIn, GitHub, Xing, Email } from "../../assets/icons/icons";
function Contact () {
    return (
        <>
   <main className="hero-landing flex flex-col contact-hero">
        <h1 className="landing-title mx-10 pt-10">
         Contact me        </h1>
         <div className="mx-10 flex flex-col pt-5">

        <div className="flex flex-col gap-5">
        <div className="contact-links flex gap-5"><Email />nufferlenika@gmail.com</div>

       <div className="contact-links flex gap-5"> <a href="http://www.linkedin.com/in/lenika-nuffer"><LinkedIn /></a><a href="http://www.linkedin.com/in/lenika-nuffer cla">LinkedIn profile</a></div>
       <div className="contact-links flex gap-5"> <a href="https://github.com/lenikanuffer"><GitHub/> </a> <a href="https://github.com/lenikanuffer"> GitHub profile</a></div>
       <div className="contact-links flex gap-5"> <a href="https://www.xing.com/profile/Lenika_Nuffer/web_profiles?sc_o=navigation_profile_icon&sc_o_PropActionOrigin=navigation_neffi_50&expandNeffi=true"><Xing/> </a> <a href="https://www.xing.com/profile/Lenika_Nuffer/web_profiles?sc_o=navigation_profile_icon&sc_o_PropActionOrigin=navigation_neffi_50&expandNeffi=true"> Xing profile</a></div>
        </div>
        </div>
        
   </main>
</>
        
    )
}


export default Contact