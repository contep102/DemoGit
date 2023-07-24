import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipoppo elit",
  },
  {
    imgUrl: guideImg,
    title: " Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipoppo elit",
  },
  {
    imgUrl: customizationImg,
    title: "Custommization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipoppo elit",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
