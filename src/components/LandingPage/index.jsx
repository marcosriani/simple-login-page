import styles from './LandingPage.module.css'; // Import the styles

const LandingPage = () => (
  <article>
    <header>
      <h1 className={styles.title}>
        Welcome to the User Profile Management System
      </h1>
    </header>
    <p>
      Are you tired of juggling multiple platforms and struggling to maintain
      user data efficiently? Look no further! Our User Profile Management System
      is the ultimate solution for streamlining your user data management needs.
    </p>
    <div>
      <section className={styles['section-with-image']}>
        <div className={styles['section-with-image-block']}>
          <h2 className={styles['sub-title']}>
            Unlock the Power of Seamless User Profile Management
          </h2>
          <p>
            Managing user profiles can be a daunting task, but with our
            cutting-edge system, it's as easy as a few clicks. Say goodbye to
            manual data entry, lost information, and frustrated users. Our
            platform offers:
          </p>
          <ul>
            <li>
              1. Centralized User Profiles: Bring all your user data under one
              roof. No more searching through spreadsheets or scattered
              databases. Everything you need is right at your fingertips.
            </li>
            <li>
              2. User-Friendly Interface: Our intuitive interface ensures that
              your team can effortlessly navigate the system, saving you time
              and resources on training
            </li>
            <li>
              3. Customizable Fields: Tailor user profiles to your specific
              needs. Add or remove fields, so you capture the exact data that
              matters most to your organization.
            </li>
            <li>
              4. Advanced Security: Rest easy knowing your users' information is
              protected by robust security measures. Your data is safe with us.
            </li>
            <li>
              5. Streamlined User Registration: Simplify the user registration
              process, making it quick and painless for your users to get
              started.
            </li>
          </ul>
        </div>
        <div className={styles['body-image-container']}>
          <img
            src="https://website-images.preservica.com/production/images/Careers_header.jpg?w=768&q=80&fm=jpg&fit=min&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1683209852&s=f9ad98331aa27ac1bfd211767ca4f174"
            alt="preservica team"
          />
        </div>
      </section>
      <section className={styles['section-without-image']}>
        <h2 className={styles['sub-title']}>Why Choose Us?</h2>
        <p>
          We understand the importance of efficient user profile management in
          today's digital landscape. That's why we've developed a system that
          not only simplifies the process but also enhances user experiences.
          When you choose our User Profile Management System, you get:
        </p>
        <h3>Get Started Today</h3>
        <ul>
          <li>
            Reliability: Our platform is built to withstand the demands of
            modern businesses, ensuring uninterrupted service.
          </li>
          <li>
            Dedicated Support: Our team of experts is here to assist you every
            step of the way, from implementation to ongoing support.
          </li>
          <li>
            Cost-Efficiency: Save time and resources by automating user profile
            management tasks.
          </li>
          <li>
            User Satisfaction: Happy users are the foundation of a successful
            organization. Make their interactions with your platform smooth and
            memorable.
          </li>
        </ul>
        <p>
          Join the ranks of satisfied organizations that have revolutionized
          their user profile management with our system. Say goodbye to data
          chaos and hello to efficiency, security, and user satisfaction.
        </p>
        <p>
          Ready to take the leap towards effortless user profile management?
          Start your journey with us today! Sign up for a demo or contact our
          team for more information. Your users deserve the best, and so do you.
        </p>
      </section>
    </div>
  </article>
);

export default LandingPage;
