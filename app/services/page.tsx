import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Bot, Smartphone, Database, Cloud, Shield, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const webDevServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Applications",
      description: "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Scalable Architecture"],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Development",
      description: "Progressive web apps and mobile-optimized experiences that work flawlessly across all devices.",
      features: ["PWA Development", "Cross-Platform", "Offline Functionality", "App Store Ready"],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & APIs",
      description: "Robust backend systems and RESTful APIs that power your applications with reliability.",
      features: ["Database Design", "API Development", "Third-party Integrations", "Real-time Features"],
    },
  ]

  const aiServices = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that handle customer service, lead generation, and user engagement 24/7.",
      features: [
        "Natural Language Processing",
        "Multi-platform Integration",
        "Learning Capabilities",
        "Analytics Dashboard",
      ],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks with custom automation solutions that save time and reduce errors.",
      features: ["Workflow Automation", "Data Processing", "Email Automation", "Report Generation"],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: ["Custom AI Models", "API Integration", "Machine Learning", "Predictive Analytics"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Services That
            <span className="block text-emerald-600">Deliver Results</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            We don't just build technology—we craft solutions that transform businesses and dominate markets.
          </p>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Web Development</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From concept to deployment, we build web solutions that perform, scale, and convert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webDevServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0">
                <CardHeader className="p-0 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-emerald-600">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Automation</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to automate processes and unlock new possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="p-0 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-purple-600">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your business goals and requirements.",
              },
              { step: "02", title: "Strategy", description: "We craft a comprehensive plan tailored to your needs." },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution with precision and care.",
              },
              { step: "04", title: "Launch", description: "We deploy and support your project for maximum impact." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and dominate your market.
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
