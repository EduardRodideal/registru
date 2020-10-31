import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { RowRegister } from "./RowRegister";
import { RowRegisterHead } from "./RowRegisterHead";
import { CorrespondenceRegister } from "./CorrespondenceRegister";
import { AddDocument } from "./AddDocument";
import { SearchAccordion } from "./SearchAccordion";

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
  const [isSearchAccordion, setIsSearchAccordion] = useState(false);

  const handleSearchAccordion = () => {
    setIsSearchAccordion(!isSearchAccordion);
  };

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
          <Grid container style={{ marginTop: "5px" }}>
            <Grid item xs={12}>
              <AddDocument />
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                variant="contained"
              >
                Redactează
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                variant="contained"
              >
                Ștege
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                variant="contained"
              >
                Transfer document
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                onClick={handleSearchAccordion}
                variant="contained"
              >
                Caută
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                variant="contained"
              >
                Rapoarte/Statistici
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                variant="contained"
              >
                Setări
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: "7px" }}
                variant="contained"
              >
                Ajutor
              </Button>
            </Grid>
            {isSearchAccordion && <SearchAccordion />}
            <Grid style={{ marginTop: "5px" }} item xs={12}>
              <CorrespondenceRegister />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
