import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Video = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
 <>
  <section
        className="clubs"
        data-aos="fade-in"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
      >
          <Link to="/Latham-Harries-Visuals">
        <FaHome className="FaHome"/>
        </Link>
        <h1
          className="intro text-center"
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          Events photos
        </h1>
        <p
          className="text-center clubText"
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <span className="text-custom"> Experience </span>every moment of your{" "}
          <span className="text-custom"> event with the steadfast </span>{" "}
          support of your loved ones.{" "}
          <span className="text-custom"> Capture </span> Capture each special
          occasion not just <span className="text-custom">with photos </span>,
          but also<span className="text-custom"> with videos </span>, ensuring
          you can relive the{" "}
          <span className="text-custom">magic and memories </span> whenever{" "}
          <span className="text-custom"> you desire</span> .
        </p>
        <div className="bg-red d-flex flex-wrap justify-content-around align-items-center">
          <div className="col-sm-3 events">
            <img
              src="https://static.wixstatic.com/media/933a77_fab060747d514e2786af66dc33a16f53~mv2.jpg/v1/fill/w_536,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_fab060747d514e2786af66dc33a16f53~mv2.jpg"
              alt=""
              className="clubImages img-fluid eventsImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 events">
            <img
              src="https://static.wixstatic.com/media/933a77_2424479764854fd185f5a85c4c1fe573~mv2.jpg/v1/fill/w_206,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_2424479764854fd185f5a85c4c1fe573~mv2.jpg"
              alt=""
              className="clubImages img-fluid"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 events">
            <img
              src="https://static.wixstatic.com/media/933a77_2052e5d9a48d45d6a908145cdfbddd63~mv2.jpg/v1/fill/w_533,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_2052e5d9a48d45d6a908145cdfbddd63~mv2.jpg"
              alt=""
              className="clubImages img-fluid eventsImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 4th">
            <img
              src="https://static.wixstatic.com/media/933a77_b2eba5011b0d46dba843a74650105626~mv2.jpg/v1/fill/w_206,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_b2eba5011b0d46dba843a74650105626~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 events">
            <img
              src="https://static.wixstatic.com/media/933a77_692c25d4bddc40b8b27185ad52e6b191~mv2.jpg/v1/fill/w_980,h_513,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/933a77_692c25d4bddc40b8b27185ad52e6b191~mv2.jpg"
              alt=""
              className="clubImages img-fluid eventsImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3 events">
            <img
              src="https://static.wixstatic.com/media/933a77_759cef184e5d43da84c540e544482265~mv2.jpg/v1/fill/w_404,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_759cef184e5d43da84c540e544482265~mv2.jpg"
              alt=""
              className="clubImages img-fluid eventsImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_c0f09363efe34129a285ddaa3bdc65e3~mv2.jpg/v1/fill/w_617,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/933a77_c0f09363efe34129a285ddaa3bdc65e3~mv2.jpg"
              alt=""
              className="clubImages"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
 </>
  )
}

export default Video
