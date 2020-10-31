import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const authority = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Ministerul Justiției",
    label: "Ministerul Justiției",
  },
  {
    value: "Ministeru Muncii",
    label: "Ministeru Muncii",
  },
  {
    value: "Guvernul",
    label: "Guvernul",
  },
  {
    value: "Arhiva Leova",
    label: "Arhiva Leova",
  },
];

const documentTypes = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Scrisori autorități centrale",
    label: "Scrisori autorități centrale",
  },
  {
    value: "Scrisori cu raioanele",
    label: "Scrisori cu raioanele",
  },
  {
    value: "Scrisori/Rapoarte",
    label: "Scrisori/Rapoarte",
  },
  {
    value: "Scrisori/Contracte",
    label: "Scrisori/Contracte",
  },
  {
    value: "Scrisori/Petiții",
    label: "Scrisori/Petiții",
  },
  {
    value: "Scrisori/Ordine",
    label: "Scrisori/Ordine",
  },
  {
    value: "Scrisori/Note informative",
    label: "Scrisori/Note informative",
  },
];

const periodToKeep = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "1 an",
    label: "1 an",
  },
  {
    value: "2 ani",
    label: "2 ani",
  },
  {
    value: "3 ani",
    label: "3 ani",
  },
  {
    value: "4 ani",
    label: "4 ani",
  },
];

const typesOfAttachedFiles = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "foto",
    label: "foto",
  },
  {
    value: "file",
    label: "file",
  },
  {
    value: "Pdf",
    label: "Pdf",
  },
];
const confirmRepartition = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "confirmat",
    label: "confirmat",
  },
  {
    value: "ne confirmat",
    label: "ne confirmat",
  },
  {
    value: "pending",
    label: "pending",
  },
];

export const SearchAccordion = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [issuer, setIssuer] = useState("Select");
  const [typesOfDocuments, setTypesOfDocuments] = useState("Select");
  const [keep, setKeep] = useState("Select");
  const [documentContent, setDocumentContent] = useState("");
  const [attached, setAttached] = useState("Select");
  const [confirm, setConfirm] = useState("Select");

  const handleConfirm = (event) => {
    const { value } = event.target;
    setConfirm(value);
  };

  const handleAttached = (event) => {
    const { value } = event.target;
    setAttached(value);
  };

  const handleChangeDocumentContent = (event) => {
    const { value } = event.target;
    setDocumentContent(value);
  };

  const handleChangeKeep = (event) => {
    const { value } = event.target;
    setKeep(value);
  };

  const handleChangeIssuer = (event) => {
    const { value } = event.target;
    setIssuer(value);
  };

  const handleTypesOfDocuments = (event) => {
    const { value } = event.target;
    setTypesOfDocuments(value);
  };

  const handleRegisterNumber = (event) => {
    const { value } = event.target;
    setRegisterNumber(value);
  };
  return (
    <Grid container>
      <Grid style={{ padding: "20px" }} item xs={9}>
        <TextField
          style={{ width: "185px", marginTop: "10px" }}
          label="Număr de înregistrare"
          value={registerNumber}
          onChange={handleRegisterNumber}
          variant="outlined"
          size="small"
        />
        <TextField
          select
          size="small"
          variant="outlined"
          style={{ width: "185px", marginLeft: "30px", marginTop: "10px" }}
          label="autoritatea emitentă"
          value={issuer}
          onChange={handleChangeIssuer}
        >
          {authority.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          variant="outlined"
          style={{ width: "185px", marginLeft: "30px", marginTop: "10px" }}
          label="tipuri de documente"
          value={typesOfDocuments}
          onChange={handleTypesOfDocuments}
        >
          {documentTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          variant="outlined"
          style={{ width: "185px", marginLeft: "30px", marginTop: "10px" }}
          label="termen de păstrare"
          value={keep}
          onChange={handleChangeKeep}
        >
          {periodToKeep.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          variant="outlined"
          style={{ width: "185px", marginTop: "20px" }}
          label="tipuri de fișiere atașate"
          value={attached}
          onChange={handleAttached}
        >
          {typesOfAttachedFiles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ width: "185px", marginTop: "20px", marginLeft: "30px" }}
          id="date"
          label="data intrare"
          type="date"
          variant="outlined"
          defaultValue="2017-05-24"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          style={{ width: "185px", marginTop: "20px", marginLeft: "30px" }}
          id="date"
          label="selectează interval"
          type="date"
          variant="outlined"
          defaultValue="2017-05-24"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          select
          size="small"
          variant="outlined"
          style={{ width: "185px", marginTop: "20px", marginLeft: "30px" }}
          label="Confirmarea repartizării"
          value={confirm}
          onChange={handleConfirm}
        >
          {confirmRepartition.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid style={{ padding: "20px" }} item xs={3}>
        <TextField
          label="Conținutul documentului"
          style={{ width: "250px", marginLeft: "0px", marginTop: "10px" }}
          multiline
          rows={4}
          onChange={handleChangeDocumentContent}
          value={documentContent}
          variant="outlined"
          size="small"
        />
      </Grid>
      {/* start buttons row */}
      <Grid container justify="flex-end">
        <Grid style={{ marginTop: "5px", marginBottom: "7px" }} item xs={6}>
          <Grid container justify="flex-end">
            <Button color="primary" variant="contained">
              Șterge
            </Button>
            <Button
              color="primary"
              style={{ marginLeft: "10px" }}
              variant="contained"
            >
              Anulează
            </Button>
            <Button
              color="primary"
              style={{ marginLeft: "10px", marginRight: "10px" }}
              variant="contained"
            >
              Filtrează
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* end buttons row */}
    </Grid>
  );
};
