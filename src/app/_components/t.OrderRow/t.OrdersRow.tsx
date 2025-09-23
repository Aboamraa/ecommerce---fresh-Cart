import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowDown } from "lucide-react";

export default function OrderRow() {
  return (
    <>
      <Collapsible className="flex gap-3">
        <CollapsibleTrigger>
          <ArrowDown />
        </CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
