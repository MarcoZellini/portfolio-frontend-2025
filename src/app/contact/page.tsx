'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactSocialProof from '@/components/contact/ContactSocialProof';
import ContactProcess from '@/components/contact/ContactProcess';
import ContactPricing from '@/components/contact/ContactPricing';
import ContactInteractive from '@/components/contact/ContactInteractive';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <ContactHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact Form */}
            <ContactForm />

            {/* FAQ Section */}
            <ContactFAQ />

            {/* Process Section */}
            <ContactProcess />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Proof */}
            <ContactSocialProof />

            {/* Pricing */}
            <ContactPricing />

            {/* Interactive Elements */}
            <ContactInteractive />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
