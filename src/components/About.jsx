import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutVideo from "../assets/about-bg.mp4";
import heroRightImg from "../assets/block-chain.png"
import mattersImg from "../assets/database.jpg";



export default function About() {
    const sectionsRef = useRef([]);
    const videoRef = useRef(null);


    useEffect(() => {
        const elements = sectionsRef.current.filter(Boolean);
        if (elements.length === 0 || typeof IntersectionObserver === "undefined") {
            elements.forEach((el) => el && el.classList.add("in-view"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();

        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;  // 🔥 change speed here
        }
    }, []);

    return (
        <main className="about-page">
            <div className="video-bg">
                <video
                    ref={videoRef}         /* ADD THIS */
                    src={aboutVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="glass-overlay"></div>

            {/* HERO SECTION */}
            <section className="hero section" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="container hero-inner">
                    <div className="About-left">
                        {/* <div className="eyebrow">JumpBot</div> */}
                        <h1>
                            Unleashing the Power of <span className="accent">Blockchain</span>
                        </h1>
                        <p className="lead">
                            Transforming industries with secure, decentralized, and transparent technology.
                        </p>
                        <div className="hero-cta">
                            <button className="btn primary">Get Started with Blockchain</button>
                            <button className="btn outline">Discover How It Works</button>
                        </div>
                    </div>

                    <div className="about-right">
                        <img src={heroRightImg} alt="Hero Right Visual" className="hero-right-img" />
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features section" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="container features-inner">
                    <h2>
                        Why <span className="accent">Blockchain?</span>
                    </h2>
                    <p className="sub">Blockchain is redefining trust in the digital world.</p>

                    <div className="cards">
                        <article className="card">
                            <div className="icon placeholder-icon" />
                            <h3>Decentralization</h3>
                            <p>No single entity controls the system.</p>
                        </article>

                        <article className="card">
                            <div className="icon placeholder-icon" />
                            <h3>Security</h3>
                            <p>Encrypted and tamper-proof data.</p>
                        </article>

                        <article className="card">
                            <div className="icon placeholder-icon" />
                            <h3>Transparency</h3>
                            <p>Public, accountable transactions.</p>
                        </article>

                        <article className="card">
                            <div className="icon placeholder-icon" />
                            <h3>Efficiency</h3>
                            <p>Faster, cost-effective processes.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* MATTERS SECTION */}
            <section className="matters section" ref={(el) => (sectionsRef.current[2] = el)}>
                <div className="container matters-inner">

                    <div className="matters-left">
                        <h2>
                            Why <span className="accent">Blockchain Matters</span>
                        </h2>
                        <p>
                            Blockchain is revolutionizing how we handle data, transactions, and trust.Blockchain matters because it provides a new foundation for digital interactions based on trust, transparency, and security without relying on a central authority or intermediary. This decentralized and immutable ledger technology offers significant benefits across various industries, from finance to supply chains
                        </p>
                        <button className="btn primary small">Read More</button>
                    </div>

                    <div className="matters-right">
                        <img src={mattersImg} alt="Blockchain Illustration" className="matters-img" />
                    </div>

                </div>
            </section>


            {/* PRICING SECTION */}
            <section className="pricing section" ref={(el) => (sectionsRef.current[3] = el)}>
                <div className="container pricing-inner">
                    <h2>
                        Pricing <span className="accent">Plans</span>
                    </h2>
                    <p className="sub">
                        Choose the plan that fits your needs and start exploring the power of blockchain today.
                    </p>

                    <div className="pricing-cards">
                        <div className="price-card">
                            <div className="price-header">Beginner Plan</div>
                            <div className="price-amount">
                                INR.199<span className="per">/month</span>
                            </div>
                            <ul className="features-list">
                                <li>Access to basic blockchain guides</li>
                                <li>Email support</li>
                            </ul>
                            <button className="btn outline">Choose Plan</button>
                        </div>

                        <div className="price-card recommended">
                            <div className="ribbon">Recommended</div>
                            <div className="price-header">Intermediate Plan</div>
                            <div className="price-amount">
                                INR.349<span className="per">/month</span>
                            </div>
                            <ul className="features-list">
                                <li>Everything in Beginner</li>
                                <li>Access to advanced tutorials</li>
                            </ul>
                            <button className="btn primary">Choose Plan</button>
                        </div>

                        <div className="price-card">
                            <div className="price-header">Advanced Plan</div>
                            <div className="price-amount">
                                INR.495<span className="per">/month</span>
                            </div>
                            <ul className="features-list">
                                <li>Everything in Intermediate</li>
                                <li>Priority support</li>
                            </ul>
                            <button className="btn outline">Choose Plan</button>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer-about">
                <div className="container">
                    <p>© {new Date().getFullYear()} JumpBot. All rights reserved.</p>
                </div>
            </footer>

        </main>
    );
}
