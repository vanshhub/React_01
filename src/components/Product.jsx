import React, { useEffect } from "react";
import "./Product.css";

export default function Product() {
  useEffect(() => {
    document.body.classList.add("product-page-active");
    return () => document.body.classList.remove("product-page-active");
  }, []);
  return (
    <main className="product-page">
      <header className="hero hero-full">
        <div className="hero-inner container">
          <div className="hero-copy">
            <p className="eyebrow">AI Agent</p>
            <h1 className="title">Automate work. Make better decisions. Ship faster.</h1>
            <p className="subtitle">
              An intelligent agent that connects your apps, understands tasks, and executes
              them reliably. Minimal setup — powerful automation.
            </p>

            <div className="hero-ctas">
              <a className="btn primary-product" href="#try">Get started</a>
              <a className="btn outline" href="#how">See how it works</a>
            </div>

            <ul className="capabilities">
              <li>
                <strong>Task Automation</strong>
                <span>Automate repetitive flows across apps.</span>
              </li>
              <li>
                <strong>Adaptive Learning</strong>
                <span>Agent improves with usage and feedback.</span>
              </li>
              <li>
                <strong>Secure Execution</strong>
                <span>Enterprise-grade security and permissions.</span>
              </li>
            </ul>
          </div>

          <div className="hero-demo">
            <div className="demo-card">
              <div className="demo-placeholder" aria-hidden>Demo preview (placeholder)</div>
              <div className="demo-actions">
                <button className="btn ghost" onClick={() => alert("Demo: coming soon")}>Try demo</button>
                <button className="btn outline" onClick={() => alert("Preview opened")}>Preview</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="how" className="how container">
        <h2>How the agent works</h2>
        <ol className="steps">
          <li>
            <div className="num">1</div>
            <div>
              <h4>Connect tools</h4>
              <p>Grant the agent access to the apps it needs to perform tasks.</p>
            </div>
          </li>
          <li>
            <div className="num">2</div>
            <div>
              <h4>Describe the task</h4>
              <p>Tell the agent what you want automated in plain language.</p>
            </div>
          </li>
          <li>
            <div className="num">3</div>
            <div>
              <h4>Agent acts</h4>
              <p>The agent executes actions and reports back concisely.</p>
            </div>
          </li>
          <li>
            <div className="num">4</div>
            <div>
              <h4>Review & improve</h4>
              <p>Approve results and refine the agent's behavior over time.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="pricing container">
        <h2>Simple pricing</h2>
        <div className="plans">
          <article className="plan">
            <h3>Starter</h3>
            <p className="price">Free</p>
            <ul>
              <li>Basic automations</li>
              <li>1 agent</li>
            </ul>
            <button className="btn outline">Choose</button>
          </article>

          <article className="plan recommended">
            <div className="ribbon">Popular</div>
            <h3>Pro</h3>
            <p className="price">$29 / mo</p>
            <ul>
              <li>Unlimited automations</li>
              <li>Team access</li>
            </ul>
            <button className="btn primary">Choose</button>
          </article>

          <article className="plan">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>SSO & advanced security</li>
              <li>Dedicated support</li>
            </ul>
            <button className="btn outline">Contact sales</button>
          </article>
        </div>
      </section>

      <footer className="product-footer container">
        <p>© {new Date().getFullYear()} RoboAi. <a href="/">Home</a> · <a href="/product">Product</a></p>
      </footer>
    </main>
  );
}
