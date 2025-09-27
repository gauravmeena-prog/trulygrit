import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy - Truly Grit',
  description: 'Learn how Truly Grit collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  openGraph: {
    title: 'Privacy Policy - Truly Grit',
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
              Last updated: June 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
              <p className="text-red-800 font-semibold">
                <strong>IMPORTANT LEGAL NOTICE:</strong> By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and all applicable laws and regulations. If you do not agree with any part of this policy, you must immediately discontinue use of this website.
              </p>
            </div>

            <h2>1. DEFINITIONS AND INTERPRETATION</h2>
            <p>
              <strong>"Company," "we," "us," or "our"</strong> refers to Truly Grit Marketing Agency and all its affiliates, subsidiaries, and related entities. <strong>"You," "your," or "user"</strong> refers to any individual who accesses, browses, or uses this website. <strong>"Personal Information"</strong> means any information that can be used to identify, contact, or locate an individual, including but not limited to names, email addresses, phone numbers, IP addresses, and any other data that can be linked to a specific person.
            </p>

            <h2>2. ACCEPTANCE OF TERMS</h2>
            <p>
              <strong>MANDATORY ACCEPTANCE:</strong> Your use of this website constitutes your express, irrevocable, and legally binding agreement to this Privacy Policy. This agreement is governed by the laws of the jurisdiction in which Truly Grit operates, without regard to conflict of law principles. By continuing to use this website, you waive any right to contest the validity or enforceability of this Privacy Policy.
            </p>

            <h2>3. INFORMATION COLLECTION - COMPREHENSIVE SCOPE</h2>
            <h3>3.1 Personal Information Collection</h3>
            <p>
              <strong>EXPLICIT CONSENT REQUIRED:</strong> We collect personal information ONLY when you voluntarily provide it through:
            </p>
            <ul>
              <li><strong>Contact Forms:</strong> Name, email, phone number, company details, project requirements</li>
              <li><strong>Newsletter Subscriptions:</strong> Email address and communication preferences</li>
              <li><strong>Service Inquiries:</strong> Business information, project scope, budget details</li>
              <li><strong>Direct Communications:</strong> Any information you provide in emails, phone calls, or other communications</li>
            </ul>

            <h3>3.2 Automatic Data Collection</h3>
            <p>
              <strong>COMPREHENSIVE TRACKING:</strong> We automatically collect and store the following information:
            </p>
            <ul>
              <li><strong>Technical Data:</strong> IP addresses, browser type, operating system, device information, screen resolution</li>
              <li><strong>Usage Analytics:</strong> Pages visited, time spent, click patterns, navigation paths, bounce rates</li>
              <li><strong>Location Data:</strong> Geographic location, time zone, country, city (derived from IP address)</li>
              <li><strong>Referral Information:</strong> Source website, search terms, campaign data, UTM parameters</li>
              <li><strong>Performance Metrics:</strong> Page load times, error logs, server response times</li>
              <li><strong>Security Data:</strong> Login attempts, suspicious activity, security events</li>
            </ul>

            <h2>4. DATA USAGE - EXPLICIT PURPOSES</h2>
            <p>
              <strong>LEGITIMATE BUSINESS INTERESTS:</strong> We use collected information exclusively for:
            </p>
            <ul>
              <li><strong>Service Delivery:</strong> Providing marketing services, project management, client communication</li>
              <li><strong>Business Operations:</strong> Internal analytics, service improvement, quality assurance</li>
              <li><strong>Legal Compliance:</strong> Meeting regulatory requirements, tax obligations, audit trails</li>
              <li><strong>Security Purposes:</strong> Fraud prevention, unauthorized access detection, system protection</li>
              <li><strong>Marketing Communications:</strong> Newsletter distribution, promotional content (with explicit consent)</li>
              <li><strong>Client Relationship Management:</strong> Account management, support services, project updates</li>
            </ul>

            <h2>5. DATA SHARING - STRICT LIMITATIONS</h2>
            <p>
              <strong>NO SALE POLICY:</strong> We DO NOT sell, rent, lease, or trade your personal information to third parties for monetary gain.
            </p>
            <p>
              <strong>LIMITED SHARING:</strong> We may share information ONLY in these specific circumstances:
            </p>
            <ul>
              <li><strong>Legal Requirements:</strong> Court orders, subpoenas, government investigations, regulatory compliance</li>
              <li><strong>Business Transfers:</strong> Mergers, acquisitions, asset sales (with prior notice)</li>
              <li><strong>Service Providers:</strong> Trusted third-party vendors under strict confidentiality agreements</li>
              <li><strong>Emergency Situations:</strong> Protecting life, safety, or property in genuine emergencies</li>
              <li><strong>Consent-Based Sharing:</strong> Explicit written consent for specific sharing purposes</li>
            </ul>

            <h2>6. DATA SECURITY - COMPREHENSIVE PROTECTION</h2>
            <p>
              <strong>SECURITY MEASURES:</strong> We implement industry-standard security measures including:
            </p>
            <ul>
              <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission, AES-256 encryption for data at rest</li>
              <li><strong>Access Controls:</strong> Multi-factor authentication, role-based access, regular access reviews</li>
              <li><strong>Network Security:</strong> Firewalls, intrusion detection, DDoS protection, VPN access</li>
              <li><strong>Data Backup:</strong> Regular backups, offsite storage, disaster recovery procedures</li>
              <li><strong>Staff Training:</strong> Security awareness training, confidentiality agreements, background checks</li>
            </ul>
            <p>
              <strong>DISCLAIMER:</strong> Despite our security measures, no internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security and disclaim all liability for security breaches beyond our reasonable control.
            </p>

            <h2>7. COOKIES AND TRACKING - COMPREHENSIVE DISCLOSURE</h2>
            <p>
              <strong>COOKIE USAGE:</strong> We use cookies, web beacons, pixels, and similar technologies for:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Website functionality, security, user authentication</li>
              <li><strong>Analytics Cookies:</strong> Traffic analysis, user behavior, performance monitoring</li>
              <li><strong>Marketing Cookies:</strong> Ad targeting, conversion tracking, remarketing (with consent)</li>
              <li><strong>Preference Cookies:</strong> Language settings, user preferences, customization</li>
            </ul>
            <p>
              <strong>CONTROL OPTIONS:</strong> You can control cookies through browser settings, but disabling certain cookies may affect website functionality.
            </p>

            <h2>8. USER RIGHTS - LIMITED SCOPE</h2>
            <p>
              <strong>APPLICABLE RIGHTS:</strong> Depending on your jurisdiction, you may have limited rights including:
            </p>
            <ul>
              <li><strong>Access Rights:</strong> Request copies of your personal information (subject to verification)</li>
              <li><strong>Correction Rights:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion Rights:</strong> Request deletion of personal information (subject to legal obligations)</li>
              <li><strong>Portability Rights:</strong> Request data in a portable format (where technically feasible)</li>
              <li><strong>Objection Rights:</strong> Object to certain processing activities</li>
            </ul>
            <p>
              <strong>EXERCISE OF RIGHTS:</strong> To exercise these rights, contact us at privacy@trulygrit.com with proper identification and specific request details. We reserve the right to verify your identity and may refuse requests that are excessive, unfounded, or infringe on others' rights.
            </p>

            <h2>9. THIRD-PARTY DISCLAIMER</h2>
            <p>
              <strong>EXTERNAL LINKS:</strong> Our website may contain links to third-party websites. We have NO control over these external sites and accept NO responsibility for their privacy practices, content, security, or any damages arising from your use of such sites. Your use of third-party sites is entirely at your own risk.
            </p>

            <h2>10. CHILDREN'S PRIVACY - STRICT PROHIBITION</h2>
            <p>
              <strong>AGE RESTRICTION:</strong> Our services are STRICTLY PROHIBITED for individuals under 18 years of age. We do not knowingly collect, store, or process personal information from minors. If we discover that we have collected information from a minor, we will immediately delete such information and terminate any associated accounts.
            </p>

            <h2>11. INTERNATIONAL DATA TRANSFERS</h2>
            <p>
              <strong>CROSS-BORDER PROCESSING:</strong> Your information may be transferred to and processed in countries other than your own. By using our services, you consent to such transfers and acknowledge that different countries may have different data protection laws.
            </p>

            <h2>12. DATA RETENTION - EXPLICIT TIMEFRAMES</h2>
            <p>
              <strong>RETENTION PERIODS:</strong> We retain personal information for the following periods:
            </p>
            <ul>
              <li><strong>Active Clients:</strong> Duration of business relationship plus 7 years</li>
              <li><strong>Marketing Data:</strong> Until consent is withdrawn or 3 years of inactivity</li>
              <li><strong>Website Analytics:</strong> 26 months (Google Analytics standard)</li>
              <li><strong>Legal Requirements:</strong> As required by applicable laws and regulations</li>
            </ul>

            <h2>13. POLICY CHANGES - UNILATERAL RIGHT</h2>
            <p>
              <strong>MODIFICATION RIGHTS:</strong> We reserve the absolute right to modify this Privacy Policy at any time without prior notice. Changes become effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified policy. We are not obligated to notify you of changes, and you are responsible for regularly reviewing this policy.
            </p>

            <h2>14. LIMITATION OF LIABILITY</h2>
            <p>
              <strong>COMPREHENSIVE DISCLAIMER:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRULY GRIT SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THIS WEBSITE OR OUR PRIVACY PRACTICES, INCLUDING BUT NOT LIMITED TO DATA BREACHES, UNAUTHORIZED ACCESS, DATA LOSS, OR ANY OTHER PRIVACY-RELATED INCIDENTS.
            </p>

            <h2>15. GOVERNING LAW AND JURISDICTION</h2>
            <p>
              <strong>LEGAL FRAMEWORK:</strong> This Privacy Policy is governed by the laws of the jurisdiction where Truly Grit operates. Any disputes arising from this policy shall be resolved exclusively in the courts of that jurisdiction. You consent to the personal jurisdiction of such courts and waive any objections to venue.
            </p>

            <h2>16. SEVERABILITY</h2>
            <p>
              <strong>ENFORCEABILITY:</strong> If any provision of this Privacy Policy is deemed invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. We reserve the right to modify invalid provisions to make them enforceable while preserving the original intent.
            </p>

            <h2>17. CONTACT INFORMATION</h2>
            <p>
              <strong>PRIVACY INQUIRIES:</strong> For questions, concerns, or requests related to this Privacy Policy, contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> privacy@trulygrit.com</li>
              <li><strong>Phone:</strong> +91 7023281039</li>
              <li><strong>Response Time:</strong> We will respond to privacy inquiries within 30 business days</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
              <p className="text-yellow-800 font-semibold">
                <strong>FINAL NOTICE:</strong> This Privacy Policy constitutes the entire agreement between you and Truly Grit regarding privacy matters. No other representations, warranties, or agreements regarding privacy are valid unless explicitly stated in writing and signed by an authorized representative of Truly Grit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
