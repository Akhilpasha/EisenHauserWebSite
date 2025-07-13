import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/blog">Browse All Articles</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}