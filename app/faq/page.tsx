"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const faqs = [
  {
    question: "How do you source your items?",
    answer:
      "We source our items through a variety of channels including estate sales, thrift stores, and direct donations. Each piece is carefully inspected, cleaned, and photographed before being added to our collection.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We accept returns within 14 days of delivery. Items must be in the same condition as when they were shipped, with all original tags attached. Return shipping costs are the responsibility of the customer unless the item is defective.",
  },
  {
    question: "How do you determine the condition of items?",
    answer:
      "We use a standardized rating system: 'Like New' (appears unworn), 'Excellent' (minimal wear), 'Good' (visible wear but no flaws), and 'Fair' (visible wear with minor flaws that are disclosed in the description).",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select countries internationally. Shipping costs and delivery times vary by location. International customers may be responsible for customs fees and import taxes.",
  },
  {
    question: "How do you clean the items before selling?",
    answer:
      "All clothing items are professionally cleaned according to their care instructions. We use eco-friendly cleaning products whenever possible and ensure each item is fresh and ready to wear when it arrives at your door.",
  },
  {
    question: "Can I sell or donate my clothes to ThriftVibe?",
    answer:
      "We do accept select donations and consignments. Please contact us at hello@thriftvibe.com with photos and details of the items you'd like to contribute, and our curation team will get back to you.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes! Gift cards are available in denominations from $25 to $200 and can be purchased online. They're delivered electronically and never expire.",
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Find answers to common questions about ThriftVibe, our products, and policies.
        </p>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="search"
            placeholder="Search questions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              No questions found matching your search. Try a different query or browse all FAQs.
            </p>
          )}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4">Can't find what you're looking for? We're here to help.</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

