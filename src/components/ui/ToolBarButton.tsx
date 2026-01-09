"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const EditorToolbarButton = React.memo(
  ({ onClick, isActive, disabled, title, icon: Icon }: ToolbarButtonProps) => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            disabled={disabled}
            className={`h-9 w-9 flex items-center justify-center rounded-md transition
              ${
                isActive
                  ? "bg-green-500/15 text-green-600"
                  : "text-muted-foreground hover:bg-green-500/10 hover:text-foreground"
              }
            `}
          >
            <Icon className="h-4 w-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{title}</TooltipContent>
      </Tooltip>
    );
  }
);

EditorToolbarButton.displayName = "EditorToolbarButton";
