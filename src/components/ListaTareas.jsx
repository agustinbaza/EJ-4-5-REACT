import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea, editarTarea }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <ItemTarea
          tarea={tarea}
          key={tarea._id}
          borrarTarea={borrarTarea}
          editarTarea={editarTarea}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
