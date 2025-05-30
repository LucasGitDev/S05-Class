import { ThemeProvider } from "@/components/theme-provider";
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
      <ThemeProvider storageKey="vite-ui-theme" defaultTheme="light">
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </React.Fragment>
  );
}
