import React from "react";

//Material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//this is the navbar of the home page
export const Navbar = () => {
  return (
    <ButtonGroup
      variant="contained"
      color="secondary"
      aria-label="contained primary button group"
    >
      <Button fullWidth={true}>
        <Typography>Adaugă document nou</Typography>
      </Button>
      <Button>
        <Typography>Redactează</Typography>
      </Button>
      <Button>
        <Typography>Șterge</Typography>
      </Button>
      <Button>
        <Typography>Transfer document</Typography>
      </Button>
      <Button>
        <Typography>Caută</Typography>
      </Button>
      <Button>
        <Typography>Rapoarte/Statistici</Typography>
      </Button>
      <Button>
        <Typography>Setări</Typography>
      </Button>
      <Button>
        <Typography>Ajutor</Typography>
      </Button>
    </ButtonGroup>
  );
};
