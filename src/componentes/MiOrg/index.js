import { useState } from "react";
import "./MiOrg.css";
import { BiMessageAltAdd } from "react-icons/bi";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [nombreVariable,funcionActualiza] = useState(valorInicial)
  console.log(props);
  // const [mostrar, actualizarMostrar] = useState(true)
  // const manejarClick = () => {
  //     console.log("Mostrar/Ocultar elemento", !mostrar)
  //     actualizarMostrar(!mostrar)
  // }

  return (
    <section className="orgSection">
      <h3 className="title">Miembros</h3>
      <BiMessageAltAdd
        className="agregar"
        size={40}
        color="E1C699"
        alt="add"
        onClick={props.cambiarMostrar}
      />
    </section>
  );
};

export default MiOrg;
