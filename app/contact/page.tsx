"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Message Sent!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Thanks for reaching out! We'll get back to you within 24 hours to discuss how we can dominate your project
              together.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-emerald-600 hover:bg-emerald-700">
              Send Another Message
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Ready to
            <span className="block text-emerald-600">Dominate Together?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and show you how ThugCorp can transform your business with cutting-edge web
            development and AI automation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Start Your Project</CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company Inc."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="ai-automation">AI Automation</SelectItem>
                            <SelectItem value="both">Both Services</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Project Budget</Label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k+">$50,000+</SelectItem>
                            <SelectItem value="discuss">Let's Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Email</div>
                        <div className="text-slate-600">hello@thugcorp.com</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Phone</div>
                        <div className="text-slate-600">+1 (555) 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Location</div>
                        <div className="text-slate-600">San Francisco, CA</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Response Time</div>
                        <div className="text-slate-600">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-emerald-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose ThugCorp?</h3>
                  <ul className="space-y-3 text-emerald-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      24-hour response guarantee
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      Free project consultation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      100% satisfaction guarantee
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      Ongoing support included
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions about working with ThugCorp.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity, but most web development projects take 4-8 weeks, while AI automation projects typically take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What's included in your web development service?",
                answer:
                  "Our web development service includes custom design, responsive development, SEO optimization, performance optimization, security implementation, testing, deployment, and 30 days of post-launch support.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes! We provide 30 days of free support after launch, and offer ongoing maintenance packages for continued support, updates, and enhancements.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "We're experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflow and development processes.",
              },
              {
                question: "What makes ThugCorp different from other agencies?",
                answer:
                  "We focus on results, not just deliverables. Every project is built to drive measurable business outcomes, and we use cutting-edge technologies to give you competitive advantages.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
