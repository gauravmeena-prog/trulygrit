import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service | Truly Grit',
  description: 'Read our Terms of Service to understand the terms and conditions for using Truly Grit\'s website and services.',
  openGraph: {
    title: 'Terms of Service | Truly Grit',
    description: 'Read our Terms of Service to understand the terms and conditions for using Truly Grit\'s website and services.',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms of Service' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Terms of Service
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
                <strong>CRITICAL LEGAL NOTICE:</strong> By accessing, browsing, or using this website or any services provided by Truly Grit, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. If you do not agree with any part of these terms, you must immediately discontinue all use of this website and services. Your continued use constitutes irrevocable acceptance of these terms.
              </p>
            </div>

            <h2>1. DEFINITIONS AND INTERPRETATION</h2>
            <p>
              <strong>"Company," "we," "us," "our," or "Truly Grit"</strong> refers to Truly Grit Marketing Agency and all its affiliates, subsidiaries, employees, agents, and representatives. <strong>"You," "your," "user," or "client"</strong> refers to any individual or entity accessing, browsing, or using this website or our services. <strong>"Services"</strong> includes but is not limited to marketing consulting, digital marketing, brand strategy, content creation, and any other services provided by Truly Grit. <strong>"Website"</strong> refers to trulygrit.com and all associated domains, subdomains, and digital properties.
            </p>

            <h2>2. ACCEPTANCE OF TERMS - MANDATORY AGREEMENT</h2>
            <p>
              <strong>BINDING CONTRACT:</strong> These Terms of Service constitute a legally binding agreement between you and Truly Grit. By accessing this website or using our services, you represent and warrant that you have the legal capacity to enter into this agreement. This agreement is governed by the laws of the jurisdiction where Truly Grit operates, without regard to conflict of law principles. You waive any right to contest the validity, enforceability, or interpretation of these terms.
            </p>

            <h2>3. WEBSITE USE LICENSE - RESTRICTED PERMISSIONS</h2>
            <p>
              <strong>LIMITED LICENSE:</strong> Truly Grit grants you a limited, non-exclusive, non-transferable, revocable license to access and use this website solely for lawful purposes. This license does NOT include the right to:
            </p>
            <ul>
              <li><strong>Commercial Use:</strong> Use the website or its content for any commercial purpose without written permission</li>
              <li><strong>Modification:</strong> Modify, adapt, alter, or create derivative works from any content</li>
              <li><strong>Reverse Engineering:</strong> Attempt to reverse engineer, decompile, or disassemble any software</li>
              <li><strong>Data Mining:</strong> Use automated systems to extract data or content</li>
              <li><strong>Unauthorized Access:</strong> Attempt to gain unauthorized access to restricted areas</li>
              <li><strong>Intellectual Property Infringement:</strong> Remove copyright notices or proprietary markings</li>
            </ul>

            <h2>4. SERVICE TERMS - COMPREHENSIVE CONDITIONS</h2>
            <h3>4.1 Service Scope and Limitations</h3>
            <p>
              <strong>EXPLICIT SCOPE:</strong> All services are provided subject to the following conditions:
            </p>
            <ul>
              <li><strong>Written Agreements:</strong> All service terms must be documented in signed written agreements</li>
              <li><strong>Scope Limitations:</strong> Services are limited to the specific scope outlined in individual contracts</li>
              <li><strong>Change Orders:</strong> Any scope changes require written approval and may incur additional charges</li>
              <li><strong>Performance Standards:</strong> Services will be performed using industry-standard practices and reasonable care</li>
              <li><strong>No Guarantees:</strong> We make no guarantees regarding specific results, outcomes, or performance metrics</li>
            </ul>

            <h3>4.2 Payment Terms - STRICT ENFORCEMENT</h3>
            <p>
              <strong>PAYMENT OBLIGATIONS:</strong> Payment terms are as follows:
            </p>
            <ul>
              <li><strong>Upfront Payment:</strong> 50% deposit required before work commences</li>
              <li><strong>Milestone Payments:</strong> Remaining balance due upon completion of agreed milestones</li>
              <li><strong>Late Fees:</strong> 1.5% monthly interest on overdue amounts</li>
              <li><strong>Collection Costs:</strong> Client responsible for all collection and legal costs</li>
              <li><strong>Work Suspension:</strong> Services may be suspended for non-payment</li>
              <li><strong>No Refunds:</strong> All payments are non-refundable except as required by law</li>
            </ul>

            <h3>4.3 Intellectual Property Rights</h3>
            <p>
              <strong>OWNERSHIP RIGHTS:</strong> Intellectual property ownership is governed as follows:
            </p>
            <ul>
              <li><strong>Client Materials:</strong> Client retains ownership of materials provided to Truly Grit</li>
              <li><strong>Work Product:</strong> Custom work becomes client property upon full payment</li>
              <li><strong>Truly Grit IP:</strong> We retain ownership of methodologies, tools, and general knowledge</li>
              <li><strong>Third-Party Rights:</strong> Client responsible for ensuring no infringement of third-party rights</li>
              <li><strong>License Rights:</strong> Client grants Truly Grit license to use work for portfolio purposes</li>
            </ul>

            <h2>5. CLIENT RESPONSIBILITIES - MANDATORY OBLIGATIONS</h2>
            <p>
              <strong>CLIENT DUTIES:</strong> Clients are responsible for:
            </p>
            <ul>
              <li><strong>Timely Communication:</strong> Providing feedback within 48 hours of requests</li>
              <li><strong>Material Provision:</strong> Supplying all necessary materials, content, and information</li>
              <li><strong>Payment Compliance:</strong> Making payments according to agreed terms</li>
              <li><strong>Content Accuracy:</strong> Ensuring all provided content is accurate and legally compliant</li>
              <li><strong>Access Provision:</strong> Providing necessary access to systems, accounts, and platforms</li>
              <li><strong>Approval Process:</strong> Following agreed approval processes and timelines</li>
              <li><strong>Legal Compliance:</strong> Ensuring all activities comply with applicable laws and regulations</li>
            </ul>

            <h2>6. LIMITATION OF LIABILITY - COMPREHENSIVE DISCLAIMER</h2>
            <p>
              <strong>MAXIMUM LIABILITY LIMITATION:</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, TRULY GRIT SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li><strong>Business Losses:</strong> Lost profits, revenue, business opportunities, or goodwill</li>
              <li><strong>Data Loss:</strong> Loss of data, information, or digital assets</li>
              <li><strong>Service Interruptions:</strong> Downtime, delays, or service unavailability</li>
              <li><strong>Third-Party Actions:</strong> Actions or omissions of third parties</li>
              <li><strong>Market Conditions:</strong> Changes in market conditions or industry trends</li>
              <li><strong>Force Majeure:</strong> Events beyond our reasonable control</li>
            </ul>
            <p>
              <strong>LIABILITY CAP:</strong> In no event shall Truly Grit's total liability exceed the amount paid by the client for the specific service giving rise to the claim in the 12 months preceding the claim.
            </p>

            <h2>7. WARRANTIES AND DISCLAIMERS</h2>
            <p>
              <strong>NO WARRANTIES:</strong> TRULY GRIT PROVIDES ALL SERVICES "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DISCLAIM ALL WARRANTIES REGARDING:
            </p>
            <ul>
              <li><strong>Service Results:</strong> Specific outcomes, performance metrics, or business results</li>
              <li><strong>Content Accuracy:</strong> Accuracy, completeness, or timeliness of information</li>
              <li><strong>System Availability:</strong> Uninterrupted or error-free service</li>
              <li><strong>Third-Party Services:</strong> Performance or availability of third-party platforms</li>
              <li><strong>Market Conditions:</strong> Changes in market conditions or industry trends</li>
            </ul>

            <h2>8. INDEMNIFICATION - CLIENT OBLIGATION</h2>
            <p>
              <strong>CLIENT INDEMNIFICATION:</strong> You agree to indemnify, defend, and hold harmless Truly Grit and its affiliates from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or related to:
            </p>
            <ul>
              <li><strong>Client Content:</strong> Your use of our services or violation of these terms</li>
              <li><strong>Third-Party Claims:</strong> Claims that your content infringes third-party rights</li>
              <li><strong>Legal Violations:</strong> Your violation of applicable laws or regulations</li>
              <li><strong>Negligent Acts:</strong> Your negligent or wrongful acts or omissions</li>
            </ul>

            <h2>9. TERMINATION - UNILATERAL RIGHTS</h2>
            <p>
              <strong>TERMINATION RIGHTS:</strong> Either party may terminate services with written notice. Truly Grit reserves the right to immediately terminate services for:
            </p>
            <ul>
              <li><strong>Payment Default:</strong> Non-payment or late payment</li>
              <li><strong>Breach of Terms:</strong> Violation of these terms or service agreements</li>
              <li><strong>Illegal Activity:</strong> Use of services for illegal or prohibited purposes</li>
              <li><strong>Non-Cooperation:</strong> Failure to provide necessary cooperation or materials</li>
            </ul>
            <p>
              <strong>POST-TERMINATION:</strong> Upon termination, all outstanding amounts become immediately due, and client remains liable for all costs and expenses incurred.
            </p>

            <h2>10. FORCE MAJEURE - COMPREHENSIVE COVERAGE</h2>
            <p>
              <strong>FORCE MAJEURE EVENTS:</strong> Truly Grit shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to:
            </p>
            <ul>
              <li><strong>Natural Disasters:</strong> Earthquakes, floods, hurricanes, pandemics</li>
              <li><strong>Government Actions:</strong> War, terrorism, government regulations, sanctions</li>
              <li><strong>Technical Failures:</strong> Internet outages, server failures, cyber attacks</li>
              <li><strong>Economic Conditions:</strong> Market crashes, economic recessions, currency fluctuations</li>
              <li><strong>Third-Party Actions:</strong> Actions of suppliers, vendors, or service providers</li>
            </ul>

            <h2>11. DISPUTE RESOLUTION - MANDATORY ARBITRATION</h2>
            <p>
              <strong>BINDING ARBITRATION:</strong> Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive any right to a jury trial and agree to resolve disputes on an individual basis, not as part of a class action.
            </p>

            <h2>12. GOVERNING LAW AND JURISDICTION</h2>
            <p>
              <strong>LEGAL FRAMEWORK:</strong> These terms are governed by the laws of the jurisdiction where Truly Grit operates. You consent to the personal jurisdiction of such courts and waive any objections to venue. Any legal action must be commenced within one year of the events giving rise to the claim.
            </p>

            <h2>13. MODIFICATIONS - UNILATERAL RIGHT</h2>
            <p>
              <strong>CHANGE RIGHTS:</strong> Truly Grit reserves the absolute right to modify these terms at any time without prior notice. Changes become effective immediately upon posting. Your continued use of the website or services after changes constitutes acceptance of the modified terms.
            </p>

            <h2>14. SEVERABILITY AND ENFORCEABILITY</h2>
            <p>
              <strong>SEVERABILITY:</strong> If any provision of these terms is deemed invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. We reserve the right to modify invalid provisions to make them enforceable while preserving the original intent.
            </p>

            <h2>15. ENTIRE AGREEMENT</h2>
            <p>
              <strong>COMPLETE AGREEMENT:</strong> These terms, together with any signed service agreements, constitute the entire agreement between you and Truly Grit. No other representations, warranties, or agreements are valid unless explicitly stated in writing and signed by an authorized representative of Truly Grit.
            </p>

            <h2>16. CONTACT INFORMATION</h2>
            <p>
              <strong>LEGAL INQUIRIES:</strong> For questions about these Terms of Service, contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> legal@trulygrit.com</li>
              <li><strong>Phone:</strong> +91 7023281039</li>
              <li><strong>Response Time:</strong> We will respond to legal inquiries within 30 business days</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
              <p className="text-yellow-800 font-semibold">
                <strong>FINAL LEGAL NOTICE:</strong> These Terms of Service constitute a legally binding contract. By using our website or services, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions. No other representations or agreements are valid unless explicitly stated in writing and signed by an authorized representative of Truly Grit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
