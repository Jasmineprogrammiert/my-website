import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Contact = () => {
  return (
  <>
  <div id="contact">
    <a href="mailto:jasminezeng08@gmail.com" id="email-me"><EmailIcon className="icons" /></a> 
    <a href="https://www.linkedin.com/in/jasminzeng/" target="_blank"><LinkedInIcon className="icons" /></a>
    <a href="https://github.com/Jasmineprogrammiert" target="_blank"><GitHubIcon className="icons" /></a>
    <footer>
      <small>Copyright &copy; 2022 Jasmine Zi Xin Zeng. All rights reserved.</small>
      <a href="#top" className="back-to-top-a">
        <KeyboardDoubleArrowUpIcon className="back-to-top" />
        Back to Top
      </a>
    </footer>
  </div>
  </>
  )
}

export default Contact;