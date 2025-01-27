import { HydrateClient } from "~/trpc/server";
import ToolBox from "~/components/utils/toolBox";
import OperationManagement from "./operationManagement";
import { BreadcrumbInfo } from "./breadCrum";

export default async function Functions() {
  return (
    <HydrateClient>
      <div className="container mx-auto flex max-w-6xl flex-col justify-center p-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Operation form</h1>
          <ToolBox />
        </div>
        <BreadcrumbInfo />
        <div className="py-4">
          <OperationManagement />
        </div>
      </div>
    </HydrateClient>
  );
}
