import React, { useState, useEffect } from 'react';
import { Sun, Moon, Instagram, Linkedin, Github, Youtube, MessageCircle, Twitter } from 'lucide-react';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <>
            <div className="vignette"></div>

            <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="container">
                <header>
                    <h1>Hello, I'm Akinyemi.</h1>
                </header>

                <div className="portrait-container">
                    <img
                        src="/akinyemi-portrait.png"
                        alt="Akinyemi Bajulaiye"
                        className="portrait"
                        width="250"
                        height="250"
                        fetchPriority="high"
                    />
                </div>

                <section>
                    <div className="bio">
                        <p>
                            I build AI systems that work inside real businesses—and help people use them well.
                            My work spans agent platforms, operational workflows, independent apps, and
                            hands-on AI education.
                        </p>
                        <br />
                        <p>
                            I run <a href="https://pentridgemedia.com" className="link-underline">Pentridge Media</a>,
                            an AI innovation studio that provides systems, software, and community for modern businesses.
                            I also co-organize <a href="https://instagram.com/vibecodephilly" className="link-underline">Vibe Code Philly</a>,
                            a community dedicated to teaching the next generation of builders.
                        </p>
                        <br />
                        <p>
                            When I'm not building B2C and B2B apps for others or myself, I’m on
                            <a href="https://youtube.com/@sirakinb" className="link-underline"> YouTube</a> talking
                            about AI, automation, business systems, and my views on the market.
                        </p>
                    </div>
                </section>

                <section className="portfolio-intro" aria-labelledby="portfolio-title">
                    <h2 id="portfolio-title">Selected work</h2>
                    <p>
                        Since 2023, I’ve designed and deployed more than 100 workflows and AI systems for
                        service-business clients. The work sits between making those systems useful and helping
                        people adopt them. Here are a few examples—from client operations to independent products
                        and builder education.
                    </p>
                </section>

                <section className="work-list" aria-label="Projects and outcomes">
                    <article className="work-item">
                        <h3>Manor</h3>
                        <p className="work-kind">Agent platform · Pentridge Media</p>
                        <p>
                            Service businesses need agents that can work inside real operations, not just produce a response.
                            I built and operate Manor with a CRM, vertical integrations, and dedicated virtual computers
                            that run an open-source Pi agent harness. The platform supports three active client engagements.
                        </p>
                        <p>
                            This is where my AI-native approach becomes practical: connecting agent behavior to the
                            records, tools, and human oversight a business already depends on.
                        </p>
                        <a href="https://manor.pentridgemedia.com" className="link-underline work-link" target="_blank" rel="noopener noreferrer">
                            Explore Manor
                        </a>
                    </article>

                    <article className="work-item">
                        <h3>Property operations</h3>
                        <p className="work-kind">Voice agents · billing systems</p>
                        <p>
                            For property-management work, I developed leasing voice agents to handle inquiries and
                            a 12-component utility system for billing, anomaly detection, and notifications across
                            more than 300 properties. Both projects tackle the less glamorous work that determines
                            whether a system is actually useful day to day.
                        </p>
                        <a href="https://www.pentridgemedia.com/case-studies/property-management-operations" className="link-underline work-link" target="_blank" rel="noopener noreferrer">
                            Read property case study
                        </a>
                    </article>

                    <article className="work-item">
                        <h3>Legal &amp; tax intake</h3>
                        <p className="work-kind">Lead intake · follow-up</p>
                        <p>
                            I designed AI-assisted intake and follow-up systems that handle 150–200 leads a month.
                            The work connects capture, qualification, and follow-through so prospective clients do
                            not disappear between an initial inquiry and the next human conversation.
                        </p>
                        <a href="https://www.pentridgemedia.com/case-studies/michigan-law-firm-intake" className="link-underline work-link" target="_blank" rel="noopener noreferrer">
                            Read law firm case study
                        </a>
                    </article>

                    <article className="work-item">
                        <h3>Independent apps</h3>
                        <p className="work-kind">Selected iPhone releases · solo AI-assisted development</p>
                        <p>
                            DropCard and Still Meditation are two apps I built and released independently.
                            DropCard helps people share digital business cards and manage contacts; Still turns
                            a description of a mood into personalized meditation music. Both reflect the full
                            product loop, from deciding what matters through design, testing, and release.
                        </p>
                        <a href="https://apps.apple.com/us/app/still-meditation/id6757083149" className="link-underline work-link" target="_blank" rel="noopener noreferrer">
                            Still on the App Store
                        </a>
                        <a href="https://apps.apple.com/us/app/dropcard-app/id6753614589" className="link-underline work-link" target="_blank" rel="noopener noreferrer">
                            DropCard on the App Store
                        </a>
                    </article>
                </section>

                <section className="teaching" aria-labelledby="teaching-title">
                    <h2 id="teaching-title">Building with people</h2>
                    <p>
                        I co-organize Vibe Code Philly and have mentored more than 200 builders through workshops
                        and events. On YouTube, I explain AI tools, automation, and business systems in the open.
                        I use Claude Code, Codex, Cursor, and open-source agent platforms in my own work—and care
                        just as much about making those tools approachable for other people.
                    </p>
                    <p>
                        If you’re evaluating my work for an AI enablement, AI-native building, or developer
                        community role, <a href="https://www.youtube.com/@sirakinb" className="link-underline" target="_blank" rel="noopener noreferrer">watch me teach on YouTube</a> and
                        <a href="https://www.linkedin.com/in/sirakinb/" className="link-underline" target="_blank" rel="noopener noreferrer"> connect on LinkedIn</a>.
                    </p>
                </section>

                <section>
                    <ul>
                        <li>
                            <a href="https://tiktok.com/@sirakinb" className="link-underline" target="_blank" rel="noopener noreferrer">
                                Latest thoughts on TikTok
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/sirakinb" className="link-underline" target="_blank" rel="noopener noreferrer">
                                Code and experiments on GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/@sirakinb" className="link-underline" target="_blank" rel="noopener noreferrer">
                                Weekly insights on YouTube
                            </a>
                        </li>
                    </ul>
                </section>

                <section style={{ display: 'flex', flexDirection: 'row', gap: '24px', flexWrap: 'wrap', alignItems: 'center', marginTop: '12px' }}>
                    <a href="https://instagram.com/sirakinb" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <Instagram size={22} strokeWidth={1.5} />
                    </a>
                    <a href="https://tiktok.com/@sirakinb" target="_blank" rel="noopener noreferrer" title="TikTok">
                        <MessageCircle size={22} strokeWidth={1.5} />
                    </a>
                    <a href="https://x.com/Defi__Papi" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                        <Twitter size={22} strokeWidth={1.5} />
                    </a>
                    <a href="https://linkedin.com/in/sirakinb" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <Linkedin size={22} strokeWidth={1.5} />
                    </a>
                    <a href="https://github.com/sirakinb" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <Github size={22} strokeWidth={1.5} />
                    </a>
                    <a href="https://youtube.com/@sirakinb" target="_blank" rel="noopener noreferrer" title="YouTube">
                        <Youtube size={22} strokeWidth={1.5} />
                    </a>
                </section>
            </div>

            <a href="https://stillmeditation.app/" className="page-peel" title="Still App - Meditation">
                <span className="favorites-text">get your mind right</span>
            </a>
        </>
    );
}

export default App;
