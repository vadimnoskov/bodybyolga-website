import { useEffect } from "react";
import { Link } from "wouter";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function HomePage() {
  useScrollReveal();

  useEffect(() => {
    // Mobile flip card tap
    const cards = document.querySelectorAll(".flip-card");
    const handlers: Array<[Element, () => void]> = [];
    cards.forEach((card) => {
      const handler = () => {
        if (window.innerWidth <= 1024) {
          document.querySelectorAll(".flip-card.tapped").forEach((c) => {
            if (c !== card) c.classList.remove("tapped");
          });
          card.classList.toggle("tapped");
        }
      };
      card.addEventListener("click", handler);
      handlers.push([card, handler]);
    });

    // Smooth scroll for hash links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const anchorHandlers: Array<[Element, (e: Event) => void]> = [];
    anchors.forEach((a) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const href = (a as HTMLAnchorElement).getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (target) window.scrollTo({ top: (target as HTMLElement).offsetTop - 72, behavior: "smooth" });
      };
      a.addEventListener("click", handler);
      anchorHandlers.push([a, handler]);
    });

    return () => {
      handlers.forEach(([el, h]) => el.removeEventListener("click", h));
      anchorHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
    };
  }, []);

  const checkSvg = (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="ctn">
          <div className="hero-g">
            <div>
              <p className="hero-ey r">Strength After 40</p>
              <h1 className="r d1">Stop getting weaker.<br /><em>Start here.</em></h1>
              <p className="hero-sub r d2">You've solved harder problems than this. 30-minute home workouts, food awareness, and coaching support for women 40+ who are done starting over.</p>
              <div className="hero-a r d3">
                <a href="#pricing" className="btn btn-p">
                  Start Your 7-Day Free Trial{" "}
                  <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
                <a href="#method" className="btn btn-s">See how it works</a>
              </div>
            </div>
            <div className="r d2">
              <div className="hero-img">
                <img src="/images/hero-image.png" alt="Olga training with dumbbells" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="proof r">
        <div className="ctn">
          <p className="proof-l">Featured In</p>
          <div className="proof-r">
            <span>Self</span><span>Vogue</span><span>Cosmopolitan</span><span>New York Post</span><span>USA Today</span>
          </div>
        </div>
      </section>

      {/* RECOGNITION FLIP CARDS */}
      <section className="recog sp">
        <div className="ctn">
          <div className="recog-h r">
            <h2>You know what to do. You just can't make it stick.</h2>
          </div>
          <div className="recog-g">
            <div className="flip-card recog-flip r">
              <div className="flip-inner">
                <div className="flip-front recog-front">
                  <p>You've managed a career, a family, and more responsibility than most people can imagine.</p>
                  <p>But your body feels like the one area where you keep losing ground. You start strong. Then stress hits, the week falls apart, and you're back to square one.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-recog-1.png" alt="Olga" />
                  <div className="flip-back-overlay"><span>You're not starting over. You're starting right.</span></div>
                </div>
              </div>
            </div>

            <div className="flip-card recog-flip r d1">
              <div className="flip-inner">
                <div className="flip-front recog-front">
                  <p>You've tried the diets. The apps. The "just be more disciplined" approach.</p>
                  <p>It works for a few weeks. Then the all-or-nothing cycle kicks in and you quit — not because you're lazy, but because the system was never built for your actual life.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-recog-2.png" alt="Olga with food" />
                  <div className="flip-back-overlay"><span>Food is not the enemy.</span></div>
                </div>
              </div>
            </div>

            <div className="flip-card recog-flip r d2">
              <div className="flip-inner">
                <div className="flip-front recog-front">
                  <p className="em">What if the problem was never willpower?</p>
                  <p className="em">What if the real issue is the patterns behind the habits — the stress eating, the all-or-nothing thinking, the shame that makes consistency harder?</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-recog-3.png" alt="Olga thinking" />
                  <div className="flip-back-overlay"><span>It's the patterns, not you.</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philo sp" id="philosophy">
        <div className="ctn">
          <div className="philo-in r">
            <h2>This is not another plan.<br />It's a different way of <em>thinking.</em></h2>
            <div className="philo-cols">
              <div className="philo-col">
                <h3>What we believe</h3>
                <p>Behavior change beats motivation. Systems last. Motivation fades.</p>
                <p>Exercise is not punishment. Training is for strength, energy, and confidence — not to earn food.</p>
                <p>Consistency matters more than perfection. A hard week needs adjustments, not quitting. Plan B still counts.</p>
              </div>
              <div className="philo-col">
                <h3>What we do differently</h3>
                <p>We don't just hand you workouts. We help you understand why you do what you do — the emotional eating patterns, the self-sabotage, the all-or-nothing cycle.</p>
                <p>We teach food awareness, not rigid dieting. Hunger is data. Fullness matters. Awareness beats rules.</p>
                <p>This program is built to make healthy habits feel natural again.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE METHOD FLIP CARDS */}
      <section className="sp" id="method">
        <div className="ctn">
          <div className="system-h r">
            <h2>The Method</h2>
            <p>Four pillars. One system. Built for real life.</p>
          </div>
          <div className="system-g">
            <div className="flip-card method-flip r">
              <div className="flip-inner">
                <div className="flip-front method-front">
                  <div className="sys-n">Pillar 01</div>
                  <h3>Functional Strength</h3>
                  <p>Daily 30-minute dumbbell workouts designed for women 40+. Short, effective, progressive. Train at home in the time you actually have.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-method-1.png" alt="Olga training" />
                  <div className="flip-back-overlay"><span>Functional Strength</span></div>
                </div>
              </div>
            </div>

            <div className="flip-card method-flip r d1">
              <div className="flip-inner">
                <div className="flip-front method-front">
                  <div className="sys-n">Pillar 02</div>
                  <h3>Food Awareness</h3>
                  <p>No rigid meal plans. Learn to recognize hunger, understand emotional eating patterns, and build food skills that work in real life.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-method-2.png" alt="Olga with food" />
                  <div className="flip-back-overlay"><span>Food Awareness</span></div>
                </div>
              </div>
            </div>

            <div className="flip-card method-flip r d2">
              <div className="flip-inner">
                <div className="flip-front method-front">
                  <div className="sys-n">Pillar 03</div>
                  <h3>Mindset &amp; Behavior</h3>
                  <p>Address the patterns that keep you stuck — perfectionism, shame, all-or-nothing thinking, and the cycle of starting over every Monday.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-method-3.png" alt="Olga mindset" />
                  <div className="flip-back-overlay"><span>Mindset &amp; Behavior</span></div>
                </div>
              </div>
            </div>

            <div className="flip-card method-flip r d3">
              <div className="flip-inner">
                <div className="flip-front method-front">
                  <div className="sys-n">Pillar 04</div>
                  <h3>Consistency System</h3>
                  <p>Streaks, community, daily structure, and coaching-backed support that makes showing up feel like identity — not willpower.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back">
                  <img src="/images/flip-method-4.png" alt="Olga consistency" />
                  <div className="flip-back-overlay"><span>Consistency System</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE THE APP FLIP CARDS */}
      <section className="app-s sp">
        <div className="ctn">
          <div className="app-h r">
            <h2>Inside the App</h2>
            <p>Everything you need to train, eat with awareness, and stay consistent — in one place.</p>
          </div>
          <div className="app-g">
            <div className="flip-card app-flip r">
              <div className="flip-inner">
                <div className="flip-front app-front">
                  <div className="app-i o">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <h4>Follow-Along Workouts</h4>
                  <p>30-minute strength sessions. Press play and train with Olga.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back app-back">
                  <img src="/images/app-2.png" alt="Workout screen" />
                </div>
              </div>
            </div>

            <div className="flip-card app-flip r d1">
              <div className="flip-inner">
                <div className="flip-front app-front">
                  <div className="app-i t">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>
                    </svg>
                  </div>
                  <h4>Dumbbell-Only Programs</h4>
                  <p>No gym needed. Train at home with a few pairs of dumbbells.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back app-back">
                  <img src="/images/app-1.png" alt="App home" />
                </div>
              </div>
            </div>

            <div className="flip-card app-flip r d2">
              <div className="flip-inner">
                <div className="flip-front app-front">
                  <div className="app-i o">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    </svg>
                  </div>
                  <h4>Nutrition Guidance</h4>
                  <p>Food awareness tools, hunger skills, and meal structure — not calorie obsession.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back app-back">
                  <img src="/images/app-6.png" alt="Nutrition tracking" />
                </div>
              </div>
            </div>

            <div className="flip-card app-flip r">
              <div className="flip-inner">
                <div className="flip-front app-front">
                  <div className="app-i t">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  </div>
                  <h4>Mindset Coaching</h4>
                  <p>Daily prompts that address behavior, emotional eating, and self-sabotage patterns.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back app-back">
                  <img src="/images/app-3.png" alt="Calendar" />
                </div>
              </div>
            </div>

            <div className="flip-card app-flip r d1">
              <div className="flip-inner">
                <div className="flip-front app-front">
                  <div className="app-i o">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h4>Streaks &amp; Progress</h4>
                  <p>Track workouts, build streaks, and see real evidence that you're getting stronger.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back app-back">
                  <img src="/images/app-4.png" alt="Streaks" />
                </div>
              </div>
            </div>

            <div className="flip-card app-flip r d2">
              <div className="flip-inner">
                <div className="flip-front app-front">
                  <div className="app-i t">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4>Community</h4>
                  <p>Women 40+ building strength together. Support, accountability, and shared wins.</p>
                  <span className="flip-hint">hover to flip</span>
                </div>
                <div className="flip-back app-back">
                  <img src="/images/app-5.png" alt="Community" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OLGA */}
      <section className="sp meet">
        <div className="ctn">
          <div className="meet-g">
            <div className="meet-v r">
              <div className="play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21"/></svg>
              </div>
            </div>
            <div className="r d1">
              <h2>Hi, I'm Olga.</h2>
              <p>For most of my 20s I was going through the motions — gaining weight, losing it, never really paying attention to what my body could actually do.</p>
              <p>That changed when I started training for real. I got stronger than I'd ever been. I trained through both pregnancies, stayed healthy, and never looked back. That was over 18 years ago.</p>
              <p>Since then I've coached thousands of women — in person at our gym and remotely through the app. The method works because I've lived it, tested it, and refined it with real people for nearly two decades.</p>
              <p className="creds">18+ years coaching experience · 7,500+ women coached · Strength &amp; functional fitness specialist</p>
              <a href="#pricing" className="btn btn-p">
                Start Training With Me{" "}
                <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi sp" id="results">
        <div className="ctn">
          <div className="testi-h r">
            <h2>Results</h2>
            <p>What changes when you stop chasing punishment and start building strength.</p>
          </div>
          <div className="testi-g">
            <div className="testi-c r">
              <p className="testi-q">"I finally feel strong again."</p>
              <p className="testi-s">The 30-minute workouts fit my life. The mindset work changed the way I approach food. For the first time, I'm not starting over every Monday.</p>
              <p className="testi-a">Michelle, 48</p>
            </div>
            <div className="testi-c r d1">
              <p className="testi-q">"Working out is my thing now."</p>
              <p className="testi-s">I never thought I'd say that at 52. This program made me feel capable again — not exhausted, not sore for days. Just strong and consistent.</p>
              <p className="testi-a">Janka, 52</p>
            </div>
            <div className="testi-c r d2">
              <p className="testi-q">"My back pain is gone."</p>
              <p className="testi-s">I came in wanting to lose weight. What I got was so much better — real strength, better energy, and I actually look forward to training now.</p>
              <p className="testi-a">Victoria, 45</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="sp" id="pricing">
        <div className="ctn">
          <div className="price-h r">
            <h2>Start Inside the App</h2>
            <p>7-day free trial. Cancel anytime. No pressure.</p>
          </div>
          <div className="price-g">
            <div className="pc std r">
              <div className="pl">Monthly</div>
              <div className="pa">$19.99</div>
              <div className="pp">/month</div>
              <div className="pbo">&nbsp;</div>
              <ul className="pf">
                <li><span className="pk">{checkSvg}</span>Daily follow-along workouts</li>
                <li><span className="pk">{checkSvg}</span>Nutrition guidance</li>
                <li><span className="pk">{checkSvg}</span>Mindset coaching</li>
                <li><span className="pk">{checkSvg}</span>Community access</li>
              </ul>
              <button className="pbtn">Start 7-Day Free Trial</button>
            </div>
            <div className="pc feat r d1">
              <div className="pb">Best Value</div>
              <div className="pl">Annual</div>
              <div className="pa">$199</div>
              <div className="pp">/year</div>
              <div className="pbo">2 months FREE</div>
              <ul className="pf">
                <li><span className="pk">{checkSvg}</span>Everything in Monthly</li>
                <li><span className="pk">{checkSvg}</span>Save 2 months</li>
                <li><span className="pk">{checkSvg}</span>Priority support</li>
              </ul>
              <button className="pbtn">Start 7-Day Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fcta sp">
        <div className="ctn">
          <div className="r">
            <h2>Get stronger. Eat with awareness.<br />Keep going.</h2>
            <p>Start with a free trial. No commitment. Cancel anytime.</p>
            <div className="fcta-a">
              <a href="#pricing" className="btn btn-p">Start Free Trial</a>
              <Link href="/coaching" className="btn btn-g">Need more support? Explore coaching</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
