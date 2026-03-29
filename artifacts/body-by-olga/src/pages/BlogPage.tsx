import { useState } from "react";
import { Link } from "wouter";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Category = "All" | "Workouts" | "Nutrition" | "Mindset";

interface BlogPost {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string;
  delay?: string;
}

const posts: BlogPost[] = [
  {
    slug: "why-strength-training-matters-after-40",
    category: "Workouts",
    title: "Why Strength Training Matters More After 40",
    excerpt: "The science behind why resistance training becomes non-negotiable for women in midlife — and how to start.",
    date: "April 2026",
  },
  {
    slug: "how-to-start-lifting-at-45",
    category: "Workouts",
    title: "How to Start Lifting Weights at 45",
    excerpt: "A no-nonsense beginner's guide for women who've never touched a dumbbell — or haven't in years.",
    date: "March 2026",
    delay: "d1",
  },
  {
    slug: "why-cardio-stops-working-after-40",
    category: "Nutrition",
    title: "Why Cardio Stops Working After 40",
    excerpt: "You're running more and losing less. Here's what's actually happening — and what to do instead.",
    date: "March 2026",
  },
  {
    slug: "the-30-minute-workout-strategy",
    category: "Mindset",
    title: "The 30-Minute Workout Strategy",
    excerpt: "Why less time in the gym leads to better results — especially for busy women over 40.",
    date: "February 2026",
    delay: "d1",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  useScrollReveal();

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="blog-hero">
        <div className="container" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px" }}>
          <h1 className="r">The Blog</h1>
          <p className="r r-d1">Evidence-based training, nutrition, and mindset for women who refuse to get weaker.</p>
          <div className="blog-tags r r-d2">
            {(["All", "Workouts", "Nutrition", "Mindset"] as Category[]).map((cat) => (
              <button
                key={cat}
                className={`blog-tag${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="ctn">
          <div className="blog-cta-bar r">
            <p>New here? Start your 7-day free trial and train with me today.</p>
            <Link href="/#pricing" className="cbtn">Start Free Trial</Link>
          </div>

          <div className="blog-grid">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`blog-card r${post.delay ? ` ${post.delay}` : ""}`}
              >
                <div className="blog-card-img" />
                <div className="blog-card-body">
                  <div className="blog-card-tag">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
