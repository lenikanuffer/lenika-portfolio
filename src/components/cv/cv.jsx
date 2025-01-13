import {
  Figma,
  Html,
  Css,
  React,
  JavaScript,
  Bootstrap,
  Vue,
  GitHub2,
} from "../../assets/icons/icons";
function Cv() {
  return (
    <>
      <section>
        <div className="cv-container md:w-3/5 mx-10 md:mx-20">
          <h1 className="landing-title py-10 ">Skills</h1>
          <div className="edu-container flex flex-col gap-5">
            <ul className="flex flex-wrap gap-5">
              <li className="flex">
                Figma <Figma />
              </li>
              <li className="flex">Adobe Photoshop</li>
              <li className="flex">Adobe InDesign</li>
              <li className="flex">Storybook</li>
              <li className="flex">
                HTML <Html />
              </li>
              <li className="flex">
                CSS <Css />
              </li>
              <li className="flex">
                React <React />
              </li>
              <li className="flex">
                JavaScript <JavaScript />
              </li>
              <li className="flex">Tailwinds CSS</li>
              <li className="flex">
                Bootstrap Framework <Bootstrap />
              </li>
              <li className="flex">
                Vue <Vue />
              </li>
              <li className="flex">Visual Studio Code</li>
              <li className="flex">
                GitHub <GitHub2 />
              </li>
            </ul>
          </div>
        </div>

        <div className="cv-container md:w-3/5 mx-10 md:mx-20">
          <h1 className="landing-title py-10 ">Education</h1>
          <div className="edu-container flex flex-col gap-5">
            <div className="edu-entry">
              <p>2024</p>
              <h1>UX/UI Engineering </h1>
              <p>Beam Institute of Technology - Berlin, Germany</p>
            </div>

            <div className="edu-entry">
              <p>2018 - 2022</p>
              <h1>
                Joint Master in Heritage Conservation and Site Management{" "}
              </h1>
              <p>
                Brandenburg University of Technology - Cottbus, Germany <br />{" "}
                Helwan University - Cairo, Egypt
              </p>
            </div>

            <div className="edu-entry">
              <p>2013 - 2014</p>
              <h1>Diploma in Digital photography </h1>
              <p>Universidad Mayor - Santiago, Chile</p>
            </div>

            <div className="edu-entry">
              <p>2008 - 2012</p>
              <h1>Bachelor of Fine Arts </h1>
              <p>Universidad de Chile - Santiago, Chile</p>
            </div>
          </div>
        </div>

        <div className="cv-container md:w-3/5 mx-10 md:mx-20">
          <h1 className="landing-title py-10 ">Experience</h1>
          <div className="edu-container flex flex-col gap-5">
            <div className="edu-entry">
              <p>2022 - 2023</p>
              <h1>Operations Manager </h1>
              <p>GreenCircle - Berlin, Germany</p>
            </div>

            <div className="edu-entry">
              <p>2020 - 2021</p>
              <h1>Academic Assistant (Graphic designer)</h1>
              <p>Brandenburg University of Technology - Remote, Germany</p>
            </div>

            <div className="edu-entry">
              <p>2014 - 2016</p>
              <h1>Career Break (Working Holiday)</h1>
              <p>New Zealand - Australia</p>
            </div>

            <div className="edu-entry">
              <p>2012 - 2014</p>
              <h1>Senior Publisher </h1>
              <p>Groupon Latam - Santiago, Chile</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cv;
