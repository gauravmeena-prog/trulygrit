import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, ExternalLink, Calendar, MapPin, Users, Target, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Our Work | Truly Grit Case Studies & Portfolio',
  description: 'Explore our successful marketing campaigns and case studies. See how we transformed brands and delivered exceptional results through strategic marketing solutions.',
  openGraph: {
    title: 'Our Work | Truly Grit Case Studies & Portfolio',
    description: 'Explore our successful marketing campaigns and case studies. See how we transformed brands and delivered exceptional results through strategic marketing solutions.',
    url: 'https://truly-grit.vercel.app/work',
    type: 'website',
  },
  twitter: {
    title: 'Our Work | Truly Grit Case Studies & Portfolio',
    description: 'Explore our successful marketing campaigns and case studies. See how we transformed brands and delivered exceptional results through strategic marketing solutions.',
  },
}

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block text-gray-900">Our Work</span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Real Results
              </span>
            </h1>
            
            <div className="mt-8 mb-6">
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium max-w-3xl mx-auto">
              Founded June 2025. We build revenue engines that deliver results through speed, measurement, and proven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Project Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full mb-8">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Dhirubhai Ambani University</span>
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-gray-700">2024</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="block text-gray-900">DA-IICT to DAU</span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Complete Brand Transformation
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium max-w-4xl mx-auto">
              Led comprehensive brand transformation for Dhirubhai Ambani Institute of Information and Communication Technology's 
              transition to Dhirubhai Ambani University. Delivered strategic rebranding, digital presence overhaul, and admission campaign management for 2025.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mb-20">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/dau_gate.jpg"
                alt="Dhirubhai Ambani University Campus Gate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white/90 text-lg font-semibold">Dhirubhai Ambani University</span>
                    <span className="text-white/60">•</span>
                    <span className="text-white/60 text-lg">Established 1999</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Celebrating 24 Years of Academic Excellence
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Video Showcase - Unique Layout */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Work in Action</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the transformation we delivered through our content creation and campaign execution
              </p>
            </div>
            
            {/* YouTube Video - Full Width */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">YT</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Campus Tour Video</h4>
                    <p className="text-gray-600">Dhirubhai Ambani University • Professional campus showcase</p>
                  </div>
                </div>
                
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe 
                    className="w-full aspect-video rounded-2xl shadow-lg" 
                    src="https://www.youtube.com/embed/MnoudliA_oY?si=iTniRKkgEm0PaCoy" 
                    title="YouTube video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                
              </div>
            </div>

            {/* Instagram Reel - Full Width */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IG</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Instagram Reel</h4>
                    <p className="text-gray-600">daiictofficial • 1,061 posts • 10K followers</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full max-w-md mx-auto">
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-orange-500/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Instagram Reel</h4>
                        <p className="text-white/80 text-sm">Campus life at DAU</p>
                      </div>
                    </div>
                    
                    {/* Instagram Branding */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded text-sm font-bold">
                        Instagram
                      </div>
                    </div>
                    
                    {/* Click to view */}
                    <Link 
                      href="https://www.instagram.com/reel/DJQNHBkIQFQ/?utm_source=ig_embed&ig_rid=6c942f0d-4e4d-42c7-81a8-804e3c02d76f"
                      target="_blank"
                      className="absolute inset-0 rounded-2xl"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Scope of Work - Comprehensive Data */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Scope of Work</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed breakdown of content creation, media spend, and campaign execution
              </p>
            </div>
            
            {/* Content Creation Metrics */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Content Creation Performance</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                
                {/* Static/Carousel Posts */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">📸</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Static/Carousel Posts</h5>
                    <p className="text-gray-600">March - June 2024</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Planned:</span>
                      <span className="font-bold text-gray-900">72 posts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Completed:</span>
                      <span className="font-bold text-green-600">120 posts</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '167%'}}></div>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">167% completion rate</p>
                  </div>
                </div>

                {/* Reels/Videos */}
                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">🎬</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Reels/Videos</h5>
                    <p className="text-gray-600">March - June 2024</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Planned:</span>
                      <span className="font-bold text-gray-900">72 videos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Completed:</span>
                      <span className="font-bold text-purple-600">108 videos</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '150%'}}></div>
                    </div>
                    <p className="text-sm text-purple-600 font-semibold">150% completion rate</p>
                  </div>
                </div>

                {/* Stories */}
                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">📱</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Stories</h5>
                    <p className="text-gray-600">March - June 2024</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Planned:</span>
                      <span className="font-bold text-gray-900">95 stories</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Completed:</span>
                      <span className="font-bold text-orange-600">76 + PM Stories</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <p className="text-sm text-orange-600 font-semibold">80% completion rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Spend Breakdown */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Media Spend Analysis</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
                {/* Performance Marketing */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">📊</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Performance Marketing</h5>
                    <p className="text-gray-600">Google, Meta, LinkedIn Ads</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Spent:</span>
                      <span className="font-bold text-gray-900">₹3.18 Cr</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Budget Allocated:</span>
                      <span className="font-bold text-gray-900">₹4.23 Cr</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-sm text-blue-600 font-semibold">75% budget utilization</p>
                  </div>
                </div>

                {/* WhatsApp Marketing */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">💬</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">WhatsApp Marketing</h5>
                    <p className="text-gray-600">Lead Conversion & CTR</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Spent:</span>
                      <span className="font-bold text-gray-900">₹1.25 L</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Budget Allocated:</span>
                      <span className="font-bold text-gray-900">₹1.5 L</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '83%'}}></div>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">83% budget utilization</p>
                  </div>
                </div>

                {/* Email Marketing */}
                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">📧</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Email Marketing</h5>
                    <p className="text-gray-600">Lead Conversion & CTR</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Spent:</span>
                      <span className="font-bold text-gray-900">₹20K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Budget Allocated:</span>
                      <span className="font-bold text-gray-900">₹1 L</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <p className="text-sm text-purple-600 font-semibold">20% budget utilization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agency Charges */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Agency Investment</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                
                {/* Agency Charges */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">🏢</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Agency Charges</h5>
                    <p className="text-gray-600">Strategic planning & execution</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">₹12 L</div>
                    <p className="text-gray-600">4 months investment</p>
                  </div>
                </div>

                {/* Photography Charges */}
                <div className="p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">📷</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Photography</h5>
                    <p className="text-gray-600">Creative asset production</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">₹2 L</div>
                    <p className="text-gray-600">4 months investment</p>
                  </div>
                </div>

                {/* Content Creation */}
                <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">🎨</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Content Creation</h5>
                    <p className="text-gray-600">Banners, videos, static posts</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">₹4 L</div>
                    <p className="text-gray-600">4 months investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Results - Unique Layout */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Results</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measurable impact across all campaign objectives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl border border-primary/10">
                <div className="text-5xl font-bold text-primary mb-3">42%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Increase</div>
                <div className="text-gray-600">Agency-based applications</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl border border-primary/10">
                <div className="text-5xl font-bold text-primary mb-3">25%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Lower Cost</div>
                <div className="text-gray-600">Reduced ad spend</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl border border-primary/10">
                <div className="text-5xl font-bold text-primary mb-3">2x</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">More Leads</div>
                <div className="text-gray-600">Generated vs. previous year</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl border border-primary/10">
                <div className="text-5xl font-bold text-primary mb-3">24th</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Anniversary</div>
                <div className="text-gray-600">Years of excellence</div>
              </div>
            </div>
          </div>

          {/* Services - Unique Layout */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Services Delivered</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions across all marketing channels
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Brand Transformation</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">Complete institutional rebrand from DA-IICT to DAU with strategic positioning for future growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Digital Strategy</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">Comprehensive digital presence overhaul with performance optimization</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">University Rebranding</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">Strategic positioning for future growth with legacy preservation</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Content Creation</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">Professional video and social content for maximum engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Worked - Unique Layout */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">Why It Worked</h3>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                  A holistic, data-driven approach that delivered results
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Holistic Approach</h4>
                  <p className="text-gray-300 leading-relaxed">Balanced performance marketing, branding, content, outreach & tech</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Trust Building</h4>
                  <p className="text-gray-300 leading-relaxed">Showcased DAU's culture, placements, and faculty via extensive content</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Data-Driven</h4>
                  <p className="text-gray-300 leading-relaxed">Iterated campaigns, pages & messaging in real time based on data</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Conversion Focus</h4>
                  <p className="text-gray-300 leading-relaxed">Nurturing of leads ensured students complete the applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors shadow-lg"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                See Our Pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}