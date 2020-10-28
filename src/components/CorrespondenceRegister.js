import React from "react";
import { TableHeadRow } from "./TableHeadRow";
import { TableRow } from "./TableRow";

export const CorrespondenceRegister = () => {
  const rowOne = [
    "1",
    "01/01/2020",
    "1354/6",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul Justiție",
    "Scrisori autorități centrale",
    "5 ani",
    "5",
    "Galina Elas",
    "Primit Prelucrate Completat",
    "Dosarul este compus din 1 sau mai multe cereri",
    "Toate dosarele cu cereri se includ în proces verbal (Nr.1)",
    "Comentariu",
  ];
  const rowTwo = [
    "2",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowThree = [
    "3",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Arhive Leova",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowFour = [
    "4",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowFive = [
    "5",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowSix = [
    "6",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowSeven = [
    "7",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowEight = [
    "8",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowNine = [
    "9",
    "02/08/2021",
    "2654",
    "Regimul juridic și modalitatea de circulație a documentelor",
    "Ministerul muncii",
    "Scrisori cu raioanele",
    "3 ani",
    "7",
    "Ion Mart",
    "Semantura",
    "",
    "",
    "",
  ];
  const rowHead = [
    "Nr. Ordine",
    "Data Înregistrării",
    "Nr. Înregistrare/ Ieșire",
    "Conținutul succint al documentului",
    "Autoritatea emitentă",
    "Tipuri de documente",
    "Termen de păstrare",
    "Nr. de file",
    "Compartimentul de repartizare",
    "Confirmarea repartizării",
    "Pregătirea dosarului",
    "Proces verbal",
    "Note Comentarii",
  ];
  return (
    <table className="table" aria-label="customized table">
      <thead>
        <tr className="table-font">
          <TableHeadRow row={rowHead} />
        </tr>
      </thead>
      <tbody>
        <TableRow row={rowOne} />
        <TableRow row={rowTwo} />
        <TableRow row={rowThree} />
        <TableRow row={rowFour} />
        <TableRow row={rowFive} />
        <TableRow row={rowSix} />
        <TableRow row={rowSeven} />
        <TableRow row={rowEight} />
        <TableRow row={rowNine} />
      </tbody>
    </table>
  );
};
