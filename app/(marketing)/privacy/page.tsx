import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | Truly Grit',
  description: 'Learn how Truly Grit collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  openGraph: {
    title: 'Privacy Policy | Truly Grit',
    description: 'Learn how Truly Grit collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At Truly Grit, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote or consultation</li>
              <li>Engage with our services</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company information</li>
              <li>Project details and requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>We may automatically collect certain information about your device and usage patterns, including:</p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Device information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To communicate with you about your projects</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers who assist us in operating our business</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li>Email: privacy@trulygrit.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Business Street, City, State 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
