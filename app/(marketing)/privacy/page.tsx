import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | Truly Grit - Data Protection & Privacy',
  description: 'Learn how Truly Grit LLP collects, uses, and protects your personal information. Our commitment to data privacy and security.',
  openGraph: {
    title: 'Privacy Policy | Truly Grit - Data Protection & Privacy',
    description: 'Learn how Truly Grit LLP collects, uses, and protects your personal information. Our commitment to data privacy and security.',
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
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              {/* Introduction */}
              <div>
                <p>
                  At Truly Grit LLP ("Truly Grit," "we," "our," or "us"), we are committed to safeguarding your privacy and protecting your personal data. This Privacy Policy, together with our website's Terms & Conditions, explains how we collect, use, store, and protect information you share with us. Please read this carefully to understand our practices regarding your personal information and how we handle it.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We May Collect from You</h2>
                <p className="mb-4">
                  While using our website or engaging with our services, we may collect certain personal information that can be used to identify or contact you. This may include your name, email address, phone number, and other contact details ("Personal Information").
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Website Browsing</h3>
                    <p>
                      If you are simply browsing our website without submitting any forms, we do not collect any personally identifiable information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Contact Forms & Communications</h3>
                    <p>
                      If you choose to contact us through our website forms, newsletters, service inquiries, or any other means, we may request basic contact details such as your name, email address, phone number, and company details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email & Communication */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Email & Communication Information</h2>
                <div className="space-y-4">
                  <p>
                    When you send us emails or fill out our contact forms, we may retain the content of your communication along with your email address for record-keeping and response purposes.
                  </p>
                  <p>
                    The information you provide remains the sole property of Truly Grit LLP. We will never sell, rent, or disclose this data to unauthorized third parties. Any sharing of data will only occur in accordance with this Privacy Policy and applicable laws, and always with your consent where required.
                  </p>
                </div>
              </div>

              {/* Direct Mailings */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Direct Mailings & Marketing</h2>
                <p className="mb-4">We may use your Personal Information to contact you with:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Newsletters and updates</li>
                  <li>Marketing and promotional materials</li>
                  <li>Service-related communications</li>
                  <li>Business development information</li>
                </ul>
                <p>
                  You can opt out of receiving marketing communications at any time by following the unsubscribe instructions included in our communications or by contacting us directly.
                </p>
              </div>

              {/* Data Storage */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Where We Store Your Data</h2>
                <div className="space-y-4">
                  <p>
                    All personal information is stored on secure servers with restricted access. While we employ industry-standard security measures, please understand that no transmission of information over the internet is entirely risk-free. Any transmission is at your own risk.
                  </p>
                  <p>
                    Once received, we apply strict security procedures to protect your data against unauthorized access, misuse, or alteration.
                  </p>
                </div>
              </div>

              {/* Data Updates */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Updating or Removing Your Personal Information</h2>
                <div className="space-y-4">
                  <p>
                    You are responsible for providing accurate and up-to-date information. If you wish to correct, update, or remove your details, please contact us.
                  </p>
                  <p>
                    If you choose to stop receiving our services or communications, we will delete or anonymize your personal data, except where retention is required by law or for legitimate audit and record-keeping purposes.
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>To present website content in the most effective way.</li>
                  <li>To provide you with services, information, or products you request.</li>
                  <li>To fulfill contractual obligations.</li>
                  <li>To inform you of changes to our services.</li>
                  <li>To provide you with information about related services or offerings that may interest you.</li>
                </ul>
                <p>
                  We may share non-identifiable aggregate data with our partners or advertisers, but never individual, identifiable personal information without your consent.
                </p>
              </div>

              {/* GDPR Rights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">GDPR Data Protection Rights</h2>
                <p className="mb-4">
                  If you are based in the European Union or the UK, you have the following rights under the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Right to Access</strong> – Request copies of your personal data (a nominal fee may apply).</li>
                  <li><strong>Right to Rectification</strong> – Request corrections to inaccurate or incomplete data.</li>
                  <li><strong>Right to Erasure</strong> – Request deletion of your personal data under certain conditions.</li>
                  <li><strong>Right to Restrict Processing</strong> – Request limitation on how we process your data.</li>
                  <li><strong>Right to Object</strong> – Object to processing in certain circumstances.</li>
                  <li><strong>Right to Data Portability</strong> – Request transfer of your data to another organization or directly to you.</li>
                </ul>
                <p>
                  We aim to respond to all such requests within one month. To exercise these rights, please contact us using the details provided below.
                </p>
              </div>

              {/* DPDP Act */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">DPDP Act, 2023 (India) – Data Protection Rights</h2>
                <p className="mb-4">
                  As we operate primarily in India, we also comply with the Digital Personal Data Protection Act, 2023. Under this law, you are entitled to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Right to Access Information</strong> – Know how your data is being processed and for what purpose.</li>
                  <li><strong>Right to Correction & Erasure</strong> – Request correction of inaccurate data or deletion of your personal information unless retention is legally required.</li>
                  <li><strong>Right to Grievance Redressal</strong> – Raise complaints regarding misuse or mishandling of your data, which we are obligated to address promptly.</li>
                  <li><strong>Right to Nominate</strong> – Nominate another individual to exercise your rights in the event of your incapacity or death.</li>
                </ul>
                <p>
                  We ensure that your personal data is processed only for lawful purposes, with your consent where required, and retained only for as long as necessary.
                </p>
              </div>

              {/* Disclosure */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Information</h2>
                <p className="mb-4">
                  We do not sell, misuse, or unlawfully disclose your Personal Information. However, disclosure may occur under the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>If we are involved in a business transfer, merger, or acquisition, your data may be shared with the prospective buyer or seller, to the necessary extent.</li>
                  <li>Where legally required by regulatory authorities or courts of law.</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p>
                  We take children's privacy seriously. Truly Grit LLP does not knowingly collect personal information from children under 13 years of age. If you believe a child has provided such information, please contact us immediately and we will ensure removal from our records.
                </p>
              </div>

              {/* Consent */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Consent</h2>
                <p className="mb-4">
                  By submitting your information, you consent to the collection, storage, and use of your data as outlined in this Privacy Policy.
                </p>
                <p>
                  If we make any changes to this policy, we will update this page and may display notices on our website to keep you informed. Continued use of our website or services constitutes your acceptance of these changes.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions regarding this Privacy Policy, or if you wish to exercise your data rights, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Truly Grit LLP</p>
                  <p>
                    Email: <a href="mailto:privacy@trulygrit.com" className="text-primary hover:underline">privacy@trulygrit.com</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
