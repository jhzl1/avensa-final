import React from "react";
import { Switch, DatePicker } from "antd";
import { Dropdown } from "primereact/dropdown";
import { classes, numeroPasajeros, Destinos } from "./Data";
import { firebase } from "./Firebase";

const Vuelos = () => {
  const [ida, setIda] = React.useState(false);
  const [fecha, setFecha] = React.useState([]);
  const [vuelos, setVuelos] = React.useState({
    from: null,
    to: null,
    passengers: null,
    class: null,
  });

  const handleChangeVuelo = (key, value) => {
    setVuelos({
      ...vuelos,
      [key]: value,
    });
  };

  const onChange = (e, dateString) => {
    setFecha(dateString);
    console.log(fecha.length);
    console.log(vuelos.length);
  };

  const guardarDatos = async (e) => {
    e.preventDefault();

    try {
      const db = firebase.firestore();
      const formularioEnviado = {
        datosUno: vuelos,
        datosFecha: fecha,
      };
      const data = await db.collection("formularios").add(formularioEnviado);

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setVuelos("");
    setFecha([]);
  };
  /**----------------------------------------------------------------------------------------------------------------------------------------------- */
  const { RangePicker } = DatePicker;
  const dateFormat = "DD/MM/YYYY";

  /** --------------------------------------------------------------------------------------------------------------------------------------------- */
  const groupedItemTemplate = (option) => {
    return (
      <div className="d-flex">
        <div
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag mr-2 flag-${option.code.toLowerCase()}`}
        />
        <div />
        <div>{option.label}</div>
      </div>
    );
  };

  return (
    <form id="form-vuelos" onSubmit={guardarDatos}>
      <span className="d-flex flex-column">
        <label>
          <h4>Desde</h4>
        </label>{" "}
        <Dropdown
          value={vuelos.from}
          options={Destinos}
          onChange={(e) => handleChangeVuelo("from", e.value)}
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          optionGroupTemplate={groupedItemTemplate}
        />
      </span>

      {/* ------------------------------------------------------------------------------------------------------------------- */}
      <span className="d-flex flex-column">
        <label>
          <h4>Hasta</h4>{" "}
        </label>{" "}
        <Dropdown
          value={vuelos.to}
          options={Destinos}
          onChange={(e) => handleChangeVuelo("to", e.value)}
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          optionGroupTemplate={groupedItemTemplate}
        />
      </span>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <span className="d-flex flex-column">
        <label>
          <h4>Viajeros</h4>{" "}
        </label>{" "}
        <Dropdown
          value={vuelos.passengers}
          options={numeroPasajeros}
          onChange={(e) => handleChangeVuelo("passengers", e.value)}
          optionLabel="value"
          placeholder="..."
        />
      </span>

      {/* ------------------------------------------------------------------------------------------------------------------- */}
      <span className="d-flex flex-column">
        <label>
          <h4>Fecha</h4>
        </label>{" "}
        {ida ? (
          <DatePicker
            format={dateFormat}
            className="datepicker"
            placeholder="Ida"
            onChange={onChange}
          />
        ) : (
          <RangePicker
            showTime
            format={dateFormat}
            placeholder={["Ida", "Regreso"]}
            className="datepicker"
            onChange={onChange}
          />
        )}
      </span>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <span className="d-flex flex-column">
        <label>
          <h4>Clase</h4>
        </label>{" "}
        <Dropdown
          value={vuelos.class}
          options={classes}
          onChange={(e) => handleChangeVuelo("class", e.value)}
          optionLabel="name"
          placeholder="..."
        />
      </span>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <span className="d-flex flex-column justify-content-end align-items-end">
        <button
          className="btn btn-primary"
          type="submit"
          href="http://google.com"
        >
          Buscar
        </button>
      </span>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <span className="d-flex flex-row">
        <label className="">Solo ida</label>{" "}
        <Switch className="ml-3" size="small" onChange={(e) => setIda(!ida)} />
      </span>
    </form>
  );
};

export default Vuelos;
