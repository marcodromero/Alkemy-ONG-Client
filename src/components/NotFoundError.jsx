import { Error } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

export default function NotFoundError({ errorMessage, sourceParentRoute }) {
  return (
    <Box>
      
      <Typography>
        <Error />
        {errorMessage}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#2196f3",
          "&:hover": {
            backgroundColor: "#2196f3",
          },
        }}
      >
        <Link sx={{textDecoration:'none'}} href={`/backoffice/${sourceParentRoute}`}>Go back</Link>
      </Button>
    </Box>
  );
}
