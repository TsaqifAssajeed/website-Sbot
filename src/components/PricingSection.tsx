import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pricing-card flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2">Sewa Plan</h3>
            <p className="price">Rp. 15k / month</p>
            <ul className="flex flex-col items-center">
              <li>✔️ Add the bot to your group</li>
              <li>✔️ Basic Automation Features</li>
              <li>✔️ Group Management Tools</li>
            </ul>
            <a
              href="https://admin.sbots.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block"
            >
              Sewa Sekarang
            </a>
          </div>

          <div className="pricing-card flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
            <p className="price">Rp. 30k / month</p>
            <ul className="flex flex-col items-center">
              <li>✔️ Full Access to Premium Features</li>
              <li>✔️ Advanced Automation Tools</li>
              <li>✔️ Priority Support</li>
            </ul>
            <a
              href="https://admin.sbots.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block"
            >
              Beli Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
