import { Delete, Edit, Create } from "@mui/icons-material";

import {
  Button,
  colors,
  TableCell,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material";

import React from "react";
import httpService from "../../services/httpService";
import { DeleteAlert } from "../../features/alert/Alert";
import { Link, useNavigate } from "react-router-dom";
export default function UserTableItem({ firstName, lastName, email, id }) {
  const navigate = useNavigate();
  const [showDeleteWarning, setShowDeleteWarning] = React.useState(false);
  const initDelete = () => {
    setShowDeleteWarning(true);
  };
  return (
    <>
      <DeleteAlert
        show={showDeleteWarning}
        onConfirm={() => {
          httpService.delete(`/users/${id}`);
          setShowDeleteWarning(false);
          navigate("/backoffice/users");
        }}
        onCancel={() => setShowDeleteWarning(false)}
        text="¿Esta seguro que desea eliminar este usuario?"
      />

      <TableRow>
        <TableCell size="small">{firstName}</TableCell>
        <TableCell size="small">{lastName}</TableCell>
        <TableCell size="small">{email}</TableCell>
        <TableCell size="small">
          <Tooltip title="Eliminar">
            <Link onClick={() => initDelete()} color="secondary">
              <IconButton>
                <Delete color="danger" />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Actualizar">
            <Link to={`/backoffice/users/${id}`}>
              <IconButton>
                <Create />
              </IconButton>
            </Link>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
}
