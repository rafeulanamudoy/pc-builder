import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
const contentStyle = {
  background: "#364d79",
  width: "100vw",
  height: "700px", // Set the width of the container to 100vw
};
const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image
          style={contentStyle}
          src="https://i.ibb.co/XZmP9q0/seller-man-mobile-phone-professional-consultant-tech-store-shop.jpg"
          objectFit="cover"
          alt="Picture of the author"
          height={500}
          width={500}
        />
      </div>
      <div>
        <Image
          style={contentStyle}
          src="https://i.ibb.co/k6N1wjs/laptop-gc82e5ea51-1280.jpg"
          objectFit="cover"
          alt="Picture of the author"
          height={500}
          width={500}
        />
      </div>
      <div style={contentStyle}>
        <Image
          style={contentStyle}
          src="https://i.ibb.co/yY6Q14F/nobody-empty-call-center-workstation-with-computers-audio-instruments-no-people-customer-service-off.jpg"
          objectFit="cover"
          alt="Picture of the author"
          height={500}
          width={500}
        />
      </div>
    </Carousel>
  );
};

export default Banner;
