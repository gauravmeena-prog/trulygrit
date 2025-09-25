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
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the Truly Grit website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Truly Grit's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>Service Terms</h2>
            <h3>Project Scope and Deliverables</h3>
            <p>
              All project scopes, deliverables, timelines, and pricing are outlined in individual service agreements. Any changes to the original scope must be agreed upon in writing by both parties.
            </p>

            <h3>Payment Terms</h3>
            <p>
              Payment terms are specified in individual service agreements. Generally, we require an upfront deposit before work begins, with remaining payments due upon completion of milestones or project phases.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              Upon full payment, clients receive ownership of custom work created specifically for their project. Truly Grit retains the right to use general methodologies, techniques, and tools developed during the project.
            </p>

            <h2>Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing timely feedback and approvals</li>
              <li>Supplying necessary materials and information</li>
              <li>Making payments according to agreed terms</li>
              <li>Ensuring content provided does not infringe on third-party rights</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Truly Grit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Truly Grit's website, even if Truly Grit or a Truly Grit authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on Truly Grit's website could include technical, typographical, or photographic errors. Truly Grit does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2>Links</h2>
            <p>
              Truly Grit has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Truly Grit of the site.
            </p>

            <h2>Modifications</h2>
            <p>
              Truly Grit may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate a service agreement with written notice. Upon termination, clients are responsible for payment of all work completed up to the termination date.
            </p>

            <h2>Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: legal@trulygrit.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Business Street, City, State 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
