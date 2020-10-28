import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import Button from "@material-ui/core/Button";

export const RowRegisterHead = ({ text }) => {
  return (
    <Grid className="margin-align" item xs={12}>
      <Button>
        <Typography>
          <FolderIcon className="mrl-section" /> {text}
        </Typography>
      </Button>
    </Grid>
  );
};
