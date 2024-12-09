import {Link} from 'wouter';

function StudyCases () {
    return (
      <>
      <div className="cases-main-container m-10 main-font">
        <div className="single-case ">
          <div className="single-case-content w-1/3 my-2 mx-3 flex flex-col gap-2">
          <p>2024</p>
          <h1 className="text-base">Buenamano website</h1>
          <p className="text-justify landing-bio">Buenamano is an author's ice-cream's factory in Pichilemu, Chile. This website aims to professionalize their image, providing detailed nutritional information to their clients, and easy contact channels for their partner distributors. </p>
          <Link href='/Buenamano'>
          <p className="blue-link">View case study</p>
          </Link>
          </div>
          <div >
            <img src="" alt="" className="placeholder" />
          </div>
        </div>
      </div>

<div className="cases-main-container m-10 main-font">
<div className="single-case ">
  <div className="single-case-content w-1/3 my-2 mx-3 flex flex-col gap-2">
  <p>2024</p>
  <h1 className="text-base">Space Help</h1>
  <p className="text-justify landing-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum error accusantium a alias repudiandae quia expedita nemo? Odio obcaecati placeat quaerat quam alias! Amet alias nulla accusamus distinctio quasi.</p>
  <Link href='/Spacehelp'>
          <p className="blue-link">View case study</p>
          </Link>
  </div>
  <div >
    <img src="" alt="" className="placeholder" />
  </div>
</div>
</div>

<div className="cases-main-container m-10 main-font">
<div className="single-case ">
  <div className="single-case-content w-1/3 my-2 mx-3 flex flex-col gap-2">
  <p>2024</p>
  <h1 className="text-base">Project name</h1>
  <p className="text-justify landing-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum error accusantium a alias repudiandae quia expedita nemo? Odio obcaecati placeat quaerat quam alias! Amet alias nulla accusamus distinctio quasi.</p>
  <p className="blue-link">View case study</p>
  </div>
  <div >
    <img src="" alt="" className="placeholder" />
  </div>
</div>
</div>

<div className="cases-main-container m-10 main-font">
<div className="single-case ">
  <div className="single-case-content w-1/3 my-2 mx-3 flex flex-col gap-2">
  <p>2024</p>
  <h1 className="text-base">Project name</h1>
  <p className="text-justify landing-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum error accusantium a alias repudiandae quia expedita nemo? Odio obcaecati placeat quaerat quam alias! Amet alias nulla accusamus distinctio quasi.</p>
  <p className="blue-link">View case study</p>
  </div>
  <div >
    <img src="" alt="" className="placeholder" />
  </div>
</div>
</div>
</>
    )
}

export default StudyCases