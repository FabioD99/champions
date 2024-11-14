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
    <Table aria-label="Example table with client-side pagination by pote" removeWrapper className="bg-blue-950 opacity-80 rounded-lg border-collapse"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color= "default"
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
        <TableColumn className="bg-blue-800 opcaity-75" key="avatar">EQUIPA</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="H1">POT 1H</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="A1">POT 1A</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="H2">POT 2H</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="A2">POT 2A</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="H3">POT 3H</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="A3">POT 3A</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="H4">POT 4H</TableColumn>
        <TableColumn className="bg-blue-800 opcaity-75" key="A4">POT 4A</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow className="text-white border-gray-300" key={item.id}>
            <TableCell>
              <div className="flex">
              <img
                src={`${item.avatar}`}
                alt={item.name}
                style={{ borderRadius: "50%", width: 40, height: 40 }}
              />
              <div className="flex flex-col">
               <h1 className="ml-3 text-left align-left">{item.name}</h1>
               <p className="text-slate-400 text-left align-left ml-3">{item.nation}</p>
              </div>
              </div>
            </TableCell>
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
