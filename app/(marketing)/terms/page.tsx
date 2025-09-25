import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service | Truly Grit - Terms & Conditions',
  description: 'Read our terms and conditions for using Truly Grit services and website. Clear terms for our marketing agency services.',
  openGraph: {
    title: 'Terms of Service | Truly Grit - Terms & Conditions',
    description: 'Read our terms and conditions for using Truly Grit services and website. Clear terms for our marketing agency services.',
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
              Please read these terms and conditions carefully before using our services or website.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="mb-4">
                  Truly Grit LLP provides marketing services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Brand strategy and development</li>
                  <li>Digital marketing and advertising</li>
                  <li>Web development and design</li>
                  <li>Content creation and SEO</li>
                  <li>Social media management</li>
                  <li>Marketing consulting</li>
                </ul>
                <p>
                  All services are provided subject to separate service agreements and terms that will be provided before engagement.
                </p>
              </div>

              {/* Use License */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the materials on Truly Grit's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Truly Grit at any time.
                </p>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer</h2>
                <p className="mb-4">
                  The materials on Truly Grit's website are provided on an 'as is' basis. Truly Grit makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, Truly Grit does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>

              {/* Limitations */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitations</h2>
                <p>
                  In no event shall Truly Grit LLP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Truly Grit's website, even if Truly Grit or a Truly Grit authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>

              {/* Accuracy of Materials */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Truly Grit's website could include technical, typographical, or photographic errors. Truly Grit does not warrant that any of the materials on its website are accurate, complete, or current. Truly Grit may make changes to the materials contained on its website at any time without notice. However, Truly Grit does not make any commitment to update the materials.
                </p>
              </div>

              {/* Links */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Links</h2>
                <p>
                  Truly Grit has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Truly Grit of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications</h2>
                <p>
                  Truly Grit may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Intellectual Property Rights</h2>
                <p className="mb-4">
                  All content, trademarks, and other intellectual property on this website are the property of Truly Grit LLP or its licensors. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Reproduce, distribute, or display any content without written permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Create derivative works based on our content</li>
                  <li>Remove any copyright or trademark notices</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Payment Terms</h2>
                <p className="mb-4">
                  For paid services:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Payment terms will be specified in individual service agreements</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refunds are subject to our refund policy as outlined in service agreements</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Truly Grit LLP</p>
                  <p>
                    Email: <a href="mailto:legal@trulygrit.com" className="text-primary hover:underline">legal@trulygrit.com</a>
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
