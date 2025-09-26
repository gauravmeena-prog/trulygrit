import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, ExternalLink, Calendar, MapPin, Users, Target, TrendingUp, Heart, MessageCircle, Share, Bookmark } from 'lucide-react'

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

          {/* Video Showcase - Clean Design */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Work in Action</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the transformation we delivered through our content creation and campaign execution
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* YouTube Campus Tour */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">YT</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-gray-900">Dhirubhai Ambani University</span>
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Campus Tour Video</p>
                    </div>
                  </div>
                  <Link 
                    href="https://youtu.be/MnoudliA_oY"
                    target="_blank"
                    className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Watch Video
                  </Link>
                </div>
                
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Campus Tour Video</h4>
                      <p className="text-white/80 text-sm">Professional video showcasing DAU campus facilities</p>
                    </div>
                  </div>
                  
                  {/* YouTube Branding */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                      YouTube
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <Heart className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
                      <MessageCircle className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                      <Share className="h-6 w-6 text-gray-600 hover:text-green-500 cursor-pointer transition-colors" />
                    </div>
                    <Bookmark className="h-6 w-6 text-gray-600 hover:text-yellow-500 cursor-pointer transition-colors" />
                  </div>
                  
                  <div className="text-sm font-semibold text-gray-900 mb-2">259 likes</div>
                  
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">daiictofficial</span> UG Admissions Open for 2025! 
                    Explore our world-class campus and facilities. Apply now for undergraduate programs.
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">View all 15 comments</div>
                </div>
              </div>

              {/* Instagram Reel */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IG</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-gray-900">daiictofficial</span>
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">1,061 posts · 10K followers</p>
                    </div>
                  </div>
                  <Link 
                    href="https://www.instagram.com/reel/DJQNHBkIQFQ/?utm_source=ig_embed&ig_rid=6c942f0d-4e4d-42c7-81a8-804e3c02d76f"
                    target="_blank"
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    Watch Reel
                  </Link>
                </div>
                
                {/* Reel Thumbnail */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-orange-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="h-6 w-6 text-primary ml-1" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Instagram Reel</h4>
                      <p className="text-white/80 text-sm">Engaging social content for admissions</p>
                    </div>
                  </div>
                  
                  {/* Instagram Branding */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded text-sm font-bold">
                      Instagram
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <Heart className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
                      <MessageCircle className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                      <Share className="h-6 w-6 text-gray-600 hover:text-green-500 cursor-pointer transition-colors" />
                    </div>
                    <Bookmark className="h-6 w-6 text-gray-600 hover:text-yellow-500 cursor-pointer transition-colors" />
                  </div>
                  
                  <div className="text-sm font-semibold text-gray-900 mb-2">1.2K likes</div>
                  
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">daiictofficial</span> Campus life at DAU! 
                    From coding competitions to cultural events, experience the vibrant student community.
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">View all 23 comments</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Results - Clean Layout */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Results</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measurable impact across all campaign objectives
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">42%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Increase</div>
                <div className="text-gray-600 text-sm">Agency-based applications</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Lower Cost</div>
                <div className="text-gray-600 text-sm">Reduced ad spend</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2x</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">More Leads</div>
                <div className="text-gray-600 text-sm">Generated vs. previous year</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24th</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Anniversary</div>
                <div className="text-gray-600 text-sm">Years of excellence</div>
              </div>
            </div>
          </div>

          {/* Services - Simple List */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Services Delivered</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions across all marketing channels
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Brand Transformation</h4>
                    <p className="text-gray-600 text-sm">Complete institutional rebrand from DA-IICT to DAU</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Digital Strategy</h4>
                    <p className="text-gray-600 text-sm">Comprehensive digital presence overhaul</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">University Rebranding</h4>
                    <p className="text-gray-600 text-sm">Strategic positioning for future growth</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Content Creation</h4>
                    <p className="text-gray-600 text-sm">Professional video and social content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Worked - Simple Section */}
          <div className="mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Why It Worked</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A holistic, data-driven approach that delivered results
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Holistic Approach</h4>
                  <p className="text-gray-600 text-sm">Balanced performance marketing, branding, content, outreach & tech</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Trust Building</h4>
                  <p className="text-gray-600 text-sm">Showcased DAU's culture, placements, and faculty via extensive content</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Data-Driven</h4>
                  <p className="text-gray-600 text-sm">Iterated campaigns, pages & messaging in real time based on data</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Conversion Focus</h4>
                  <p className="text-gray-600 text-sm">Nurturing of leads ensured students complete the applications</p>
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