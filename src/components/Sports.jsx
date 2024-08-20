import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Video from "../components/Video";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sports = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const videoUrl = "https://www.youtube.com/watch?v=3XjICtvRCwA";
  return (
 <>
  
  <section
        className="clubs"
        data-aos="fade"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
      >
        <Link to="/Latham-Harries-Visuals">
        <FaHome className="FaHome"/>
        </Link>
       
        <h1 className="intro text-center" data-aos="zoom-in">
          sport photos
        </h1>
        <p className="text-center clubText" data-aos="zoom-in">
          Embrace living in <span className="text-custom">the moment </span>{" "}
          with the <span className="text-custom"> unwavering </span>support of
          your family by your side.{" "}
          <span className="text-custom">Capture each cherished </span> memory{" "}
          <span className="text-custom">not just in </span> photos, but in
          videos <span className="text-custom"> too,ensuring </span> you can
          always <span className="text-custom">reminisce </span> about your
          glory <span className="text-custom">days </span> with vivid{" "}
          <span className="text-custom">clarity.</span>
        </p>

        <div className="bg-red d-flex flex-wrap justify-content-around align-items-center">
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_83f68eeaa7714a2998e39bb41baeeca2~mv2.jpg/v1/fill/w_478,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_83f68eeaa7714a2998e39bb41baeeca2~mv2.jpg"
              alt=""
              className="clubImages img-fluid"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 stretch">
            <img
              src="https://static.wixstatic.com/media/933a77_4b70c5fb311f4b268682983c0fdc7338~mv2.jpg/v1/fill/w_536,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_4b70c5fb311f4b268682983c0fdc7338~mv2.jpg"
              alt=""
              className="clubImages img-fluid clubImageStretch"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 3rd">
            <img
              src="https://static.wixstatic.com/media/933a77_7304956f4825412bac0674c31cf1f318~mv2.jpg/v1/fill/w_533,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_7304956f4825412bac0674c31cf1f318~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 4th">
            <img
              src="https://static.wixstatic.com/media/933a77_c1fc2af911c247a8a1082286da5cad06~mv2.jpg/v1/fill/w_206,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_c1fc2af911c247a8a1082286da5cad06~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 stretch">
            <img
              src="https://static.wixstatic.com/media/933a77_24cde6ff545e4fc6bbefae999d11f659~mv2.jpg/v1/fill/w_617,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_24cde6ff545e4fc6bbefae999d11f659~mv2.jpg"
              alt=""
              className="clubImages img-fluid clubImageStretch"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_edcf205a35414e8c92d3ac6c67e3c551~mv2.jpg/v1/fill/w_206,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_edcf205a35414e8c92d3ac6c67e3c551~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_01d2342ab624483e8fce1b3d37e121be~mv2.jpg/v1/fill/w_256,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_01d2342ab624483e8fce1b3d37e121be~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>

          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_f98d8cfd8e974cf1ac85bf3831808fbb~mv2.jpg/v1/fill/w_387,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_f98d8cfd8e974cf1ac85bf3831808fbb~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_c370c78c04df44dfbabcb82de216574f~mv2.jpg/v1/fill/w_387,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_c370c78c04df44dfbabcb82de216574f~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Video videoUrl={videoUrl} allowFullScreen className="Video"/>
        </div>
      </div>
    </div>
 </>
  )
}

export default Sports
