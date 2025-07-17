import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "EcommerceMax",
      description: "A high-converting e-commerce platform that increased client sales by 400% within 6 months.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Stripe", "AI Recommendations"],
      category: "Web Development",
      results: "400% increase in sales",
      link: "#",
    },
    {
      title: "AutoFlow CRM",
      description: "AI-powered CRM system that automates lead qualification and follow-ups, saving 20 hours per week.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "AI/ML", "Automation"],
      category: "AI Automation",
      results: "20 hours saved weekly",
      link: "#",
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial analytics dashboard with predictive insights for investment decisions.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "D3.js", "Real-time Data"],
      category: "Web Development",
      results: "50% faster decisions",
      link: "#",
    },
    {
      title: "ChatBot Supreme",
      description: "Intelligent customer service bot that handles 90% of inquiries without human intervention.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["NLP", "Machine Learning", "Integration"],
      category: "AI Automation",
      results: "90% automation rate",
      link: "#",
    },
    {
      title: "SaaS Platform Pro",
      description: "Multi-tenant SaaS platform serving 10,000+ users with 99.9% uptime and lightning-fast performance.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "PostgreSQL", "AWS"],
      category: "Web Development",
      results: "99.9% uptime",
      link: "#",
    },
    {
      title: "Smart Inventory AI",
      description: "Predictive inventory management system that reduced waste by 60% and optimized stock levels.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "Analytics"],
      category: "AI Automation",
      results: "60% waste reduction",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Our Work
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Projects That
            <span className="block text-emerald-600">Dominate Markets</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Every project we deliver is a testament to our commitment to excellence and our ability to transform
            businesses through technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-white"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className={
                        project.category === "AI Automation"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-emerald-100 text-emerald-800"
                      }
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Result</div>
                      <div className="font-semibold text-emerald-600">{project.results}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Project Impact</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Numbers don't lie. Here's the measurable impact we've delivered for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$2M+</div>
              <div className="text-slate-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">300%</div>
              <div className="text-slate-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it—hear from the businesses we've transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-slate-800 border-slate-700">
              <CardContent className="p-0">
                <p className="text-slate-300 mb-6 text-lg">
                  "ThugCorp transformed our entire business model. The AI automation they built saves us 30 hours per
                  week and increased our efficiency by 200%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Michael Johnson</div>
                    <div className="text-slate-400">CEO, TechFlow Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-slate-800 border-slate-700">
              <CardContent className="p-0">
                <p className="text-slate-300 mb-6 text-lg">
                  "The web platform they built for us is absolutely incredible. Our conversion rates tripled within the
                  first month of launch."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">SK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Kim</div>
                    <div className="text-slate-400">Founder, Digital Dynamics</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's create the next project that dominates your industry and transforms your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8 py-3">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
