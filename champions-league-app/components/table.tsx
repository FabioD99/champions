'use client'

import React, { useState, useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";
import { columns, pote1, pote2, pote3, pote4 } from "./dataPotes";

export default function App() {
  // State to keep track of the current pote (1 - 4)
  const [potePage, setPotePage] = useState(1);

  // Define each pote as an array for easier navigation
  const poteData = [pote1, pote2, pote3, pote4];

  // Use the current potePage to select the relevant pote list
  const items = poteData[potePage - 1];

  return (
    <Table 
      aria-label="Example table with client-side pagination by pote"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={potePage}
            total={poteData.length}
            onChange={(page) => setPotePage(page)}
          />
        </div>
      }
      style={{
        backgroundColor: "#172554",
        borderRadius: "10px",
      }}
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader columns={columns}>
        <TableColumn key="avatar">Pote</TableColumn>
        <TableColumn key="H1">H</TableColumn>
        <TableColumn key="A1">A</TableColumn>
        <TableColumn key="H2">H</TableColumn>
        <TableColumn key="A2">A</TableColumn>
        <TableColumn key="H3">H</TableColumn>
        <TableColumn key="A3">A</TableColumn>
        <TableColumn key="H4">H</TableColumn>
        <TableColumn key="A4">A</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {/* Render avatar in the first column only */}
            <TableCell>
              <div className="flex">
              <img
                src={`${item.avatar}`}
                alt={item.name}
                style={{ borderRadius: "50%", width: 40, height: 40 }}
              />
              <h1 className="text-center align-middle">{item.name}</h1>
              </div>
            </TableCell>
            {/* Render empty cells for the other columns */}
            <TableCell children={undefined} />
            <TableCell children={undefined} />
            <TableCell children={undefined} />
            <TableCell children={undefined} />
            <TableCell children={undefined} />
            <TableCell children={undefined} />
            <TableCell children={undefined} />
            <TableCell children={undefined} />
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
