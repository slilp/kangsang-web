import { TableCell, TableHead, TableRow, TableSortLabel } from "kangsang-mui";
import { ITableColumn } from "@/types/table";

interface TableHeaderProps {
  columns: ITableColumn[];
  handleSort: (orderBy: string, isDesc: boolean) => void;
  orderBy: string;
  orderByDirection: string;
}

function TableHeader({
  columns,
  handleSort,
  orderBy,
  orderByDirection,
}: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((col, index) => {
          const isActive = orderBy === col.id;
          const sortDirection = isActive
            ? orderByDirection === "desc"
              ? "desc"
              : "asc"
            : "asc";

          return (
            <TableCell key={`category-column-${col.id}`} align="center">
              {col.sortable ? (
                <TableSortLabel
                  active={isActive}
                  direction={sortDirection}
                  onClick={() =>
                    handleSort(
                      col.id,
                      orderByDirection === "desc" ? true : false
                    )
                  }
                >
                  {col.label}
                </TableSortLabel>
              ) : (
                col.label
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
