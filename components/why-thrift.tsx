'use client';

import { useEffect, useState } from 'react';
import { Leaf, Sparkles, PiggyBank, Recycle, Instagram, Loader2 } from "lucide-react";
import Image from "next/image";
import styles from './instagram-feed.module.css';
import { instagramService } from '@/lib/services/instagram';
import type { InstagramPost } from '@/types/instagram';

const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

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
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const recentPosts = await instagramService.getRecentPosts();
      setPosts(recentPosts);
      setError(null);
    } catch (err) {
      setError('Failed to load Instagram posts');
      console.error('Error loading Instagram posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    // Set up auto-refresh
    const interval = setInterval(fetchPosts, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

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
                href="https://www.instagram.com/eisenhauser_thrifts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                @eisenhauser_thrifts
              </a>
              <span>•</span>
              <span>83 followers</span>
              <span>•</span>
              <span>102 posts</span>
            </div>
          </div>

          {/* Instagram Feed Grid */}
          <div className={styles.instagramGrid}>
            {loading ? (
              <div className="col-span-3 flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            ) : error ? (
              <div className="col-span-3 text-center text-muted-foreground py-12">
                {error}
              </div>
            ) : (
              posts.map((post) => (
                <a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramPost}
                >
                  <Image
                    src={post.imageUrl}
                    alt="Instagram post"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className={styles.overlay}>
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
