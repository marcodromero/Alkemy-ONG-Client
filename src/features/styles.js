import { styled } from "@mui/material/styles";
import {tableCellClasses, TableCell } from "@mui/material";
export const StyledTableCell = styled (TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ffc168",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));