import React from "react";
import Typography from "@material-ui/core/Typography";

export const TableHeadData = ({ text }) => {
  return (
    <th>
      <Typography variant="body2" align="center">
        {text}
      </Typography>
    </th>
  );
};
