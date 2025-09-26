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

          {/* Professional Work Showcase */}
          <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Comprehensive Work</span>
                </div>
                
                <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight mb-8">
                  <span className="block text-gray-900/90">
                    Campaign
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                    Excellence
                  </span>
                </h2>
                
                <div className="mt-8 mb-6">
                  <div className="mx-auto h-1 w-32 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
                </div>
                
                <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
                  A comprehensive breakdown of our multi-channel campaign execution, showcasing the depth and scale of work delivered for Dhirubhai Ambani University.
                </p>
              </div>

              {/* Content Creation Performance - Premium Layout */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Content Creation Performance</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Exceeding expectations across all content formats
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  
                  {/* Static/Carousel Posts */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">📸</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Static/Carousel Posts</h4>
                          <p className="text-gray-600">March - June 2024</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Planned:</span>
                          <span className="font-bold text-gray-900 text-lg">72 posts</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Completed:</span>
                          <span className="font-bold text-green-600 text-lg">120 posts</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Completion Rate</span>
                            <span className="text-sm font-bold text-green-600">167%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reels/Videos */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">🎬</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Reels/Videos</h4>
                          <p className="text-gray-600">March - June 2024</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Planned:</span>
                          <span className="font-bold text-gray-900 text-lg">72 videos</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Completed:</span>
                          <span className="font-bold text-purple-600 text-lg">108 videos</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Completion Rate</span>
                            <span className="text-sm font-bold text-purple-600">150%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stories */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">📱</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Stories</h4>
                          <p className="text-gray-600">March - June 2024</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Planned:</span>
                          <span className="font-bold text-gray-900 text-lg">95 stories</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Completed:</span>
                          <span className="font-bold text-orange-600 text-lg">76 + PM Stories</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Completion Rate</span>
                            <span className="text-sm font-bold text-orange-600">80%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-1000" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-Channel Campaign - Premium Layout */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Multi-Channel Campaign</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Integrated approach across all digital touchpoints
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  
                  {/* Performance Marketing */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">📊</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Performance Marketing</h4>
                          <p className="text-gray-600">Google, Meta, LinkedIn Ads</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Strategic ad campaigns</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Lead generation optimization</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Conversion tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Marketing */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">💬</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">WhatsApp Marketing</h4>
                          <p className="text-gray-600">Lead Conversion & Engagement</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Automated messaging</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Lead nurturing sequences</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Response time optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Marketing */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">📧</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Email Marketing</h4>
                          <p className="text-gray-600">Lead Conversion & Nurturing</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Automated email sequences</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Personalized content</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Performance tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Delivered - Premium Layout */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Services Delivered</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive service delivery across all campaign aspects
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  
                  {/* Strategic Planning */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">🎯</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Strategic Planning</h4>
                          <p className="text-gray-600">Campaign strategy & execution</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Campaign coordination</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Performance monitoring</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Strategy optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Creative Production */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 border border-pink-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">📷</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Creative Production</h4>
                          <p className="text-gray-600">Visual content creation</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Professional photoshoots</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Video production</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Creative asset development</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Creation */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 border border-indigo-200">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">🎨</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">Content Creation</h4>
                          <p className="text-gray-600">Multi-format content</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Social media content</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Video content</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Static designs</span>
                        </div>
                      </div>
                    </div>
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

          {/* Why It Worked - SPECTACULAR DESIGN */}
          <div className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              
              {/* SPECTACULAR HEADER */}
              <div className="text-center mb-24">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-full border border-primary/30 mb-12 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Success Formula</span>
                </div>
                
                <h2 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight mb-12">
                  <span className="block text-white/90">
                    Why
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-4">
                    It Worked
                  </span>
                </h2>
                
                <div className="mt-12 mb-8">
                  <div className="mx-auto h-2 w-40 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
                </div>
                
                <p className="text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-medium">
                  A holistic, data-driven approach that delivered exceptional results through strategic execution and continuous optimization.
                </p>
              </div>

              {/* SPECTACULAR GRID - 4 COLUMNS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                
                {/* Holistic Approach - SPECTACULAR */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                    <div className="text-center">
                      <div className="relative mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <span className="text-4xl">🎯</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">Holistic Approach</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Balanced performance marketing, branding, content, outreach & tech integration for maximum impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data-Driven - SPECTACULAR */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                    <div className="text-center">
                      <div className="relative mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <span className="text-4xl">📊</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">Data-Driven</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Iterated campaigns, pages & messaging in real time based on comprehensive user-behavior data analysis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Building - SPECTACULAR */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                    <div className="text-center">
                      <div className="relative mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <span className="text-4xl">🤝</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">Trust Building</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Showcased DAU's culture, placements, and faculty through extensive, authentic content creation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conversion Focus - SPECTACULAR */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                    <div className="text-center">
                      <div className="relative mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <span className="text-4xl">🔄</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full animate-ping"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">Conversion Focus</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Strategic nurturing of leads throughout the funnel ensured students complete their applications successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ACCENT */}
              <div className="text-center mt-20">
                <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-bold text-lg">Proven Results • Measurable Impact</span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
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