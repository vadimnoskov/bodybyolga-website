import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CoachingPage() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="ch">
        <div className="ctn">
          <h1 className="r">For Women Who Want More Hands-On Support</h1>
          <p className="r d1">Some women do great with the app alone. Some do better with personalized guidance, deeper accountability, and a closer coaching relationship.</p>
          <p className="note r d2">If you want that level of support, this is the next step.</p>
          <a href="#" className="abtn r d3">Apply for 1:1 Coaching</a>
        </div>
      </section>

      {/* FRAMING */}
      <section className="frame sp">
        <div className="ctn">
          <div className="frame-in r">
            <h2>This isn't information you're missing.</h2>
            <p>Most women who come to coaching already know what they should be doing. They've read the books. They've tried the programs.</p>
            <p>The problem is never knowledge. It's the patterns underneath — the emotional eating, the all-or-nothing thinking, the shame loops that make consistency feel impossible.</p>
            <p>Coaching is where we address that directly. Not with motivation speeches. With real tools, honest feedback, and a plan built around your actual life.</p>
            <p className="em">"The goal is not to get you fired up for a day. It's to help you build repeatable behaviors."</p>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="sp">
        <div className="ctn">
          <div className="cw">
            <h2 className="r">Coaching is for women who want...</h2>
            <div className="cw-g">
              <div className="cw-c r">
                <h4>More personalization</h4>
                <p>Training and nutrition adjusted to your body, your schedule, your history. Not a template.</p>
              </div>
              <div className="cw-c r d1">
                <h4>More accountability</h4>
                <p>Regular check-ins with someone who knows your situation and won't let you disappear.</p>
              </div>
              <div className="cw-c r d2">
                <h4>Deeper habit support</h4>
                <p>Help with emotional eating, stress responses, and the patterns that keep showing up no matter what plan you follow.</p>
              </div>
              <div className="cw-c r d3">
                <h4>A closer coaching relationship</h4>
                <p>Someone who understands the problem fast, tells the truth without drama, and helps you move forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="chow sp">
        <div className="ctn">
          <h2 className="r">What Coaching Includes</h2>
          <div className="chow-g">
            <div className="chow-c r">
              <div className="num">01</div>
              <h4>Personalized Strength Plan</h4>
              <p>Custom programming based on your level, equipment, and goals. Adjusted as you progress.</p>
            </div>
            <div className="chow-c r d1">
              <div className="num">02</div>
              <h4>Nutrition Strategy</h4>
              <p>Food awareness work built around your real life — not calorie tracking, not rigid meal plans. Hunger skills, satiety, and better food decisions.</p>
            </div>
            <div className="chow-c r d2">
              <div className="num">03</div>
              <h4>Mindset &amp; Behavior Coaching</h4>
              <p>We address perfectionism, emotional eating triggers, self-sabotage, and the "I blew it" cycle. Practical tools, not vague positivity.</p>
            </div>
            <div className="chow-c r d3">
              <div className="num">04</div>
              <h4>Regular Check-Ins With Olga</h4>
              <p>Consistent support, honest feedback, and adjustments as your life and body change. You're not doing this alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sp">
        <div className="ctn">
          <div className="ct">
            <h2 className="r">Coaching Results</h2>
            <div className="ct-g">
              <div className="ct-c r">
                <p className="ct-q">"Olga helped me see patterns I couldn't see on my own. The emotional eating triggers were so obvious once she pointed them out."</p>
                <p className="ct-a">Bonniejean, 54</p>
                <p className="ct-d">Coaching client</p>
              </div>
              <div className="ct-c r d1">
                <p className="ct-q">"For the first time in 20 years, I have a real relationship with food. Not a diet. A relationship. That shift changed everything."</p>
                <p className="ct-a">Mika, 47</p>
                <p className="ct-d">Coaching client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cf sp">
        <div className="ctn">
          <div className="r">
            <h2>Let's find a way that<br />actually works for you.</h2>
            <p>No pressure. Just a conversation.</p>
            <a href="#" className="abtn">Apply for 1:1 Coaching</a>
          </div>
        </div>
      </section>
    </>
  );
}
