'use strict'

import styles from '@styles/About.module.css'

export const AboutPage = () => (
    <div className={styles.About}>
        <div className={styles.About__Primary}>
            <div className="container">
                <div className={styles.About__Primary_subContainer}>
                    <section className={styles.About__Primary_blockOne}>
                        <span>- NICE TO MEET YOU!</span>
                        <div>
                            <h2>Sanders Gutiérrez</h2>
                            <span>Developer and Software Engineer</span>
                        </div>
                        <div className={styles.About__Primary_blockOne_Buttons}>
                            <a className="link-button" href="#">
                                Got a project?
                            </a>
                            <a className="link-button link-button-inverse" href="#">
                                Download CV
                            </a>
                        </div>
                    </section>
                    <section className={styles.About__Primary_blockTwo}>
                        <p>
                            My name is Sanders and I'm a professional with a strong career in Software Engineering and a
                            growing interest in Artificial Intelligence and Machine Learning, with a passion for Physics
                            and Mathematics.
                        </p>
                        <p>
                            I have more than 5 years of experience in software development with Java and Nodejs. I have
                            creativity to solve problems and adapt to different environments and cultures. Ability to
                            work in a team and manage interpersonal relationships.
                        </p>
                        <section className={styles.About__Primary_blockThree}>
                            <ul>
                                <li>
                                    <a href="https://linkedin.com/in/untalsanders" target="_blank">
                                        <svg
                                            width={35}
                                            height={35}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/untalsanders" target="_blank">
                                        <svg
                                            width={35}
                                            height={35}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@untalsanders" target="_blank">
                                        <svg
                                            width={35}
                                            height={35}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512">
                                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/untalsanders" target="_blank">
                                        <svg
                                            width={35}
                                            height={35}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/untalsanders" target="_blank">
                                        <svg
                                            width={35}
                                            height={35}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 496 512">
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.threads.net/@untalsanders" target="_blank">
                                        <svg
                                            width={35}
                                            height={35}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
                <section className={styles.About__Primary_blockFour}>
                    <ul>
                        <li>
                            <span>AGE</span>
                            <span>35</span>
                        </li>
                        <li>
                            <span>BORN IN</span>
                            <span>Condoto - Chocó, Colombia</span>
                        </li>
                        <li>
                            <span>MAIL</span>
                            <span>ing.sanders@gmail.com</span>
                        </li>
                        <li>
                            <span>PHONE</span>
                            <span>+54 9 11 6021-9207</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.About__Primary_blockFive}>
                    <div>
                        <span>10+</span>
                        <span>Years of Experience</span>
                    </div>
                    <div>
                        <span>50+</span>
                        <span>Projects Completed</span>
                    </div>
                    <div>
                        <span>30+</span>
                        <span>Happy Clients</span>
                    </div>
                </section>
            </div>
        </div>

        <div className={styles.About__Experience}>
            <div className="container">
                <h3>- EXPERIENCE</h3>
            </div>
            <section>
                <div className={`${styles.About__Experience_items} container`}>
                    <article>
                        <span>Feb 2019 - Present</span>
                        <h3>Freelancer</h3>
                        <span>Software Developer</span>
                        <p>
                            Development of custom applications for personal use using the technologies that I know the
                            most and that every day I try to learn a little more about each one. Among them I can
                            mention Java (Mainly), Nodejs, PHP and Python in Back-end and Front-end HTML5, CSS3 and
                            Javascript and a constant learning of frameworks such as Angular and the Reactjs component
                            development library.
                        </p>
                    </article>
                    <article>
                        <span>Mar 2019 - Oct 2022</span>
                        <h3>Latam Airlines (Globant)</h3>
                        <span>Senior Java Developer</span>
                        <p>Development of use cases for the area of airport agents of the company Latam Airline.</p>
                    </article>
                    <article>
                        <span>Sep 2021 - Feb 2022</span>
                        <h3>Falabella Bank (Technisys - Contractor)</h3>
                        <span>Senior Software Developer</span>
                        <p>
                            Development and maintenance of Core Banking modules of Falabella Bank of Chile. I had the
                            opportunity to develop a project called CARD-Rules from 0%, which consisted of activating or
                            deactivating permits for the use of credit and debit cards inside and outside the country.
                        </p>
                    </article>
                    <article>
                        <span>Apr 2021 - Sep 2021</span>
                        <h3>Associate Professor @ DigitalHouse</h3>
                        <span>Java Teacher</span>
                        <p>
                            Professor of Java Programming and object orientation, especially I teach to use the Spring
                            framework and various subprojects such as SpringBoot, Spring Data, Spring Security among
                            others. Also basic concepts of both relational and non-relational database design.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    </div>
)
