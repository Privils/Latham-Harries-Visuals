import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaExternalLinkAlt,
  FaCamera,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";

const Sports = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
 <>
   <section className="top">
        <div
          className="Imgcontainer"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
             
             <img
            src="https://static.wixstatic.com/media/933a77_a2da40e162714b0486817a20dde314d1~mv2.jpg"
            alt=""
            className="img img-fluid"
            loading="lazy"
          />


          <div
            className="imgContent"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="1500"
          >
            <div className="intro-text container-fluid">
              <h1 className="intro">Welcome to Latham Harries Visuals</h1>
              <p className="italic text-white">
                Transforming moments into masterpieces.
              </p>
              <div className="intro-links container">
                <button className="btn text-white">
                  <Link to="../Sports">Sports</Link>
                </button>
                <button className="btn text-white">
                  <Link to="../Events">events</Link>
                </button>
                <button className="btn text-white">
                  {" "}
                  <Link to="../ClubPic">club</Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <h2 className="About" data-aos="zoom-in">
          about
        </h2>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6"
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <p className="about-text">
                Hey there, I'm Latham Harris, a dedicated freelance videographer
                and photographer deeply passionate about capturing the essence
                of sports and events. Beyond simply recording visuals, I
                specialize in immortalizing the raw, unfiltered emotions that
                unfold in every moment. With a portfolio that has garnered over
                100,000 views on social media, I pride myself not just on
                storytelling but on curating genuine experiences. My commitment
                lies in steering clear of artificial emotions, always striving
                to deliver authentic content that resonates deeply with viewers.
                Whether freezing the intensity of a sports match or the candid
                joy of an event, my goal is to weave narratives that endure with
                sincerity and truthfulness.
              </p>
            </div>
            <div
              className="col-sm-6"
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                src="https://wallpapercave.com/wp/wp1809915.png"
                alt="image of latham"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <p
            className="services"
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="1100"
          >
            my services
          </p>
          <div className="row">
            <div
              className="col-sm-6 videographyDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="center"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <p className="videography">
                <p className="text-white text-center serviceGraph">
                  videography
                </p>
                <div className="iconDiv">
                  <FaCamera className="FaCamera" />
                </div>
                Welcome to a visual journey through my videography portfolio,
                where moments unfold into stories and emotions transcend frames.
                With a keen eye for detail and a passion for capturing
                authenticity, I specialize in transforming fleeting moments into
                timeless narratives. From intimate weddings to exhilarating
                travel adventures, each project is a canvas where light, motion,
                and human connection converge. My portfolio is a testament to
                the power of visual storytelling, showcasing not just events,
                but the essence of experiences. Whether you seek to relive
                cherished memories or embark on new visual adventures, my work
                invites you to immerse yourself in the beauty and emotion
                captured in every frame. Join me in discovering the magic of
                storytelling through the lens, where every video is a testament
                to the artistry of life itself.
              </p>
            </div>

            <div
              className="col-sm-6 photographyDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="center"
            >
              <p className="photography">
                <p className="text-white text-center serviceGraph">
                  photography
                </p>
                <div className="iconDiv">
                  <FaCamera className="FaCamera" />
                </div>
                Step into my photography portfolio, where moments are frozen in
                time, each frame telling a unique story of beauty, emotion, and
                depth. With a passion for capturing the essence of fleeting
                moments, I specialize in crafting images that resonate and
                endure. From vibrant landscapes to intimate portraits, my work
                celebrates the art of visual storytelling, inviting viewers to
                immerse themselves in the nuances of light, composition, and
                emotion. Whether documenting life's milestones or exploring the
                world through my lens, each photograph embodies a journey of
                discovery and connection. Explore my portfolio and experience
                the power of photography to evoke emotions, provoke thought, and
                inspire a deeper appreciation for the world around us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <p className="services" data-aos="zoom-in">
            <span className="services-span">
              Relive your past, present, and future through stunning photos and
              videos.
            </span>
            <br />
            Experience high-quality content that captures every moment.
          </p>
          <div className="row flex-wrap work-list">
            <div className="col-sm-6 work" data-aos="zoom-in">
              <img
                src="https://static.wixstatic.com/media/933a77_d2387ecc6eb943c895e5ad14f8a199d5~mv2.jpg/v1/fill/w_769,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00405.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="layer">
                <h3>clubs</h3>
                <Link to="../ClubPic">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 work" data-aos="zoom-in">
              <img
                src="https://static.wixstatic.com/media/933a77_fab060747d514e2786af66dc33a16f53~mv2.jpg/v1/fill/w_536,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_fab060747d514e2786af66dc33a16f53~mv2.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="layer">
                <h3>events</h3>
                <Link to="../Events">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 work" data-aos="zoom-in">
              <img
                src="https://static.wixstatic.com/media/933a77_24cde6ff545e4fc6bbefae999d11f659~mv2.jpg/v1/fill/w_617,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_24cde6ff545e4fc6bbefae999d11f659~mv2.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="layer">
                <h3>sports</h3>
                <Link to="../Sports">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1 className="contact" data-aos="fade-down">
          Get in Touch
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" data-aos="zoom-in-up">
              <p class="contact-info">
                <FaEnvelope className="net-Icons" />
                <Link to="Photography@lathamharris.com">
                  <span> Photography@lathamharris.com</span>
                </Link>
                <br />
                <FaPhone className="net-Icons" />
                <Link to="tel:+27622477319">
                  <span>+27 62 247 7319</span>
                </Link>

                <br />
                <FaInstagram className="net-Icons" />
                <Link
                  to="https://www.instagram.com/Latham._.Harris"
                  target="_blank"
                >
                  <span> Latham._.Harris</span>
                </Link>
              </p>
            </div>
            <div className="col-sm-6" data-aos="zoom-in-up">
              <form className="form">
                <label htmlFor="first-Name">
                  first name <br />
                  <input type="text" id="first-name" required />
                </label>
                <label htmlFor="last-name">
                  last name
                  <br />
                  <input type="text" id="last-name" name="last-name" required />
                </label>
                <label htmlFor="email">
                  {" "}
                  email
                  <br />
                  <input type="email" id="email" name="email" required />
                </label>
                <label htmlFor="phone">
                  phone
                  <br />
                  <input type="tel" id="phone" name="phone" required />
                </label>
                <label htmlFor="text-area">
                  Leave a message <br />
                  <textarea
                    class="form-control custom-textarea text-white"
                    id="responsiveTextarea"
                    rows="6"
                    cols="70"
                  ></textarea>
                </label>
                <div className="formBtn">
                  <button type="submit" className="fromBtn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
 </>
  )
}

export default Sports
