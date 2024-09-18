import React from 'react';

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3">
                {/* GitHub */}
                <a href="https://github.com/sirigowda204" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                    </div>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sirisrinivasa" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                        <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2"/>
                    </div>
                </a>
            </div>

            <p className="text-white-500">
                © 2024 Siri Srinivas. All Rights Reserved.
            </p>
        </section>
    );
};

export default Footer;
