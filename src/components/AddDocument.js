import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 3),
    margin: "auto",
    marginTop: "10%",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 150,
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

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

const allocationOfficial = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Galina Elas",
    label: "Galina Elas",
  },
  {
    value: "Ion Mart",
    label: "Ion Mart",
  },
  {
    value: "Mihai Albu",
    label: "Mihai Albu",
  },
  {
    value: "Ion Borta",
    label: "Ion Borta",
  },
];

const statusDossier = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Primit",
    label: "Primit",
  },
  {
    value: "Repartizat",
    label: "Repartizat",
  },
  {
    value: "Completat",
    label: "Completat",
  },
];

const foldersChoices = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "unu",
    label: "unu",
  },
  {
    value: "doi",
    label: "doi",
  },
  {
    value: "trei",
    label: "trei",
  },
];

const protocolChoices = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "unu",
    label: "unu",
  },
  {
    value: "doi",
    label: "doi",
  },
  {
    value: "trei",
    label: "trei",
  },
];

export const AddDocument = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [docNumber, setDocNumber] = useState("");
  const [issuer, setIssuer] = useState("Select");
  const [keep, setKeep] = useState("Select");
  const [numberOfFiles, setNumberOfFiles] = useState("");
  const [allocation, setAllocation] = useState("Select");
  const [status, setStatus] = useState("Select");
  const [folders, setFolders] = useState("Select");
  const [protocol, setProtocol] = useState("Select");
  const [loadFile, setLoadFile] = useState("");
  const [documentContent, setDocumentContent] = useState("");
  const [comments, setComments] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangeComments = (event) => {
    const { value } = event.target;
    setComments(value);
  };

  const handleChangeDocumentContent = (event) => {
    const { value } = event.target;
    setDocumentContent(value);
  };

  const handleChangeProtocol = (event) => {
    const { value } = event.target;
    setProtocol(value);
  };

  const handleChangeLoadFile = (event) => {
    const { value } = event.target;
    setLoadFile(value);
  };

  const handleChangeFolders = (event) => {
    const { value } = event.target;
    setFolders(value);
  };

  const handleChangeStatus = (event) => {
    const { value } = event.target;
    setStatus(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDocNumber = (event) => {
    const { value } = event.target;
    setDocNumber(value);
  };

  const handleChangeIssuer = (event) => {
    const { value } = event.target;
    setIssuer(value);
  };

  const handleChangeKeep = (event) => {
    const { value } = event.target;
    setKeep(value);
  };

  const handleChangeFiles = (event) => {
    const { value } = event.target;
    setNumberOfFiles(value);
  };

  const handleChangeOfficial = (event) => {
    const { value } = event.target;
    setAllocation(value);
  };

  const body = (
    <Grid className={classes.paper} container>
      <Grid container justify="flex-end">
        <IconButton onClick={handleClose}>
          <CloseIcon color="secondary" />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            {/* first row */}
            <TextField
              label="Număr de intrare"
              value={docNumber}
              onChange={handleDocNumber}
              variant="outlined"
              size="small"
            />
            <TextField
              id="date"
              label="data înregistrării"
              type="date"
              variant="outlined"
              defaultValue="2017-05-24"
              className={classes.textField}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              select
              size="small"
              variant="outlined"
              style={{ width: "185px" }}
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
              style={{ width: "140px" }}
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
              label="Nr. de file"
              style={{ width: "90px" }}
              value={numberOfFiles}
              onChange={handleChangeFiles}
              variant="outlined"
              size="small"
            />
            {/* end first row */}
          </div>
          {/* start second row */}
          <div>
            <TextField
              select
              size="small"
              variant="outlined"
              style={{ width: "140px" }}
              label="C de repartizare"
              value={allocation}
              onChange={handleChangeOfficial}
            >
              {allocationOfficial.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              size="small"
              variant="outlined"
              style={{ width: "140px" }}
              label="Statut repartizare"
              value={status}
              onChange={handleChangeStatus}
            >
              {statusDossier.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              size="small"
              variant="outlined"
              style={{ width: "140px" }}
              label="Dosare"
              value={folders}
              onChange={handleChangeFolders}
            >
              {foldersChoices.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              size="small"
              variant="outlined"
              style={{ width: "140px" }}
              label="Proces verbal"
              value={protocol}
              onChange={handleChangeProtocol}
            >
              {protocolChoices.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* end second row */}
          </div>
          {/* start third row */}
          <div>
            <TextField
              label="Încarcă fișier"
              style={{ width: "140px" }}
              value={loadFile}
              onChange={handleChangeLoadFile}
              variant="outlined"
              size="small"
            />
            <TextField
              label="Conținutul documentului"
              style={{ width: "200px" }}
              multiline
              rows={4}
              onChange={handleChangeDocumentContent}
              value={documentContent}
              variant="outlined"
              size="small"
            />
            <TextField
              label="Comentarii/Note"
              style={{ width: "160px" }}
              multiline
              rows={4}
              onChange={handleChangeComments}
              value={comments}
              variant="outlined"
              size="small"
            />
          </div>
          {/* end third row */}
        </form>
      </Grid>
      {/* start buttons row */}
      <Grid container justify="flex-end">
        <Grid style={{ marginTop: "20px" }} item xs={6}>
          <Grid container justify="flex-end">
            <Button color="primary" variant="contained">
              Redactează
            </Button>
            <Button
              color="primary"
              style={{ marginLeft: "10px" }}
              variant="contained"
            >
              Șterge
            </Button>
            <Button
              color="primary"
              style={{ marginLeft: "10px", marginRight: "10px" }}
              variant="contained"
            >
              Salvează
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* end buttons row */}
    </Grid>
  );

  return (
    <div style={{ display: "inline", marginLeft: "5px" }}>
      <Button
        color="primary"
        className="mrl-button"
        variant="contained"
        onClick={handleOpen}
      >
        Adaugă document nou
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
