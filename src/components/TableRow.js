import React from "react";
import { TableData } from "./TableData";
import { v4 as uuidv4 } from "uuid";

export const TableRow = ({ row }) => {
  const tableRow = row.map((content) => (
    <TableData text={content} key={uuidv4()} />
  ));
  return <tr>{tableRow}</tr>;
};
