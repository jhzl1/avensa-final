import React from "react";
import { firebase } from "./Firebase";
import { Card, Button } from "antd";

const Tarjetas = () => {
  const [tarjetas, setTarjetas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { Meta } = Card;

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("tarjetas").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTarjetas(arrayData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div id="tarjetas" className="d-flex flex-column justify-content-center">
      <h2 className="text-center mb-4">Información de interés</h2>
      {loading ? (
        <div className="d-flex flew-row justify-content-center flex-wrap">
          <Card style={{ width: 300 }} loading={loading} className="m-4"></Card>
          <Card style={{ width: 300 }} loading={loading} className="m-4"></Card>
          <Card style={{ width: 300 }} loading={loading} className="m-4"></Card>
          <Card style={{ width: 300 }} loading={loading} className="m-4"></Card>
        </div>
      ) : (
        <div className="d-flex flew-row justify-content-center flex-wrap">
          {tarjetas.map((item) => (
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="img" src={item.foto} />}
              key={item.id}
              className="m-4"
            >
              <Meta
                title={item.tituloTarjeta}
                description={item.descripcion}
                className="mb-3"
              />
              <Button className="button-card">
                Ver más <i className="fas fa-chevron-right ml-2 " />
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tarjetas;
