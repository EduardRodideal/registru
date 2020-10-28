import React from "react";
import { TableHeadData } from "./TableHeadData";
import { v4 as uuidv4 } from "uuid";

export const TableHeadRow = ({ row }) => {
  const tableRow = row.map((content) => (
    <TableHeadData text={content} key={uuidv4()} />
  ));
  return <>{tableRow}</>;
};
