import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import Button from "@material-ui/core/Button";

export const RowRegister = ({ text }) => {
  return (
    <Grid item xs={12}>
      <Button>
        <Typography>
          <FolderIcon className="mr-folder-icon" />
          {text}
        </Typography>
      </Button>
    </Grid>
  );
};
