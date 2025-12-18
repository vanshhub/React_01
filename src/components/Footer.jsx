import React from "react";
import "./footer.css";

import instaIcon from "../assets/icons/instagram.png";
import twitterIcon from "../assets/icons/twitter.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";



export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">

            {/* Left Section - Branding */}
            <div className="footer-brand">
                <h2 className="footer-logo">RoboAi</h2>
                <p>Opening the mobile world to Ai agent</p>

                <div className="footer-social">
                    <a href="https://brightindiatech.com/"><img src={twitterIcon} alt="twitter" /></a>
                    <a href="https://brightindiatech.com/"><img src={instaIcon} alt="instagram" /></a>
                    <a href="https://brightindiatech.com/"><img src={githubIcon} alt="github" /></a>
                    <a href="https://brightindiatech.com/"><img src={linkedinIcon} alt="linkedin" /></a>
                </div>

            </div>

            {/* Quick Links */}
            <div className="footer-links">
                <h4>Quick Links</h4>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Testimonials</a>
            </div>

            {/* Support */}
            <div className="footer-links">
                <h4>Support</h4>
                <a href="#">Documentation</a>
                <a href="#">API Pricing</a>
                <a href="#">Contact</a>
                <a href="#">FAQ</a>
            </div>

            {/* Legal */}
            <div className="footer-links">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Security</a>
            </div>

            {/* Bottom Copyright */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} RoboAi. All Rights Reserved.
            </div>

            </div>
        </footer>
    );
}
