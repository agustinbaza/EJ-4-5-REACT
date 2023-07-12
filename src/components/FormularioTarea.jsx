import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import {
  consultaAgregarTarea,
  consultaBorrarTarea,
  consultaEditarTarea,
  consultaListaTareas,
} from "../helpers/queries";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const listaTareas = await consultaListaTareas();
    setTareas(listaTareas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      return;
    }
    const nuevaTarea = {
      nombreTarea: tarea,
    };
    const respuesta = await consultaAgregarTarea(nuevaTarea);
    if (respuesta.status === 201) {
      obtenerTareas();
      setTarea("");
    }
  };

  const borrarTarea = async (id) => {
    const respuesta = await consultaBorrarTarea(id);
    if (respuesta.status === 200) {
      obtenerTareas();
    }
  };

  const editarTarea = async (id, nuevoNombre) => {
    const tareaEditada = {
      nombreTarea: nuevoNombre,
    };
    const respuesta = await consultaEditarTarea(tareaEditada, id);
    if (respuesta.status === 200) {
      obtenerTareas();
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        tareas={tareas}
        borrarTarea={borrarTarea}
        editarTarea={editarTarea}
      />
    </section>
  );
};

export default FormularioTarea;
