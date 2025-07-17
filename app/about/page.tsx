import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Zap, Award, ArrowRight, Code, Bot, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with 8+ years of experience building scalable web applications and leading development teams.",
    },
    {
      name: "Sarah Chen",
      role: "AI/ML Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Machine learning expert specializing in natural language processing and automation solutions for business applications.",
    },
    {
      name: "Marcus Thompson",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative designer focused on user-centered design principles and creating intuitive digital experiences that convert.",
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Agile project management specialist ensuring projects are delivered on time, within budget, and exceed expectations.",
    },
  ]

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We don't just build—we deliver measurable results that transform businesses and drive growth.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, leveraging cutting-edge technologies to give our clients competitive advantages.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Partnership",
      description:
        "We work as an extension of your team, understanding your goals and becoming invested in your success.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do, from code quality to client communication.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            About ThugCorp
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            We Don't Just Code
            <span className="block text-emerald-600">We Conquer</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Founded on the principle that technology should dominate problems, not create them. We're a team of digital
            warriors who turn ambitious ideas into market-dominating realities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                ThugCorp was born from frustration—frustration with agencies that over-promise and under-deliver, with
                developers who build pretty things that don't work, and with consultants who talk more than they code.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We decided to do things differently. No fluff, no excuses, just results. Since 2020, we've been helping
                businesses dominate their markets through superior web development and AI automation solutions.
              </p>
              <p className="text-lg text-slate-600">
                Today, we're proud to have transformed over 50 businesses, generated millions in revenue for our
                clients, and built a reputation as the go-to team for companies that refuse to settle for mediocrity.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="ThugCorp team working"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Projects Dominated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-emerald-600">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The digital warriors behind ThugCorp's success. Each team member brings unique expertise and a shared
              commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We've mastered the technologies that matter, so you can focus on what you do best—running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-800 border-slate-700">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-slate-300 mb-6">
                  React, Next.js, Node.js, TypeScript, PostgreSQL, AWS, and more. We use the best tools to build the
                  best solutions.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["React", "Next.js", "Node.js", "TypeScript", "AWS"].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-slate-800 border-slate-700">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
                <p className="text-slate-300 mb-6">
                  Python, TensorFlow, OpenAI API, machine learning, and natural language processing for intelligent
                  automation.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Python", "TensorFlow", "OpenAI", "ML", "NLP"].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-slate-800 border-slate-700">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategy</h3>
                <p className="text-slate-300 mb-6">
                  Business analysis, technical architecture, user experience design, and growth optimization strategies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Strategy", "UX/UI", "Analytics", "Growth", "SEO"].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with the Best?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful businesses that chose ThugCorp to transform their digital presence and dominate
            their markets.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8 py-3">
            <Link href="/contact">
              Let's Dominate Together <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
