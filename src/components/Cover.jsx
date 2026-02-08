import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Cover() {
  const navigate = useNavigate();
  return (
    <Paper
    elevation={8}
      sx={{
        boxShadow: 0,
        width: "90%",
        m: '0 auto',
        boxSizing: "border-box",
        p: 4,
        borderRadius: 4
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item md={12} lg={6} order={{md: 2, lg: 1}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            
              alignItems: "flex-start"
            }}
          >
            <Typography  component="h2"  mt={2} mb={4} sx ={{fontSize: "2.80rem", fontWeight: 600}}>
              <b>Hola, ¡Bienvenidx!</b>
            </Typography>
            <Typography component="p" variant="h6"  mb={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut.
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor:"#ff0000", borderRadius: "20px", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)", ':hover': {backgroundColor: "#B20000"}
                }}
                onClick={() => navigate("/contact")}
              >
                Contactanos
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} order={{md: 2, lg: 1}}>
          <Box
            sx={{
              "& img": {
               
                
                aspectRatio: "3/2",
                objectFit: "cover",
                borderRadius: 4,
              },
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/join-us.png"}
              alt="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
