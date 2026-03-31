import React from 'react';
import { useNavigate } from 'react-router-dom';
import Student from '../../assets/student.jpg';
import TPO from '../../assets/tpo.jpg';
import Management from '../../assets/management.jpg';
import Admin from '../../assets/admin.jpg';

function LandAbout() {
  const navigate = useNavigate(); // ✅ ADD

  const roles = [
    {
      title: "Student",
      image: Student,
      description:
        "Students can register, explore job opportunities, apply for jobs, and track application status with a personalized dashboard.",
    },
    {
      title: "TPO (Training & Placement Officer)",
      image: TPO,
      description:
        "TPOs manage company data, job postings, application reviews, and generate insightful reports for placement tracking.",
    },
    {
      title: "Management",
      image: Management,
      description:
        "Management can monitor overall placement activities, review analytics, and control system access and quality assurance.",
    },
    {
      title: "Super User (Admin)",
      image: Admin,
      description:
        "Admins handle all roles with super privileges—managing users, system settings, and ensuring smooth operations across modules.",
    },
  ];

  // ✅ LOGIN BUTTONS HERE
  const loginLinks = [
    { label: 'Login as TPO', path: '/tpo/login' },
    { label: 'Login as Management', path: '/management/login' },
    { label: 'Login as Super Admin', path: '/admin' },
  ];

  return (
    <div
      id="about"
      className="bg-gradient-to-tr from-pink-100 via-purple-100 to-pink-100 py-10 scroll-mt-24"
    >
      {/* 🔥 LOGIN BUTTONS AT TOP */}
      <div className="flex flex-wrap justify-center items-center max-md:gap-3 md:gap-6 mb-8">
        {loginLinks.map((link, idx) => (
          <button
            key={idx}
            onClick={() => navigate(link.path)}
            className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-md text-white text-sm font-medium shadow-md transition-all duration-300"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* ABOUT TEXT */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 playfair">About CPMS</h2>
        <p className="text-md md:text-lg max-w-3xl mx-auto text-gray-700 px-3">
          Developed by Third year students of MBIT, CPMS (College Placement Management System) is a powerful web-based platform to streamline and manage campus placements efficiently.
        </p>
      </div>

      {/* ROLES */}
      <div className="flex flex-wrap justify-center items-stretch gap-10">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-lg rounded-xl w-80 max-md:py-3 max-md:px-2 md:p-5 flex flex-col items-center transform hover:scale-105 transition duration-300"
          >
            <img
              src={role.image}
              alt={role.title}
              className="w-48 h-48 object-cover rounded-full border-4 border-green-300 shadow-md"
            />
            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-green-700 text-center">
              {role.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandAbout;