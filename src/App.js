import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Secretaría del medio ambiente.",
      foto: "https://media.istockphoto.com/id/1207690332/es/foto/gato-esponjoso-gris-con-ojos-azules-de-primer-plano-imagen-cuadrada.jpg?s=1024x1024&w=is&k=20&c=C9s0kkS3NSdrfptBDs4DY5XNkNkkMnLtbV0CSRyoD0o=",
      nombre: "Crico Cavazos",
      puesto:
        "¿Necesita presentación? \nEl segundo en llegar a la manada, Don Crico Guadalupe Cavazos Hernández, autodiagnosticado con autismo grado 1 por un video de Tik Tok. Señor prodigio.",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Secretaría de educación.",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytzmZp6zq7BWMoYrZRXorvvNvXgGw_fo0ib8QhiXRyyF9KedEGqfXLNI4YCPVpbfqo_I&usqp=CAU",
      nombre: "Coca Loeza",
      puesto:
        "Cocurrias. \nAutodiagnosticada con delirio gatuno de persecución, madre de Capuchino y Felpudino.",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Secretaría de finanzas.",
      foto: "https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186064.jpg",
      nombre: "Capuchino Hernández",
      puesto:
        "Hijo de Cocurrias, es ella pero en varón. \nJoven promesa, actual gerente de la panadería familiar.",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Secretaría de educación.",
      foto: "https://previews.123rf.com/images/yilmazsavaskandag/yilmazsavaskandag2304/yilmazsavaskandag230400202/202346225-gato-blanco-y-negro-sobre-fondo-azul-ilustraci%C3%B3n-3d-gatos-lindos-3d-para-calendario-con-im%C3%A1genes.jpg?fj=1",
      nombre: "Horus Hernández",
      puesto:
        "Primogénito.\nFigura paterna de Felpudino. Cuenta la leyenda que una vez le robó una bolsa de jamón y otra de queso a su papá por andar de adolescente rebelde.",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Secretaría de seguridad pública.",
      foto: "https://www.shutterstock.com/image-photo/square-picture-beatiful-white-cat-600w-1484253509.jpg",
      nombre: "Felpudino Casados",
      puesto:
        "¿Hay algo que no haga bien? \nPrivilegiado, ojos azules, máquina de ronroneos, cazador sordo nato en recuperación. Se dice que en las tardes funge como gato adolescente rebelde y en las noches como velador de sueño profesional a tiempo completo. El ídolo de su propio papá.",
      fav: true,
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Secretaría de educación.",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Secretaría de seguridad pública.",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Secretaría de finanzas.",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Secretaría del medio ambiente.",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
