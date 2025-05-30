import { Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";
import { Toaster } from "../components/ui/toaster";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div className="text-red-500">Not Found</div>,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <Toaster />
    </React.Fragment>
  );
}
