export default function aboutPage() {
  return (
    <>
      <h2>About Timmy</h2>

      <h3>Description</h3>
      <p>
        I am a young, hardworking and responsible lad. I have been coding since
        my early teenage years. I enjoy writing code. I have experience using
        both frontend and backend technologies to build beautiful, responsive
        and fuctional web apps Leaving my clients impressed and delivering
        quality service are my biggest motivation while writing codes.
      </p>

      <h3>My Stacks</h3>
      <div>
      <card className="mycard" data-aos="fade-left" data-aos-duration="1500">
            <h2>Front-End</h2>
            <p>
              Here is a list of stack I use best for creating beautiful layout
              and designs
            </p>
            <ul>
              <li><span>HTML</span></li>
              <li><span>CSS</span></li>
              <li><span>Javascript</span></li>
              <li><span>Bootstrap</span></li>
              <li><span>Bulma</span></li>
              <li><span>Tailwind CSS</span></li>
              <li><span>SCSS</span></li>
              <li><span>Material UI</span></li>
              <li><span>Semantic UI</span></li>
              <li><span>React Js</span></li>
            </ul>
          </card>
          <card className="mycard" data-aos="fade-left" data-aos-duration="2000">
            <h2>Back-End</h2>
            <p>
              On the backend, I am very much comfortable using the following
              stacks
            </p>
            <ul>
              <li><span>Nodejs</span></li>
              <li><span>Expressjs</span></li>
              <li><span>Javascript</span></li>
            </ul>
          </card>
          <card className="mycard" data-aos="fade-left" data-aos-duration="2500">
            <h2>Database</h2>
            <p>Here is a list of database technologies I use effectively</p>
            <ul>
              <li><span>Mongo DB</span></li>
              <li><span>Mongoose</span></li>
            </ul>
          </card>
          <card className="mycard" data-aos="fade-left" data-aos-duration="2500">
            <h2>Wordpress</h2>
            <p>
              Here is a list of technologies I use for creating amazing
              wordpress websites
            </p>
            <ul>
              <li><span>Wordpress</span></li>
              <li><span>WooCommerce</span></li>
              <li><span>Elementor</span></li>
              <li><span>Divi</span></li>
            </ul>
          </card>
      </div>
    </>
  );
}
