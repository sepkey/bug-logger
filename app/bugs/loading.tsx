import { Table } from "@radix-ui/themes";
import React from "react";
import BugsActions from "./BugsActions";
import { Skeleton } from "../_components";

export default function LoadingBugs() {
  const bugs = [1, 2, 3, 4, 5];
  return (
    <div>
      <BugsActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.Cell>Bug</Table.Cell>
            <Table.Cell className="hidden md:table-cell">Status</Table.Cell>
            <Table.Cell className="hidden md:table-cell">Created at</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bugs.map((bug) => {
            return (
              <Table.Row key={bug}>
                <Table.Cell>
                  <Skeleton />
                  <div className="block md:hidden">
                    <Skeleton />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
