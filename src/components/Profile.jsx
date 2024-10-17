import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profilePictureUrl: '',
    bio: '',
    address: '',
    jobTitle: '',
    company: '',
    skills: '',
    experience: '',
    education: '',
    projects: '',
    certifications: '',
    websiteUrl: '',
    linkedinUrl: '',
    githubUrl: '',
    twitterUrl: '',
    notes: '',
    tags: '',
    reminders: '',
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(profileData);
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={profileData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePictureUrl">Profile Picture URL</label>
          <input
            type="text"
            id="profilePictureUrl"
            name="profilePictureUrl"
            value={profileData.profilePictureUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profileData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={profileData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={profileData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={profileData.skills}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={profileData.experience}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education</label>
          <textarea
            id="education"
            name="education"
            value={profileData.education}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projects">Projects</label>
          <textarea
            id="projects"
            name="projects"
            value={profileData.projects}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="certifications">Certifications</label>
          <textarea
            id="certifications"
            name="certifications"
            value={profileData.certifications}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="websiteUrl">Website URL</label>
          <input
            type="text"
            id="websiteUrl"
            name="websiteUrl"
            value={profileData.websiteUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedinUrl">LinkedIn URL</label>
          <input
            type="text"
            id="linkedinUrl"
            name="linkedinUrl"
            value={profileData.linkedinUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="githubUrl">GitHub URL</label>
          <input
            type="text"
            id="githubUrl"
            name="githubUrl"
            value={profileData.githubUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitterUrl">Twitter URL</label>
          <input
            type="text"
            id="twitterUrl"
            name="twitterUrl"
            value={profileData.twitterUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={profileData.notes}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={profileData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reminders">Reminders</label>
          <textarea
            id="reminders"
            name="reminders"
            value={profileData.reminders}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="profile-button">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
