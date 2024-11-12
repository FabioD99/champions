'use client'

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {columns, pote1, pote2, pote3, pote4} from "./dataPotes";


export default function App({ potes }) {

  const dataToRender = {
        pote1,
        pote2,
        pote3,
        pote4,
    }[potes] || pote1;

  const renderCell = React.useCallback((team, columnKey) => {
    const cellValue = team[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "md", src: team.avatar}}
            name={cellValue}
          >
          </User>
        );
      case "league":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{team.nation}</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells" removeWrapper className="bg-blue-950 rounded-lg border-collapse">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn className="bg-blue-800 text-slate-400" key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={dataToRender}>
        {(item) => (
          <TableRow className="text-white" key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
