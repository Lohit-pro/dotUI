"use client";

import * as React from "react";
import { ALargeSmallIcon, RotateCwIcon } from "lucide-react";
import { Button } from "@/lib/components/core/default/button";
import { Input } from "@/lib/components/core/default/input";
import { ProgressBar } from "@/lib/components/core/default/progress-bar";

export default function ProgressDemo() {
  return (
    <Input
      defaultValue="https://rcopy.dev"
      className="relative h-12 pb-0.5 [&_input]:text-center"
      prefix={
        <Button size="sm" variant="ghost" shape="square">
          <ALargeSmallIcon />
        </Button>
      }
      suffix={
        <Button size="sm" variant="ghost" shape="circle">
          <RotateCwIcon />
        </Button>
      }
    >
      <ProgressBar
        value={50}
        size="sm"
        variant="info"
        className="absolute bottom-0 left-0 right-0 rounded-none bg-transparent"
      />
    </Input>
  );
}