import {
  ArrowBack,
  GlutenFree,
  LactoseFree,
  SugarFree,
  Vegan,
  LocalIngredient,
} from "../../assets/icons/icons";
import { Link } from "wouter";
import NovaNitMockup from "/nova-nit-hero.png";
import LandingMock from "/Landing-cut.png";
import GetInvolved from "/Get-involved.png";
import ContactNova from "/Contact-us.png";
import ProductCard from "/product-card.png";
import ContactForm from "/contact-form.png";
import Sketch from "/sketch.jpg";
import Wireframe from "/Wireframe.png";
import MockUp from "/SingleProduct.png";
import Architecture from "/Flowchart.jpg";
import Concept from "/References.png";
import Mobile from "/file.png";
import Desktop from "/desktop.png";

function NovaNit() {
  return (
    <>
      <main className="hero-landing flex flex-col">
        <Link href="/" className="mx-10">
          <ArrowBack />
        </Link>
        <div className="hero-flex-box flex flex-col md:flex-row">
          <div className="inner-text-container md:w-3/5">
            <h1 className="landing-title mx-10 pt-10">Nova Nit website</h1>
            <h2 className="ml-10 main-font">2025</h2>
            <p className="landing-bio main-font mx-10 pt-3 text-justify">
              Nova Nit is a Montenegro-based NGO, dedicated to support local
              families with monthly care packages. Through this website we aim
              to visibilize their mission, and to facilitate communication with
              new donors, partners and volunteers.{" "}
            </p>
            <p className="mx-10 mb-10 pt-3 main-font">
              Roles: User Research, UX Designer
            </p>
          </div>
          <div className="inner-img-container w-64 self-center md:w-1/4 mx-10">
            <img src={NovaNitMockup} alt="Phone showing Buenamano website" />
          </div>
        </div>
      </main>

      <section className="flex flex-col">
        <div className="content-box mx-10 my-5">
          <h1 className="landing-title pb-2">Problem</h1>
          <p className="main-font md:w-2/3 text-justify">
            Nova Nit support families in Podgorica, Montenegro, providing them
            with fresh vegetables, non-perishables and toiletries. To mantain
            their work and expand their reach, they need new partners, donos and
            volunteer to contribute with resources, packing and delivery of care
            packages. For this reason, the main needs are:
            <li>
              To professionalize their online presence, showcasing their
              mission, values, and story to possible partners and volunteers.
            </li>
            <li>To improve and professionaliye communication channels.</li>
            <li>To make donations easy, encoraging participation.</li>
          </p>
        </div>
        <div className="content-box mx-10 my-5 flex flex-col">
          <div className="inner-text-container">
            <h1 className="landing-title pb-2"> Key solutions</h1>
            <div className="main-font md:w-2/3 text-justify">
              <li>
                Stablish a brand image that alignes with previous publications
                in social media. Create consistancy through a minimalistic
                design that allows the content to stand, specially sharing real
                images of volunteers.
              </li>
              <li>
                Design user flows that facilitate an easy transition from the
                landing page, into different user goals, whether is to donate o
                participate as volunteer.
              </li>
              <li>
                Create contact forms for direct communication, and modals for
                easy bank donations. These components are easy to reach through
                different parts of the website.
              </li>
              <li>
                Showcase current partners, adding value to their colaborations
                and fostering their promotion. Aim to encourage further
                partners.
              </li>
              <li>
                For this case, it was very important to create a trustworthy
                image that encourage first time or recurrent visitors to support
                the organization.
              </li>
            </div>
          </div>
          <div className="inner-imgs-container mx-5 md:ml-10 flex flex-col gap-10 my-10">
            <div className="landing-page-imgs flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={LandingMock}
                  alt="Landing page top"
                  className="rounded-xl fig"
                />
                <img
                  src={GetInvolved}
                  alt="Landing page center"
                  className="rounded-xl fig"
                />
                <img
                  src={ContactNova}
                  alt="Landing page bottom"
                  className="rounded-xl fig"
                />
              </div>
              <div>
                {" "}
                <p className="icon-description">
                  Landing page, Get involved and contact form in desktop format
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="content-box mx-10 my-5">
          <h1 className="landing-title pb-2"> Features</h1>
          <div className="web-architecture">
            <img
              src={Architecture}
              alt="Map of the website"
              className="md:w-4/6"
            />
            <p className="icon-description pt-4">Website architecture</p>
          </div>
        </div>
        <div className="content-box mx-10 my-5">
          <h1 className="landing-title pb-2">Design concept</h1>
          <p className="main-font md:w-2/3 text-justify">
            The project aimed to maintain consistancy with the visual identity
            of the business promoted on their social media. The font and color
            palette were extracted from the logo. Designed with mobile first
            principles, and a responsive interface for ipad and desktop users.
          </p>
          <div className="mockups-container flex-col md:flex-wrap">
            <div>
              <img
                src={Concept}
                alt="Logos, colors adn fonts of the website"
                className="md:h-96 rounded-xl pt-4"
              />
              <p className="icon-description pt-4">
                Color palette and fonts inspired in company's logo
              </p>
            </div>
            <div className="imgs-container flex flex-col md:flex-row gap-5 pt-5 items-center">
              <div>
                <img
                  src={Sketch}
                  alt="Sketch of the product page component"
                  className="rounded-xl fig2"
                />
                <p className="icon-description pt-4">Concept sketch</p>
              </div>
              <div>
                <img
                  src={Wireframe}
                  alt="Wireframe of the product page component"
                  className="rounded-xl fig2"
                />
                <p className="icon-description pt-4">Wireframe</p>
              </div>
              <div>
                <img
                  src={MockUp}
                  alt="Mockup Product page component"
                  className="rounded-xl fig2"
                />
                <p className="icon-description pt-4">Mockup</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 pt-4 items-center">
              <div>
                <img
                  src={Mobile}
                  alt="Mockup of the landing page, mobile layout"
                  className="fig rounded-xl"
                />
                <p className="icon-description pt-4">Mobile layout</p>
              </div>
              <div>
                <img
                  src={Desktop}
                  alt="Mockup of the landing page, desktop layout"
                  className="md:h-96 rounded-xl"
                />
                <p className="icon-description pt-4">Desktop layout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box mx-10 my-5">
          <h1 className="landing-title pb-2">Reflection</h1>
          <p className="main-font md:w-2/3 text-justify">
            The live version of this project was hardcoded as part of my UX/UI
            design - Frontend development program. Some design improvements are
            yet to be implemented. The next step is to integrate a headless
            Content Management System to allow the business owners to upload new
            content, and to activate and deactivate stock and partner's
            locations. Although the feedback from the shop owners is positive,
            it is necessary to test the intuitiveness and accessibility of the
            site with real clients, in order to identify further adjustments to
            achieve our goals.
            <br />
            *The content of the website has been translated to English to be
            presented in this porfolio. Original content is presented in
            Spanish.{" "}
          </p>
        </div>
        <div className="content-box mx-10 my-5">
          <ul className="main-font">
            <a href="https://buenamanohelados.netlify.app/">
              <li className="blue-link ">Visit live project!</li>
            </a>
            <a href="https://github.com/lenikanuffer/buena-mano/commits/dev">
              <li className="blue-link ">See project on GitHub</li>
            </a>
          </ul>
        </div> */}
      </section>
    </>
  );
}

export default NovaNit;
