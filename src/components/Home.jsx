import React from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import video from "../video/vid-1.mp4";

const Home = () => {
  return (
    <MDBRow className="mt-4 m-3" style={{ heigth: "20rem" }}>
      <MDBCol lg={4} md={12} className="mb-4  mb-lg-0">
        <img
          src="https://yunti.files.wordpress.com/2016/09/manzara_12_tam35-blogspot-com.jpg"
          className="w-100 h-25 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src="https://e0.pxfuel.com/wallpapers/421/787/desktop-wallpaper-nature-vertical.jpg"
          className="w-100 shadow-1-strong rounded mb-4 h-50"
          alt="Wintry Mountain Landscape"
          style={{
            objectFit: "cover",
          }}
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src="https://www.gergitavan.net/wp-content/uploads/2019/01/S-657031267.jpg"
          className="w-100 shadow-1-strong rounded mb-4 h-50"
          alt="Mountains in the Clouds"
          style={{
            objectFit: "cover",
          }}
        />
        <video
          width="430px"
          height=""
          className="rounded-5 h-25 pe-3"
          controls="controls"
          style={{
            objectFit: "cover",
          }}
        >
          <source src={video} type="video/mp4" loading="lazy" />
        </video>
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src="https://3.bp.blogspot.com/-l5cGkB08xkw/V26IckejunI/AAAAAAAAlxo/W_WGgCIYbX4m4QUx7ZHTi0Kx7dhZ4mo-wCLcB/s1600/Balon.jpg"
          className="w-100 h-25  shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src="https://www.gergitavan.net/wp-content/uploads/2019/01/S-744253354.jpg"
          className="w-100 shadow-1-strong rounded mb-4 h-50"
          alt="Yosemite National Park"
          style={{
            objectFit: "cover",
          }}
        />
      </MDBCol>
    </MDBRow>
  );
};

export default Home;
