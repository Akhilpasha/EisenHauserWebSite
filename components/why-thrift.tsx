

import { Leaf, Sparkles, PiggyBank, Recycle, Instagram } from "lucide-react";
import Script from "next/script";
import styles from './instagram-feed.module.css';

const reasons = [
  {
    icon: <Leaf className="h-10 w-10 text-accent" />,
    title: "Eco-Friendly",
    description: "Reduce fashion waste and your carbon footprint by giving pre-loved clothes a second life.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: "Unique Style",
    description: "Find one-of-a-kind pieces that express your individual style and stand out from the crowd.",
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-accent" />,
    title: "Budget-Friendly",
    description: "Get high-quality, stylish clothing at a fraction of the original retail price.",
  },
  {
    icon: <Recycle className="h-10 w-10 text-accent" />,
    title: "Circular Fashion",
    description: "Be part of the sustainable fashion movement by participating in the circular economy.",
  },
];

export default function WhyThrift() {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Thrift?</h2>
          <p className="text-muted-foreground max-w-2xl">
            Thrifting isn't just shopping—it's a lifestyle choice with benefits for you and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 shadow-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold">Follow Us on Instagram</h3>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <a
                href="https://www.instagram.com/thriftvibe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                @thriftvibe
              </a>
              <span>•</span>
              <span>10K followers</span>
              <span>•</span>
              <span>150 posts</span>
            </div>
          </div>

          {/* Elfsight Instagram Feed Widget */}
          <div className={`elfsight-app-instagram-feed ${styles.instagramGrid}`}>
            <Script
              src="https://static.elfsight.com/platform/platform.js"
              data-use-service-core
              defer
            />
          </div>
        </div>
      </div>
    </section>
  );
}
