import { GroupIcon, PhoneIcon, ChannelIcon } from "./IconFeatures";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="about-card">
            <GroupIcon />
            <h4 className="text-xl font-semibold mb-3">Grup</h4>
            <p>
              <a
                href="https://grup.rbotz.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e309b] hover:underline"
              >
                grup.sbotz.biz.id
              </a>
            </p>
          </div>

          <div className="about-card">
            <PhoneIcon />
            <h4 className="text-xl font-semibold mb-3">Nomor Bot</h4>
            <p>
              <a
                href="https://no.rbotz.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e309b] hover:underline"
              >
                no.sbotz.biz.id
              </a>
            </p>
          </div>

          <div className="about-card">
            <ChannelIcon />
            <h4 className="text-xl font-semibold mb-3">Saluran</h4>
            <p>
              <a
                href="https://saluran.rbotz.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e309b] hover:underline"
              >
                saluran.sbotz.biz.id
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
