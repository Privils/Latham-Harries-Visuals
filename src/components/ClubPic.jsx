import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const ClubPic = () => {
  return (
    <>
     <section className="clubs">
        <h1 className="intro text-center">Club photos</h1>
        <p className="text-center clubText">
       <span className='text-custom'> Dive</span> into the excitement of club life with the support of your <span className="text-custom">fellow members</span>. Capture the highlights of your journey <span className="text-custom">not only through photos </span> but also through compelling videos, showcasing the camaraderie and achievements that make your club <span className="text-custom">experience truly unforgettable</span>.

        </p>
        <div className="bg-red d-flex flex-wrap justify-content-around align-items-center">
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_7fb60e35f0ef457898afdc89b4727055~mv2.png/v1/crop/x_0,y_218,w_692,h_1012/fill/w_338,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/C2466T01_edited.png"
              alt=""
              className="clubImages"
            />
          </div>
          <div className="col-sm-3 stretch">
            <img
              src="https://static.wixstatic.com/media/933a77_d2387ecc6eb943c895e5ad14f8a199d5~mv2.jpg/v1/fill/w_769,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00405.jpg"
              alt=""
              className="clubImages clubImageStretch"
            />
          </div>
          <div className="col-sm-3 3rd">
            <img
              src="https://static.wixstatic.com/media/933a77_68e470c520954c37818718eb8936d778~mv2.jpg/v1/crop/x_0,y_89,w_720,h_1108/fill/w_313,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C2416T01.jpg"
              alt=""
              className="clubImages"
            />
          </div>
          <div className="col-sm-3 4th">
            <img
              src="https://static.wixstatic.com/media/933a77_0de0ca6e29204666b53eef1401017610~mv2.jpg/v1/crop/x_0,y_86,w_720,h_1108/fill/w_313,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C2435T01.jpg"
              alt=""
              className="clubImages"
            />
          </div>
          <div className="col-sm-3 stretch">
            <img
              src="https://static.wixstatic.com/media/933a77_d7d632ee8d484d4bbf14ac0a49b4b826~mv2.jpg/v1/fill/w_717,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00395.jpg"
              alt=""
              className="clubImages clubImageStretch"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://static.wixstatic.com/media/933a77_2d13aff1868e4ade8412aa7d9ef692d6~mv2.jpg/v1/crop/x_0,y_86,w_720,h_1108/fill/w_313,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C2469T01.jpg"
              alt=""
              className="clubImages"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ClubPic
