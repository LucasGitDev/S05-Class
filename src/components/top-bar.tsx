import { Link } from "@tanstack/react-router";
import type React from "react";
import { MainDrawer } from "./main-drawer";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TopBarProps {
  title: string;
  showBackButton?: boolean;
  backUrl?: string;
  rightElement?: React.ReactNode;
}

export function TopBar({
  title,
  showBackButton = false,
  backUrl = "/dashboard",
  rightElement,
}: TopBarProps) {
  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {showBackButton ? (
          <Link to={backUrl}>
            <button className="text-white hover:bg-primary/80 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
          </Link>
        ) : (
          <MainDrawer />
        )}
        <h1 className="text-xl font-semibold text-secondary">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {rightElement || (
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-secondary/10 text-secondary">
              L
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  );
}
