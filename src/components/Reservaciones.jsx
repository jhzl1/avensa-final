import React from "react";
import { Tabs } from "antd";
import Vuelos from "./Vuelos";

const Reservaciones = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  /* ----------------------------------------------------------------*/

  return (
    <div id="reservaciones" data-aos="fade-up">
      <h2 className="text-center mb-3">
        Reservar <i className="far fa-paper-plane"></i>
      </h2>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <Tabs defaultActiveKey="1" onChange={callback} id="tab">
        <TabPane
          tab={
            <span>
              <i className="fas fa-plane"></i> Vuelos
            </span>
          }
          key="1"
        >
          <Vuelos />
        </TabPane>
        {/* ------------------------------------------------------------------------------------------------------------------- */}

        <TabPane
          tab={
            <span>
              <i className="fas fa-bed"></i> Hoteles
            </span>
          }
          key="2"
          disabled
        >
          Content of Tab Pane 2
        </TabPane>
        {/* ------------------------------------------------------------------------------------------------------------------- */}

        <TabPane
          tab={
            <span>
              <i className="fas fa-car-side"></i> Alquiler de vehículos
            </span>
          }
          key="3"
          disabled
        >
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Reservaciones;
