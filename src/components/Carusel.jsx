import React from "react";
import { Carousel, Button } from "antd";
import { contentCarusel } from "./Data";

const Carusel = () => {
  console.log(contentCarusel);
  const contentStyle = {
    height: "25vh",
    color: "#fff",
  };
  return (
    <div id="carusel" className="my-5">
      <Carousel autoplay id="carusel-1">
        {contentCarusel.map((item) => (
          <div key={item.id} id={item.identifier} className="p-4">
            <div
              style={contentStyle}
              className="card-item d-flex flex-column flex-wrap p-2"
            >
              <h4 className="card-title my-1">{item.titulo}</h4>
              <span className="mb-2">{item.description}</span>
              <Button className="button-card align-self-start ">
                Ver más <i className="fas fa-chevron-right ml-2 " />
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carusel;
