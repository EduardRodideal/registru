import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { RowRegister } from "./RowRegister";
import { RowRegisterHead } from "./RowRegisterHead";
import { CorrespondenceRegister } from "./CorrespondenceRegister";
import { AddDocument } from "./AddDocument";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const RegisterOne = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Grid container>
            <RowRegisterHead text={"Serviciul comunicare și relații"} />
            <RowRegisterHead text={"Registre"} />
            <RowRegister text={"Registrul Corespondenței"} />
            <RowRegister text={"Registrul Ordinelor"} />
            <RowRegister text={"Registrul Audienței"} />
            <RowRegister text={"Registrul Petiții"} />
            <RowRegister text={"Registrul Peplasări"} />
            <RowRegister text={"Altele"} />
            <RowRegisterHead text={"Serviciul monitorizare și control"} />
            <RowRegisterHead text={"Registre"} />
            <RowRegister text={"Registrul unu"} />
            <RowRegister text={"Registrul doi"} />
            <RowRegister text={"Registrul trei"} />
            <RowRegisterHead text={"Serviciul comunicare și relații"} />
            <RowRegisterHead text={"Registre"} />
            <RowRegister text={"Registrul Corespondenței"} />
            <RowRegister text={"Registrul doi"} />
            <RowRegister text={"Registrul trei"} />
          </Grid>
        </Grid>
        <Grid className="margin-align" item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <AddDocument />
              {/* <Button className="mrl-button" variant="contained">
                Adaugă document nou
              </Button> */}
              <Button variant="contained">Redactează</Button>
              <Button variant="contained">Ștege</Button>
              <Button variant="contained">Transfer document</Button>
              <Button variant="contained">Caută</Button>
              <Button variant="contained">Rapoarte/Statistici</Button>
              <Button variant="contained">Setări</Button>
              <Button variant="contained">Ajutor</Button>
            </Grid>
            <Grid item xs={12}>
              <CorrespondenceRegister />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
