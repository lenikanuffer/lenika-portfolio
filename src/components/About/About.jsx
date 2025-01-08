import ProfilePhoto from '/lenikanuffer1.png';
function About () {
    return (
        <>
   <main className='hero-landing flex flex-col md:flex-row'>
    <div className='bio-container md:w-3/5'>
        <h1 className='landing-title  mx-10 md:mx-20 pt-10'>
            Nice to meet you!
        </h1>
        <p className='landing-bio main-font mx-10 md:mx-20 pt-3 text-justify'>
       

I’m an aspiring UX/UI Designer and Frontend Developer who recently graduated from a UX/UI Engineering program in Berlin. I’m actively seeking junior positions or internships to help launch my career in tech.
<br />
<br />
I am originally from Chile, where I started my journey in the field of fine arts. During my studies, I developed expertise in color theory, composition, semiotics, and aesthetics, skills  I applied in my first projects in painting, printmaking, and especially installation. I was driven by a passion for communicating, storytelling, and triggering people's imagination through my work.
<br /><br /> 

After graduating and working in a major e-commerce company for two years, I decided to pursue my childhood dream of traveling. I lived in New Zealand and Australia, where I learned a new language, met incredible people, and worked across industries like hospitality, agriculture, textile production, and other fun jobs that taught me to be resilient, humble and perseverant. They also allowed me to continue traveling :)
<br /><br />

Inspired by these experiences, I moved to Germany in 2018 to study Heritage Site Management. My training granted me skills to analyze places of cultural significance, and to create educational plans, exhibitions, and infrastructure to connect such places to the users, communicating their importance and meaning. 

Last year, I finally had the chance to follow a long-term goal of expanding my digital knowledge. While I expected to dive into something completely unfamiliar, I found myself being able to leverage a wide range of my abilities, combining my artistic background, research and management skills, and methodical, organized and result-driven character. <br /><br />

I'm passionate about joining a purpose-driven company where I can continue to grow, collaborate, and contribute to projects that align with my values. My goal is to learn, innovate, and create digital experiences that leave a lasting impact. 
        </p>
        <a href='http://www.linkedin.com/in/lenika-nuffer'><p className='blue-link mx-10 md:mx-20 md:mb-10 pt-3'>Let's connect!</p></a>
        </div>
        <div className='bio-img md:w-2/5'>
            <img src={ProfilePhoto} alt='Profile picture' className='rounded-full mb-10' />
        </div>
   </main>
</>
        
    )
}


export default About