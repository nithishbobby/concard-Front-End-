import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Card.css'; // Add CSS for styling

const Card = ({ user = {} }) => {
  const {
    profilePictureUrl = '',
    firstName = 'Unknown',
    lastName = '',
    jobTitle = 'N/A',
    company = 'N/A',
    bio = 'No bio available',
    skills = [],
    experience = [],
    education = [],
    linkedinUrl = '#',
    githubUrl = '#',
    twitterUrl = '#',
    websiteUrl = '#',
  } = user;

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <div className="card-profile-picture">
            <img src={profilePictureUrl} alt="Profile" />
          </div>
          <div className="card-details">
            <h2>{`${firstName} ${lastName}`}</h2>
            <p>{jobTitle}</p>
            <p>{company}</p>
            <p>{bio}</p>
          </div>
        </div>
        <div className="card-body">
          <div className="card-section">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card-section">
            <h3>Experience</h3>
            <ul>
              {experience.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.title}</strong> at {exp.company}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-section">
            <h3>Education</h3>
            <ul>
              {education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.degree}</strong> at {edu.school}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} /> Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
