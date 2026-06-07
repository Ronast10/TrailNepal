import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndPolicy() {
  // Automatically scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-stone-50 text-stone-800 font-light">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        
        {/* Header Block */}
        <header className="border-b border-stone-200 pb-8 mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight mb-3">
            Terms of Service & Privacy Policy
          </h1>
          
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl text-stone-900 mb-4 tracking-tight font-medium">
              1. Acceptance of Terms
            </h2>
            <p className="text-stone-600 mb-3">
              Welcome to TrailNepal. By accessing or using our platform, community journal logs, trail maps, and related informational resources, you agree to comply with and be bound by these unified Terms of Service and Privacy Policy guidelines. 
            </p>
            <p className="text-stone-600">
              If you do not agree with any part of these protocols, please refrain from using our online portal and platform features.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl text-stone-900 mb-4 tracking-tight font-medium">
              2. User Content & Field Journals
            </h2>
            <p className="text-stone-600 mb-3">
              Our platform allows explorers to share personalized trek reports, text write-ups, custom imagery, and route coordinates. You retain full ownership over the media you contribute.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-stone-600 text-sm">
              <li>You represent that you own or have explicit permission to distribute submitted content.</li>
              <li>You grant TrailNepal a worldwide, non-exclusive license to format and feature your logs.</li>
              <li>Inappropriate, dangerous, or completely fabricated logs will be removed without notice.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl text-stone-900 mb-4 tracking-tight font-medium">
              3. Safety Disclaimer & Wilderness Risks
            </h2>
            <div className="bg-orange-50/60 border border-orange-100 rounded p-5 text-stone-700 text-sm italic">
              <strong>Important Field Warning:</strong> The Himalayan wilderness is unpredictable, rugged, and carries genuine physiological risks including acute mountain sickness (AMS), volatile changing weather, and treacherous terrain conditions. All itineraries, trail maps, and read-times shared across our user journals are crowdsourced field logs provided solely for conceptual reference. They do not substitute professional certified guides, dynamic weather tracking, and personal localized safety assessments. Use at your own risk.
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl text-stone-900 mb-4 tracking-tight font-medium">
              4. Privacy & Data Collection
            </h2>
            <p className="text-stone-600 mb-3">
              We respect your right to privacy. When registering an account or writing entries, we collect minimal profile identifiers (such as name and email address) necessary to securely establish authorship.
            </p>
            <p className="text-stone-600">
              We do not distribute, sell, or monetize user logs or personal data coordinates to external third-party tracking conglomerates. Your interactions across filter nodes remain completely private.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl text-stone-900 mb-4 tracking-tight font-medium">
              5. Intellectual Property
            </h2>
            <p className="text-stone-600">
              The TrailNepal branding layouts, interactive web architecture, custom interface graphics, typography models, and native programmatic structures remain the sole intellectual property of TrailNepal.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-6 border-t border-stone-200">
            <h2 className="font-serif text-xl text-stone-900 mb-3 tracking-tight font-medium">
              Contact Support
            </h2>
            <p className="text-stone-600 text-sm">
              If you have clarifying inquiries regarding data processing methods, content licensing, or technical issues, please visit our{' '}
              <Link to="/contact" className="text-stone-900 font-medium underline underline-offset-2 hover:text-stone-700">
                Contact Page
              </Link>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}