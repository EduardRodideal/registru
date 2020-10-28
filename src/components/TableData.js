import React from "react";
import Typography from "@material-ui/core/Typography";

export const TableData = ({ text }) => {
  return (
    <td>
      <Typography variant="body2" align="center">
        {text}
      </Typography>
    </td>
  );
};
