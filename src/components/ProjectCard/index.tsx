import styles from './ProjectCard.module.css';
import { ActivityIcon, MoveRight } from 'lucide-react';
import RepoLastUpdate from '@/components/RepoLastUpdate';

type ProjectCardProps = {
  title: string;
  description: string;
  repo: string;
  linkUrl: string;
  projectNumber: number;
  techStack: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, linkUrl, repo, projectNumber, techStack }) => {
  return (
    <a className={`${styles.project} ${styles[`bg${projectNumber}`]}`} href={linkUrl} target="_blank">
      <div className={styles.projectName}>{title}</div>
      <div className={styles.projectDescription}>{description}</div>
      {techStack.map((tech) => (
        <span key={tech} className={styles.tag}>{tech}</span>
      ))}
      <div className={`last-update ${styles.repoLastUpdate}`}>
        <ActivityIcon size={12} />
        <RepoLastUpdate owner="tm0e83" repo={repo} />
      </div>
      <div className={styles.arrow}>
        <MoveRight strokeWidth={1} />
      </div>              
    </a>
  );
}

export default ProjectCard;