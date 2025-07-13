import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Truck, 
  HelpCircle, 
  ShoppingBag, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin 
} from "lucide-react"

// FAQ items
const faqItems = [
  {
    question: "How do I return an item?",
    answer: "You can return items within 14 days of receipt. Please visit our Returns page for detailed instructions on how to initiate a return."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to select countries internationally. Shipping costs and delivery times vary by location. Please check our Shipping page for more details."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account."
  },
  {
    question: "Are the clothes cleaned before selling?",
    answer: "Absolutely! All our second-hand items undergo a thorough cleaning and quality inspection process before being listed for sale."
  }
]

// Team members for contact
const contactTeam = [
  {
    name: "Emma Johnson",
    role: "Customer Support Lead",
    email: "emma@thriftvibe.com",
    image: "/placeholder.svg?height=400&width=400&text=Emma"
  },
  {
    name: "Marcus Chen",
    role: "Returns Specialist",
    email: "marcus@thriftvibe.com",
    image: "/placeholder.svg?height=400&width=400&text=Marcus"
  },
  {
    name: "Zoe Williams",
    role: "Order Support",
    email: "zoe@thriftvibe.com",
    image: "/placeholder.svg?height=400&width=400&text=Zoe"
  }
]

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] mb-16">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Contact+Us"
            alt="Contact ThriftVibe"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-lg mb-6">
                We're here to help with any questions about sustainable fashion, our products, or your orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        {/* Contact Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How Can We Help You?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[hsl(35,80%,60%)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-[hsl(35,80%,60%)]" />
              </div>
              <h3 className="font-bold mb-2">General Inquiries</h3>
              <p className="text-muted-foreground text-sm mb-4">Questions about our company, partnerships, or press inquiries.</p>
              <a href="mailto:hello@thriftvibe.com" className="text-[hsl(35,80%,60%)] text-sm font-medium">
                hello@thriftvibe.com
              </a>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[hsl(35,80%,60%)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-6 w-6 text-[hsl(35,80%,60%)]" />
              </div>
              <h3 className="font-bold mb-2">Orders & Payments</h3>
              <p className="text-muted-foreground text-sm mb-4">Questions about your order, payment issues, or account help.</p>
              <a href="mailto:orders@thriftvibe.com" className="text-[hsl(35,80%,60%)] text-sm font-medium">
                orders@thriftvibe.com
              </a>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[hsl(35,80%,60%)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-[hsl(35,80%,60%)]" />
              </div>
              <h3 className="font-bold mb-2">Shipping & Returns</h3>
              <p className="text-muted-foreground text-sm mb-4">Questions about delivery, tracking, returns, or exchanges.</p>
              <a href="mailto:shipping@thriftvibe.com" className="text-[hsl(35,80%,60%)] text-sm font-medium">
                shipping@thriftvibe.com
              </a>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[hsl(35,80%,60%)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-[hsl(35,80%,60%)]" />
              </div>
              <h3 className="font-bold mb-2">Technical Support</h3>
              <p className="text-muted-foreground text-sm mb-4">Website issues, login problems, or technical difficulties.</p>
              <a href="mailto:support@thriftvibe.com" className="text-[hsl(35,80%,60%)] text-sm font-medium">
                support@thriftvibe.com
              </a>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name <span className="text-[hsl(35,80%,60%)]">*</span>
                    </label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name <span className="text-[hsl(35,80%,60%)]">*</span>
                    </label>
                    <Input id="last-name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-[hsl(35,80%,60%)]">*</span>
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium">
                    Inquiry Type <span className="text-[hsl(35,80%,60%)]">*</span>
                  </label>
                  <select 
                    id="inquiry-type" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="return">Return/Exchange</option>
                    <option value="product">Product Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="order-number" className="text-sm font-medium">
                    Order Number (If applicable)
                  </label>
                  <Input id="order-number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-[hsl(35,80%,60%)]">*</span>
                  </label>
                  <Textarea id="message" rows={5} required />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-muted-foreground">
                    I agree to the <Link href="/privacy-policy" className="text-[hsl(35,80%,60%)] hover:underline">Privacy Policy</Link> and consent to having my data processed.
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[hsl(35,80%,60%)] hover:bg-[hsl(35,80%,60%)]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[hsl(35,80%,60%)]" />
                Visit Our Store
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Come visit our physical location to browse our curated collection in person and meet our team of sustainable fashion experts.
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-1">ThriftVibe Flagship Store</p>
                  <p className="text-muted-foreground">
                    123 Thrift Lane
                    <br />
                    Eco City, EC 12345
                    <br />
                    United States
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-1">Contact Details</p>
                  <div className="space-y-2">
                    <a href="mailto:hello@thriftvibe.com" className="flex items-center text-muted-foreground hover:text-[hsl(35,80%,60%)]">
                      <Mail className="h-4 w-4 mr-2" />
                      hello@thriftvibe.com
                    </a>
                    <a href="tel:+15551234567" className="flex items-center text-muted-foreground hover:text-[hsl(35,80%,60%)]">
                      <Phone className="h-4 w-4 mr-2" />
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-1 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-[hsl(35,80%,60%)]" />
                    Store Hours
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Google Maps Embed Would Go Here</p>
              </div>
              <div className="absolute bottom-4 right-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background py-2 px-4 rounded-md text-sm font-medium shadow-sm hover:bg-muted/80 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[hsl(35,80%,60%)] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[hsl(35,80%,60%)] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[hsl(35,80%,60%)] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[hsl(35,80%,60%)] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Meet the Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Customer Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-[hsl(35,80%,60%)] mb-2">{member.role}</p>
                <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-[hsl(35,80%,60%)]">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 cursor-pointer bg-muted">
                      <h3 className="font-medium">{item.question}</h3>
                      <span className="transition-transform duration-200 group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-muted p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest sustainable fashion tips, exclusive offers, and updates on new arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button className="bg-[hsl(35,80%,60%)] hover:bg-[hsl(35,80%,60%)]">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-[hsl(35,80%,60%)]">Privacy Policy</Link>. You can unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

