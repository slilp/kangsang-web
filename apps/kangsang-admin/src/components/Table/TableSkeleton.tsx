import React from "react";
import { Table, TableBody, TableCell, TableRow, Skeleton } from "kangsang-mui";

const TableSkeleton = ({ rows = 5, columns = 3 }) => {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton variant="text" height="30px" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableSkeleton;
