import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

/** Demonstration only: shows a notice, never navigates, calls, emails or submits. */
export function QuoteButton({ className, label = "Get a Quote" }: { className?: string; label?: string }) {
  return (
    <Button
      type="button"
      variant="gold"
      size="xl"
      className={className}
      onClick={() =>
        toast("Quotation requests are coming soon", {
          description: "This button is a preview. Online quote requests will be connected later.",
        })
      }
    >
      <Mail /> {label} <ArrowRight />
    </Button>
  );
}
