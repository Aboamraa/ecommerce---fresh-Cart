import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderType } from "@/types/Orders.type";

import React from "react";
import { ArrowDown } from "lucide-react";

export default function OrdersTable({ orders }: { orders: OrderType[] }) {
  return (
    <Table className="bg-amber-600 p-24" align={"center"}>
      <TableCaption>All Orders: {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
          <TableCell className="text-right">
            {" "}
            <Collapsible className="flex gap-3">
              <CollapsibleTrigger>
                <ArrowDown />
              </CollapsibleTrigger>
              <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
              </CollapsibleContent>
            </Collapsible>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
