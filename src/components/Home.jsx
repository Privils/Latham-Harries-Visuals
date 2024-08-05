import React from "react";
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

const Home = () => {
  return (
    <>
      <div className="Imgcontainer">
        <img  
          src="https://static.wixstatic.com/media/933a77_a2da40e162714b0486817a20dde314d1~mv2.jpg"
          alt=""
          className="img"
        />
        <div className="imgContent container-fluid">
          <div className="intro-text">
            <h1 className="intro text-white">
              Welcome to Latham Harries Visuals
            </h1>
            <p className="italic text-white">
              Transforming moments into masterpieces.
            </p>
            <div className="intro-links">
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
      <section id="about">
        <h2 className="About">about</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
          <p className="services">my services</p>
          <div className="row">
            <div className="col-sm-6 videographyDiv">
              <p className="videography">
              <p className="text-white text-center serviceGraph">videography</p>
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
            <div className="col-sm-6 photographyDiv">
              <p className="photography">
              <p className="text-white text-center serviceGraph">photography</p>
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
        <div className="container" id="portfolio">
          <p className="services">
            <span className="services-span">
              Relive your past, present, and future through stunning photos and
              videos.
            </span>
            <br />
            Experience high-quality content that captures every moment.
          </p>
          <div className="row flex-wrap work-list">
            <div className="col-sm-6 work">
              <img
                src="https://static.wixstatic.com/media/933a77_d2387ecc6eb943c895e5ad14f8a199d5~mv2.jpg/v1/fill/w_769,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00405.jpg"
                alt=""
              />
              <div className="layer">
                <h3>clubs</h3>
                <Link to="../ClubPic">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 work">
              <img
                src="https://static.wixstatic.com/media/933a77_fab060747d514e2786af66dc33a16f53~mv2.jpg/v1/fill/w_536,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_fab060747d514e2786af66dc33a16f53~mv2.jpg"
                alt=""
              />
              <div className="layer">
                <h3>events</h3>
                <Link to="../Events">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 work">
              <img
                src="https://static.wixstatic.com/media/933a77_24cde6ff545e4fc6bbefae999d11f659~mv2.jpg/v1/fill/w_617,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_24cde6ff545e4fc6bbefae999d11f659~mv2.jpg"
                alt=""
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
        <h1 className="contact">Get in Touch</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
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
            <div class="col-sm-6">
              <form className="form">
                <label htmlFor="first-name">
                  First Name <br />
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                  />
                </label>
                <label htmlFor="last-name">
                  Last Name <br />
                  <input type="text" id="last-name" name="last-name" required />
                </label>
                <label htmlFor="email">
                  Email <br />
                  <input type="email" id="email" name="email" required />
                </label>
                <label htmlFor="phone">
                  Phone <br />
                  <input type="tel" id="phone" name="phone" required />
                </label>
                <p className="text-area-header">Leave a message</p>
                <textarea id="text-area" rows="5" cols="71"></textarea>
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
  );
};

export default Home;
