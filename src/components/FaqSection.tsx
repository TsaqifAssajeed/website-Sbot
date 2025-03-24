import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">FAQ</h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why is the bot sometimes slow?</AccordionTrigger>
            <AccordionContent>
              The bot may be slow due to high server traffic. Please be patient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are there fees for adding the bot to a group?</AccordionTrigger>
            <AccordionContent>
              Yes, there are fees for server maintenance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
