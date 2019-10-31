import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ action, data, id}) => (
          <TableRow key={action}>
            <TableCell className="pl-3 fw-normal">{data}</TableCell>
            <TableCell>{}</TableCell> 
            <TableCell>
              <Button
                
                size="small"
                className="px-2"
                variant="contained"
              >
                {action}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>


    
  )};