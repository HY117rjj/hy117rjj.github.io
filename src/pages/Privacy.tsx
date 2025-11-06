import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-tight font-bold text-5xl mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Information Collection</h2>
              <p className="text-ink-60 leading-relaxed mb-4">
                This website collects personal information that you provide through
                the contact form, including your name, email address, and message
                content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Use of Information</h2>
              <p className="text-ink-60 leading-relaxed mb-4">
                The information you provide is used solely to respond to your
                inquiries and is not shared with third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Data Removal</h2>
              <p className="text-ink-60 leading-relaxed mb-4">
                You may request removal of your data at any time by contacting{" "}
                <a
                  href="mailto:renjunjia_john@hotmail.com?subject=Data Removal Request"
                  className="text-brand hover:underline"
                >
                  renjunjia_john@hotmail.com
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-tight font-bold text-2xl mb-4">Updates</h2>
              <p className="text-ink-60 leading-relaxed">
                This privacy policy may be updated periodically. Last updated: 2024.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
