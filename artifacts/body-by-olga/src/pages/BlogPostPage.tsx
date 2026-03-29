import { Link, useParams } from "wouter";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface PostData {
  category: string;
  title: string;
  byline: string;
  content: React.ReactNode;
}

const posts: Record<string, PostData> = {
  "why-strength-training-matters-after-40": {
    category: "Workouts",
    title: "Why Strength Training Matters More After 40",
    byline: "By Olga · April 2026",
    content: (
      <>
        <p>If you're a woman over 40, there's one thing that will do more for your body, your energy, and your confidence than anything else: picking up heavy things and putting them back down.</p>
        <p>That's not hyperbole. The research is clear. <strong>Resistance training is the single most effective intervention</strong> for maintaining muscle mass, bone density, metabolic health, and functional independence as we age.</p>
        <h2>What Changes After 40</h2>
        <p>Starting around age 30, women begin losing muscle mass at a rate of roughly 3–8% per decade. After 40, that rate accelerates — especially during perimenopause and menopause, when estrogen decline further impacts muscle protein synthesis and bone mineral density.</p>
        <p>The result: you feel weaker, your metabolism slows, your joints ache, and the cardio that used to "work" stops delivering results.</p>
        <div className="inline-img" />
        <h2>Why Strength Training Is Different</h2>
        <p>Unlike cardio, strength training directly addresses the root causes of midlife body changes. It builds and maintains muscle, stimulates bone growth, improves insulin sensitivity, and creates the metabolic foundation for sustainable body composition change.</p>
        <p>And unlike extreme diets or punishment workouts, it's sustainable. A well-designed 30-minute program with dumbbells, done consistently, produces better long-term outcomes than hours of cardio or restrictive eating.</p>
        <h2>How to Start</h2>
        <p>If you're new to strength training — or returning after years away — the key is to start simple. You don't need a gym. You don't need complicated equipment. A few pairs of dumbbells and 30 minutes a day is enough to begin building real, lasting strength.</p>
        <p>The most important thing isn't the program. <strong>It's showing up consistently.</strong> Three to five days a week, for 30 minutes, with progressive challenge. That's the formula.</p>
      </>
    ),
  },
  "how-to-start-lifting-at-45": {
    category: "Workouts",
    title: "How to Start Lifting Weights at 45",
    byline: "By Olga · March 2026",
    content: (
      <>
        <p>Forty-five years old. Never lifted a weight in your life — or maybe you did, once, and stopped. Either way, you're here now, and that's what matters.</p>
        <p>The good news: starting at 45 is not a disadvantage. In many ways, <strong>it's an opportunity.</strong> Your body is ready to respond to strength training, often dramatically, even if you've never done it before.</p>
        <h2>Start With Less Than You Think You Need</h2>
        <p>Every woman who walks into a strength program for the first time wants to do more. More weight, more reps, more days. This is the fastest path to injury, soreness, and quitting.</p>
        <p>Instead: start with bodyweight movements and light dumbbells. Master the basics — squat, hinge, push, pull. Get comfortable with the movements before adding load.</p>
        <div className="inline-img" />
        <h2>Three Days a Week Is Enough</h2>
        <p>You don't need to train every day. Three 30-minute sessions per week is a complete, effective program for beginners. The days in between are when your body actually builds strength.</p>
        <p>The goal in the first four weeks isn't to get sore. It's to build the habit. Show up. Move. Leave feeling good. <strong>That's success.</strong></p>
        <h2>What You Actually Need</h2>
        <p>Two or three pairs of dumbbells (light, medium, and a bit heavier), a mat, and 30 minutes. That's it. No gym membership, no fancy equipment, no complicated setup.</p>
        <p>The program matters far less than the consistency. A simple program done consistently beats a perfect program done sporadically every time.</p>
      </>
    ),
  },
  "why-cardio-stops-working-after-40": {
    category: "Nutrition",
    title: "Why Cardio Stops Working After 40",
    byline: "By Olga · March 2026",
    content: (
      <>
        <p>You're doing everything right. Running more, eating less. And yet the scale isn't moving. Your energy is low. You feel worse, not better.</p>
        <p>This is one of the most common experiences women over 40 share. And <strong>it's not about willpower or discipline.</strong> It's about physiology.</p>
        <h2>What's Actually Happening</h2>
        <p>After 40, hormonal changes — particularly declining estrogen — shift how your body stores and burns fat. At the same time, muscle loss accelerates if you're not actively working against it.</p>
        <p>Cardio burns calories during the session. But it doesn't build the muscle that keeps your metabolism elevated throughout the day. Over time, chronic cardio without strength training can actually accelerate muscle loss.</p>
        <div className="inline-img" />
        <h2>The Solution Is Not More Cardio</h2>
        <p>The solution is building muscle. Strength training creates a metabolic environment where your body burns more energy at rest, manages blood sugar more effectively, and maintains the lean tissue that keeps you feeling strong and capable.</p>
        <p>This doesn't mean you have to give up walking, swimming, or any cardio you enjoy. It means <strong>making strength training the foundation</strong>, and letting cardio be a supplement rather than the main event.</p>
        <h2>What About Nutrition?</h2>
        <p>The same principles apply to food. Restriction doesn't work long-term. Food awareness does. Learning to read hunger and fullness signals, understanding your eating patterns, and building sustainable habits around real food — these are the tools that actually work after 40.</p>
      </>
    ),
  },
  "the-30-minute-workout-strategy": {
    category: "Mindset",
    title: "The 30-Minute Workout Strategy",
    byline: "By Olga · February 2026",
    content: (
      <>
        <p>More is not better. Especially after 40. Especially for women juggling careers, families, and every other demand that doesn't pause so you can train.</p>
        <p>The 30-minute workout strategy isn't a compromise. <strong>It's a deliberate approach</strong> built on how the body actually responds to training — not how fitness culture says it should.</p>
        <h2>Why Short Workouts Work Better</h2>
        <p>Long workouts feel productive. But they often create the stress they're meant to relieve. Cortisol — the stress hormone — rises during exercise and returns to baseline in recovery. Chronic elevation from long, frequent training sessions can disrupt sleep, increase fat storage, and kill motivation.</p>
        <p>30 minutes of focused, progressive strength work keeps cortisol in check, provides the stimulus muscles need to grow, and leaves you feeling energized rather than depleted.</p>
        <div className="inline-img" />
        <h2>What Matters More Than Duration</h2>
        <p>Intensity and consistency. A 30-minute session where you challenge yourself progressively — adding weight, reps, or complexity over weeks — will produce better results than 90-minute sessions three times a month.</p>
        <p>The question isn't "how much time can I spend?" It's "how consistently can I show up?" <strong>30 minutes, five days a week</strong> is more than most people need. And most people can actually sustain it.</p>
        <h2>The Mindset Shift</h2>
        <p>When you stop trying to earn your health with suffering, and start building it with sustainable effort, everything changes. You're not pushing through. You're building a practice. One that belongs to you, fits your life, and actually lasts.</p>
      </>
    ),
  },
};

const defaultPost: PostData = {
  category: "Workouts",
  title: "Why Strength Training Matters More After 40",
  byline: "By Olga · April 2026",
  content: (
    <p>Post not found. <Link href="/blog" style={{ color: "var(--primary)" }}>Return to the blog.</Link></p>
  ),
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = (slug && posts[slug]) ? posts[slug] : defaultPost;
  useScrollReveal();

  return (
    <>
      <div className="post-hero" />
      <article className="post-container">
        <div className="post-meta">{post.category}</div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-byline">{post.byline}</p>
        <div className="post-content">
          {post.content}
        </div>
        <div className="post-cta">
          <h3>Ready to build strength after 40?</h3>
          <p>Start your free trial and train with me today.</p>
          <Link href="/#pricing" className="pbtn">Start Free Trial</Link>
        </div>
      </article>
    </>
  );
}
