import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "../ui/table";

const TableBodySkeleton = () => {
  return (
    <>
      <TableBody>
        <TableRow key={1}>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow key={2}>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="bg-main-skeleton-light dark:bg-main-skeleton-dark h-6 w-full" />
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default TableBodySkeleton;
