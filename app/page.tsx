import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Bot, Zap, Star, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionizing Digital Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            We Don't Just Build
            <span className="block text-emerald-600">We Dominate</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ThugCorp delivers cutting-edge web development and AI automation solutions that don't just meet
            expectations—they obliterate them. Ready to unleash your digital potential?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">3x</div>
              <div className="text-slate-600">Faster Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in two core areas that drive modern business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Web Development</h3>
                <p className="text-slate-600 mb-6">
                  From blazing-fast websites to complex web applications, we craft digital experiences that convert
                  visitors into customers.
                </p>
                <Button asChild variant="outline" className="group bg-transparent">
                  <Link href="/services">
                    Learn More <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Automation</h3>
                <p className="text-slate-600 mb-6">
                  Streamline your operations with intelligent automation solutions that work 24/7 to boost your
                  productivity and profits.
                </p>
                <Button asChild variant="outline" className="group bg-transparent">
                  <Link href="/services">
                    Learn More <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl text-white mb-8 leading-relaxed">
            "ThugCorp didn't just deliver a website—they delivered a weapon. Our conversion rates increased by 300%
            within the first month."
          </blockquote>
          <div className="text-slate-300">
            <div className="font-semibold">Sarah Johnson</div>
            <div>CEO, TechStart Inc.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful businesses that chose ThugCorp to transform their digital presence.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8 py-3">
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
