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

        <div className="max-w-3xl mx-auto">
          <div className="faq-card">
            <h5 className="text-lg font-semibold mb-2">Why is the bot sometimes slow?</h5>
            <p>The bot may be slow due to high server traffic. Please be patient.</p>
          </div>

          <div className="faq-card">
            <h5 className="text-lg font-semibold mb-2">Are there fees for adding the bot to a group?</h5>
            <p>Yes, there are fees for server maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
