import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // layout & typography
        "inline-flex flex-1 items-center justify-center gap-1.5",
        "px-2 py-1 text-sm font-medium whitespace-nowrap",

        // erase all defaults
        "border-0 bg-transparent shadow-none",

        // invisible bottom‐border placeholder
        "border-b-2 border-transparent",

        // only show blue underline & text when active
        "data-[state=active]:border-blue-500",
        "data-[state=active]:text-blue-600",

        // remove any focus outlines/rings
        "focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0",

        // smooth color transition
        "transition-colors",

        className
      )}
      {...props}
    />
  )
}


function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
