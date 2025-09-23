"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // optional helper if you use className merging
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

type ClientButtonProps = React.ComponentProps<typeof Button> & {
  onClick?: () => void | Promise<void>; // support async and sync
};

export default function ClientButton({
  children,
  onClick,
  className,
  variant = "default",
  ...props
}: ClientButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    if (!onClick) return;

    try {
      setIsLoading(true);
      await onClick();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      disabled={isLoading || props.disabled}
      className={cn("relative", className)}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : null}
      {children}
    </Button>
  );
}


