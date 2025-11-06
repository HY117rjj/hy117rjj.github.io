import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-tight font-bold text-5xl mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Acceptance</h2>
              <p className="text-ink-60 leading-relaxed mb-4">
                By accessing this website, you agree to these terms of use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Intellectual Property</h2>
              <p className="text-ink-60 leading-relaxed mb-4">
                All content on this website, including text, graphics, and code, is
                the property of Junjia Ren unless otherwise stated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-ink-60 leading-relaxed mb-4">
                This website is provided "as is" without warranties of any kind.
                Junjia Ren is not liable for any damages arising from use of this
                website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Contact</h2>
              <p className="text-ink-60 leading-relaxed">
                For questions about these terms, contact{" "}
                <a
                  href="mailto:renjunjia_john@hotmail.com"
                  className="text-brand hover:underline"
                >
                  renjunjia_john@hotmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
