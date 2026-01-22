import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function EmailIcon(props: React.ComponentProps<'svg'>) {
  return <FaEnvelope {...props} />;
}
export function LinkedInIcon(props: React.ComponentProps<'svg'>) {
  return <FaLinkedin {...props} />;
}
export function GitHubIcon(props: React.ComponentProps<'svg'>) {
  return <FaGithub {...props} />;
}
