import React, { useState } from "react";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: {
      name: "",
      website: "",
    },
    project: [{ title: "", techStack: [], link: "" }],
    experience: [
      {
        title: "",
        location: "",
        companyName: "",
        status: "present",
        duration: "",
      },
    ],
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, field, index, key) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].map((item, idx) =>
        idx === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const handleAddField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [
        ...prevData[field],
        field === "project"
          ? { title: "", techStack: [], link: "" }
          : {
              title: "",
              location: "",
              companyName: "",
              status: "present",
              duration: "",
            },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here, e.g., post to API endpoint
    console.log(formData);
  };

  return (
    <form className="max-w-3xl mx-auto p-4" onSubmit={handleSubmit}>
      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Company */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Company Name</label>
        <input
          type="text"
          name="company.name"
          value={formData.company.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: { ...formData.company, name: e.target.value },
            })
          }
          className="border p-2 w-full rounded"
        />
        <label className="block text-sm font-medium mb-1 mt-2">
          Company Website
        </label>
        <input
          type="text"
          name="company.website"
          value={formData.company.website}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: { ...formData.company, website: e.target.value },
            })
          }
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Projects</h3>
        {formData.project.map((project, index) => (
          <div key={index} className="mb-2">
            <label className="block text-sm font-medium">Project Title</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => handleNestedChange(e, "project", index, "title")}
              className="border p-2 w-full rounded mb-1"
            />
            <label className="block text-sm font-medium">Tech Stack</label>
            <input
              type="text"
              value={project.techStack.join(", ")}
              onChange={(e) =>
                handleNestedChange(e, "project", index, "techStack")
              }
              className="border p-2 w-full rounded mb-1"
            />
            <label className="block text-sm font-medium">Link</label>
            <input
              type="text"
              value={project.link}
              onChange={(e) => handleNestedChange(e, "project", index, "link")}
              className="border p-2 w-full rounded"
            />
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
          onClick={() => handleAddField("project")}
        >
          Add Project
        </button>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <label className="block text-sm font-medium">
              Experience Title
            </label>
            <input
              type="text"
              value={exp.title}
              onChange={(e) =>
                handleNestedChange(e, "experience", index, "title")
              }
              className="border p-2 w-full rounded mb-1"
            />
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              value={exp.location}
              onChange={(e) =>
                handleNestedChange(e, "experience", index, "location")
              }
              className="border p-2 w-full rounded mb-1"
            />
            <label className="block text-sm font-medium">Company Name</label>
            <input
              type="text"
              value={exp.companyName}
              onChange={(e) =>
                handleNestedChange(e, "experience", index, "companyName")
              }
              className="border p-2 w-full rounded mb-1"
            />
            <label className="block text-sm font-medium">Status</label>
            <select
              value={exp.status}
              onChange={(e) =>
                handleNestedChange(e, "experience", index, "status")
              }
              className="border p-2 w-full rounded mb-1"
            >
              <option value="present">Present</option>
              <option value="completed">Completed</option>
            </select>
            <label className="block text-sm font-medium">Duration</label>
            <input
              type="text"
              value={exp.duration}
              onChange={(e) =>
                handleNestedChange(e, "experience", index, "duration")
              }
              className="border p-2 w-full rounded"
            />
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
          onClick={() => handleAddField("experience")}
        >
          Add Experience
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AdminForm;
