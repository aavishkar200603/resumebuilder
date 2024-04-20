
// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const ResumeForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     education: '',
//     projects: '',
//     experience: '',
//     skills: '',
//     certifications: '',
//     linkedin: '',
//     github: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleDownload = () => {
//     const lineYPositions = [40, 115, 185, 255, 325, 395]; // Y positions for horizontal lines
  
//     const pdf = new jsPDF('p', 'mm', 'a4');
  
//     // Add horizontal lines
//     pdf.setDrawColor(0);
//     lineYPositions.forEach((y) => {
//       pdf.line(10, y, 150, y); // Change 200 to your desired width
//     });
  
//     // Add PDF content
//     pdf.setFont('times', 'normal');
//     const lineHeight = 8;
//     let yPosition = 30; // Starting Y position
  
//     // Add text for each field
//     pdf.text(`Name: ${formData.fullName}`, 15, yPosition);
//     yPosition += lineHeight * 3; // Adjusted spacing between lines
  
//     pdf.text(`Email: ${formData.email}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`Phone: ${formData.phone}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`Address: ${formData.address}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`LinkedIn: ${formData.linkedin}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`GitHub: ${formData.github}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`Education:\n${formData.education}`, 15, yPosition);
//     yPosition += lineHeight * 4;
  
//     pdf.text(`Projects:\n${formData.projects}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`Experience:\n${formData.experience}`, 15, yPosition);
//     yPosition += lineHeight * 4;
  
//     pdf.text(`Skills:\n${formData.skills}`, 15, yPosition);
//     yPosition += lineHeight * 3;
  
//     pdf.text(`Certifications:\n${formData.certifications}`, 15, yPosition);
  
//     pdf.save('resume.pdf');
//   };
  

//   return (
//     <div className="container mx-auto p-4">
//       <div id="resume-page" className="bg-white p-8 shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Resume Generator</h1>
//         <form>
//           {/* Input fields for resume sections */}
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block font-medium mb-2">Full Name</label>
//             <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-medium mb-2">Email</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block font-medium mb-2">Phone</label>
//             <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="address" className="block font-medium mb-2">Address</label>
//             <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="linkedin" className="block font-medium mb-2">LinkedIn</label>
//             <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="github" className="block font-medium mb-2">GitHub</label>
//             <input type="text" id="github" name="github" value={formData.github} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="education" className="block font-medium mb-2">Education</label>
//             <textarea id="education" name="education" value={formData.education} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="projects" className="block font-medium mb-2">Projects</label>
//             <textarea id="projects" name="projects" value={formData.projects} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="experience" className="block font-medium mb-2">Experience</label>
//             <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="skills" className="block font-medium mb-2">Skills</label>
//             <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="certifications" className="block font-medium mb-2">Certifications</label>
//             <textarea id="certifications" name="certifications" value={formData.certifications} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//           </div>
          
//         </form>
//         <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Download as PDF</button>
//       </div>
//     </div>
//   );
// };

// export default ResumeForm;


// import React, { useState } from 'react';
// import jsPDF from 'jspdf';

// function ResumeForm() {
//   const [resumeData, setResumeData] = useState({
//     personalInfo: { name: '', email: '', phone: '' },
//     summary: '',
//     experience: ['', '', '', '', '', '', '', '', ''],
//     education: ['', '', '', '', '', '', '', '', ''],
//     skills: ['', '', '', '', '', '', '', '', '']
//   });

//   // Functions to update resume data
//   const handlePersonalInfoChange = (e) => {
//     const { name, value } = e.target;
//     setResumeData(prevData => ({
//       ...prevData,
//       personalInfo: {
//         ...prevData.personalInfo,
//         [name]: value
//       }
//     }));
//   };

//   const handleExperienceChange = (index, value) => {
//     setResumeData(prevData => ({
//       ...prevData,
//       experience: [
//         ...prevData.experience.slice(0, index),
//         value,
//         ...prevData.experience.slice(index + 1)
//       ]
//     }));
//   };

//   const handleEducationChange = (index, value) => {
//     setResumeData(prevData => ({
//       ...prevData,
//       education: [
//         ...prevData.education.slice(0, index),
//         value,
//         ...prevData.education.slice(index + 1)
//       ]
//     }));
//   };

//   const handleSkillsChange = (index, value) => {
//     setResumeData(prevData => ({
//       ...prevData,
//       skills: [
//         ...prevData.skills.slice(0, index),
//         value,
//         ...prevData.skills.slice(index + 1)
//       ]
//     }));
//   };

//   // Function to download resume as PDF
//   const downloadResume = () => {
//     const doc = new jsPDF();

//     // Add personal information to the PDF
//     doc.text(`Name: ${resumeData.personalInfo.name}`, 10, 10);
//     doc.text(`Email: ${resumeData.personalInfo.email}`, 10, 20);
//     doc.text(`Phone: ${resumeData.personalInfo.phone}`, 10, 30);
    
//     // Add experience, education, and skills to the PDF
//     const startY = 40;
//     const lineHeight = 10;
//     const sectionGap = 10;
//     let y = startY;

//     // Add experience section
//     doc.text('Experience:', 10, y);
//     resumeData.experience.forEach((exp, index) => {
//       y += lineHeight;
//       doc.text(`- ${exp}`, 15, y);
//     });
//     y += sectionGap;

//     // Add education section
//     doc.text('Education:', 10, y);
//     resumeData.education.forEach((edu, index) => {
//       y += lineHeight;
//       doc.text(`- ${edu}`, 15, y);
//     });
//     y += sectionGap;

//     // Add skills section
//     doc.text('Skills:', 10, y);
//     resumeData.skills.forEach((skill, index) => {
//       y += lineHeight;
//       doc.text(`- ${skill}`, 15, y);
//     });

//     // Save the PDF
//     doc.save('resume.pdf');
//   };

//   return (
//     <div className="container mx-auto p-4 flex-wrap gap-10">
//       {/* Input fields for personal information */}
//       <input type="text" name="name" value={resumeData.personalInfo.name} onChange={handlePersonalInfoChange} className="mb-4 p-2 rounded border border-gray-300" placeholder="Name" />
//       <input type="text" name="email" value={resumeData.personalInfo.email} onChange={handlePersonalInfoChange} className="mb-4 p-2 rounded border border-gray-300" placeholder="Email" />
//       <input type="text" name="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfoChange} className="mb-4 p-2 rounded border border-gray-300" placeholder="Phone" />

//       {/* Input fields for experience */}
//       {resumeData.experience.map((exp, index) => (
//         <input key={index} type="text" value={exp} onChange={(e) => handleExperienceChange(index, e.target.value)} className="mb-4 p-2 rounded border border-gray-300" placeholder={`Experience ${index + 1}`} />
//       ))}

//       {/* Input fields for education */}
//       {resumeData.education.map((edu, index) => (
//         <input key={index} type="text" value={edu} onChange={(e) => handleEducationChange(index, e.target.value)} className="mb-4 p-2 rounded border border-gray-300" placeholder={`Education ${index + 1}`} />
//       ))}

//       {/* Input fields for skills */}
//       {resumeData.skills.map((skill, index) => (
//         <input key={index} type="text" value={skill} onChange={(e) => handleSkillsChange(index, e.target.value)} className="mb-4 p-2 rounded border border-gray-300" placeholder={`Skill ${index + 1}`} />
//       ))}

//       {/* Button to download resume */}
//       <button onClick={downloadResume} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Download Resume
//       </button>
//     </div>
//   );
// }

// export default ResumeForm;


import React, { useState } from 'react';
import jsPDF from 'jspdf';

function ResumeForm() {
  const [resumeData, setResumeData] = useState({
    personalInfo: { name: '', email: '', phone: '', address: '', linkedin: '', github: '' },
    summary: '',
    experience: ['', '', '', ''],
    education: ['', '', '', ''],
    skills: ['', '', '', ''],
    projects: ['', '', '', ''],
    certifications: ['', '', '', '']
  });

  // Functions to update resume data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value
      }
    }));
  };

  const handleExperienceChange = (index, value) => {
    setResumeData(prevData => ({
      ...prevData,
      experience: [
        ...prevData.experience.slice(0, index),
        value,
        ...prevData.experience.slice(index + 1)
      ]
    }));
  };

  const handleEducationChange = (index, value) => {
    setResumeData(prevData => ({
      ...prevData,
      education: [
        ...prevData.education.slice(0, index),
        value,
        ...prevData.education.slice(index + 1)
      ]
    }));
  };

  const handleSkillsChange = (index, value) => {
    setResumeData(prevData => ({
      ...prevData,
      skills: [
        ...prevData.skills.slice(0, index),
        value,
        ...prevData.skills.slice(index + 1)
      ]
    }));
  };

  const handleProjectsChange = (index, value) => {
    setResumeData(prevData => ({
      ...prevData,
      projects: [
        ...prevData.projects.slice(0, index),
        value,
        ...prevData.projects.slice(index + 1)
      ]
    }));
  };

  const handleCertificationsChange = (index, value) => {
    setResumeData(prevData => ({
      ...prevData,
      certifications: [
        ...prevData.certifications.slice(0, index),
        value,
        ...prevData.certifications.slice(index + 1)
      ]
    }));
  };

// Function to download resume as PDF
const downloadResume = () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add personal details section
  doc.text('Personal Details', 10, 10);
  doc.text(`Name: ${resumeData.personalInfo.name}`, 15, 20);
  doc.text(`Email: ${resumeData.personalInfo.email}`, 15, 30);
  doc.text(`Phone: ${resumeData.personalInfo.phone}`, 15, 40);
  doc.text(`Address: ${resumeData.personalInfo.address}`, 15, 50);
  doc.text(`LinkedIn: ${resumeData.personalInfo.linkedin}`, 15, 60);
  doc.text(`GitHub: ${resumeData.personalInfo.github}`, 15, 70);
  doc.line(10, 75, 200, 75); // Horizontal line below personal details

  // Add education section
  doc.text('Education', 10, 80);
  resumeData.education.forEach((edu, index) => {
    doc.text(`- ${edu}`, 15, 90 + (index * 10));
  });
  doc.line(10, 85 + (resumeData.education.length * 10), 200, 85 + (resumeData.education.length * 10)); // Horizontal line below education

  // Add skills section
  doc.text('Skills', 10, 90 + (resumeData.education.length * 10));
  resumeData.skills.forEach((skill, index) => {
    doc.text(`- ${skill}`, 15, 100 + (resumeData.education.length * 10) + (index * 10));
  });
  doc.line(10, 95 + (resumeData.education.length * 10) + (resumeData.skills.length * 10), 200, 95 + (resumeData.education.length * 10) + (resumeData.skills.length * 10)); // Horizontal line below skills

  // Add experience section
  doc.text('Experience', 10, 100 + (resumeData.education.length * 10) + (resumeData.skills.length * 10));
  resumeData.experience.forEach((exp, index) => {
    doc.text(`- ${exp}`, 15, 110 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (index * 10));
  });
  doc.line(10, 105 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10), 200, 105 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10)); // Horizontal line below experience

  // Add projects section
  doc.text('Projects', 10, 110 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10));
  resumeData.projects.forEach((project, index) => {
    doc.text(`- ${project}`, 15, 120 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (index * 10));
  });
  doc.line(10, 115 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (resumeData.projects.length * 10), 200, 115 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (resumeData.projects.length * 10)); // Horizontal line below projects

  // Add certifications section
  doc.text('Certifications', 10, 120 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (resumeData.projects.length * 10));
  resumeData.certifications.forEach((certification, index) => {
    doc.text(`- ${certification}`, 15, 130 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (resumeData.projects.length * 10) + (index * 10));
  });
  doc.line(10, 125 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (resumeData.projects.length * 10) + (resumeData.certifications.length * 10), 200, 125 + (resumeData.education.length * 10) + (resumeData.skills.length * 10) + (resumeData.experience.length * 10) + (resumeData.projects.length * 10) + (resumeData.certifications.length * 10)); // Horizontal line below certifications

  // Save the PDF
  doc.save('resume.pdf');
};



  return (
    <div className="container mx-auto p-4">
      {/* Personal Details Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Personal Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input type="text" name="name" value={resumeData.personalInfo.name} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" placeholder="Name" />
          </div>
          <div>
            <input type="text" name="email" value={resumeData.personalInfo.email} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="phone" value={resumeData.personalInfo.phone} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" placeholder="Phone" />
          </div>
          <div>
            <input type="text" name="address" value={resumeData.personalInfo.address} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" placeholder="Address" />
          </div>
          <div>
            <input type="text" name="linkedin" value={resumeData.personalInfo.linkedin} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" placeholder="LinkedIn URL" />
          </div>
          <div>
            <input type="text" name="github" value={resumeData.personalInfo.github} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" placeholder="GitHub URL" />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <input type="text" value={edu} onChange={(e) => handleEducationChange(index, e.target.value)} className="w-full p-2 rounded border border-gray-300" placeholder={`Education ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Skills</h2>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <input type="text" value={skill} onChange={(e) => handleSkillsChange(index, e.target.value)} className="w-full p-2 rounded border border-gray-300" placeholder={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <input type="text" value={exp} onChange={(e) => handleExperienceChange(index, e.target.value)} className="w-full p-2 rounded border border-gray-300" placeholder={`Experience ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <input type="text" value={project} onChange={(e) => handleProjectsChange(index, e.target.value)} className="w-full p-2 rounded border border-gray-300" placeholder={`Project ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Certifications</h2>
        {resumeData.certifications.map((certification, index) => (
          <div key={index} className="mb-2">
            <input type="text" value={certification} onChange={(e) => handleCertificationsChange(index, e.target.value)} className="w-full p-2 rounded border border-gray-300" placeholder={`Certification ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Button to download resume */}
      <button onClick={downloadResume} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download Resume
      </button>
    </div>
  );
}

export default ResumeForm;
