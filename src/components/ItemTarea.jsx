import { Button, ListGroup } from "react-bootstrap";
import { useState } from "react";

const ItemTarea = ({ tarea, borrarTarea, editarTarea }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(tarea.nombreTarea);

  const handleEditar = () => {
    if (editando) {
      editarTarea(tarea._id, nuevoNombre);
      setEditando(false);
    } else {
      setEditando(true);
    }
  };

  const handleCancelar = () => {
    setEditando(false);
    setNuevoNombre(tarea.nombreTarea);
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {editando ? (
          <input
            type="text"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        ) : (
          tarea.nombreTarea
        )}
        <div>
          {editando ? (
            <>
              <Button variant="success" onClick={handleEditar}>
                Guardar
              </Button>
              <Button variant="secondary" onClick={handleCancelar}>
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={handleEditar}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => borrarTarea(tarea._id)}>
                Borrar
              </Button>
            </>
          )}
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
