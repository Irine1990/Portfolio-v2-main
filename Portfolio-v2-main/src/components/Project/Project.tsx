import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Irine1990/PettyCashManager" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Petty Cash Manager</h3>
              <p> Petty cash management is a vital record-keeping system for tracking daily small business operational expenses.  Develop components for displaying, adding, editing, and deleting transactions. Use React hooks (useState, useEffect) for managing component state. Utilize Axios or Fetch API to communicate with the Node.js backend.Design a responsive UI with CSS frameworks like Bootstrap or Material UI.Implement login/signup components if integrating authentication  </p>
            </div>
            <footer> <ul className="tech-list"> <li>React.js</li> <li>Express.js</li> <li>MongoDB</li> <li>Node.js</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Irine1990/codiisfrontend" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>

              </div>
            </header>
            <div className="body">
              <h3>Tour Booking Management</h3>
              <p>
                Develop a React application with components for displaying tours, booking tours, managing bookings, and user authentication.
                Express server for handling API requests and integrate MongoDB with Mongoose for data storage. Define endpoints for CRUD operations Implement JWT-based authentication for secure API access and manage user roles for authorization.Use middleware for error handling and validation to ensure data integrity and user-friendly error messages. Design a responsive UI using CSS frameworks like Bootstrap or Material UI. Deploy frontend on platforms like Netlify, Vercel,  and backend on services like Heroku, render for production.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Irine1990/Sourcecode-for-dashboard" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>

              </div>
            </header>
            <div className="body">
              <h3>Admin Dashboard</h3>
              <p>
                Building components for various parts of the admin dashboard, such as user management, content management, analytics, etc.
                Using React Router for navigation between different sections of the admin dashboard. Using Redux, Context API, or local state management for handling application state, especially for data fetched from the backend.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Irine1990/Blog-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>

              </div>
            </header>
            <div className="body">
              <h3>Blog App</h3>
              <p>Authentication: Secure user authentication system to protect your blogs.
                Create Blog: Easily create and publish your blogs with a user-friendly interface.
                Delete Blog: Remove unwanted blogs with a simple delete option.
                Update Blog: Edit and update your blogs as your content evolves.
                View Other User Blogs: Explore and read blogs published by other users.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}