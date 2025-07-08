import { useState } from "react";
import "/src/styles/General.css";

export default function General() {
  const [edit, setEdit] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    Address: "",
    LinkedIn: "",
    GitHub: "",
    personalWebsite: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(!edit);
  }

  if (edit) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="input_field_links name">
          <Name nameData={formData} onChange={handleInputChange} />
        </div>

        <div className="input_field_links info">
          <Info infoData={formData} onChange={handleInputChange} />
        </div>

        <div className="input_field_links link">
          <Links linkData={formData} onChange={handleInputChange} />
        </div>

        <button className="submit_general" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  } else {
    const fullName = (
      formData.firstName +
      " " +
      formData.lastName
    ).toUpperCase();
    return (
      <>
        <h1>{fullName}</h1>
        <div className="info_DOM">
          <h5>
            <a href={formData.emailAddress}>{formData.emailAddress}</a>
          </h5>
          <h5>{formData.phoneNumber}</h5>
          <h5>{formData.Address}</h5>
        </div>
        <div className="links_DOM">
          <h5>
            <a href="#">
              <b>LinkedIn: </b>
              {formData.LinkedIn}
            </a>
          </h5>
          <h5>
            <a href="#">
              <b>GitHub: </b>
              {formData.GitHub}
            </a>
          </h5>
          <h5>
            <a href="#">
              <b>Personal Website: </b>
              {formData.personalWebsite}
            </a>
          </h5>
        </div>
        <button
          className="edit_button_general"
          type="button"
          onClick={handleSubmit}
        >
          Edit
        </button>
      </>
    );
  }
}

function Name({ nameData, onChange }) {
  return (
    <>
      <div className="input_field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={nameData.firstName}
          onChange={onChange}
        />
      </div>
      <div className="input_field">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={nameData.lastName}
          onChange={onChange}
        />
      </div>
    </>
  );
}

function Info({ infoData, onChange }) {
  return (
    <>
      <div className="input_field">
        <label>Email Address</label>
        <input
          type="email"
          name="emailAddress"
          value={infoData.emailAddress}
          onChange={onChange}
        />
      </div>

      <div className="input_field">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={infoData.phoneNumber}
          onChange={onChange}
        />
      </div>

      <div className="input_field">
        <label>Address</label>
        <input
          type="text"
          name="Address"
          value={infoData.Address}
          onChange={onChange}
        />
      </div>
    </>
  );
}

function Links({ linkData, onChange }) {
  return (
    <>
      <div className="input_field">
        <label>LinkedIn</label>
        <input
          type="text"
          name="LinkedIn"
          value={linkData.LinkedIn}
          onChange={onChange}
        />
      </div>
      <div className="input_field">
        <label>GitHub</label>
        <input
          type="text"
          name="GitHub"
          value={linkData.GitHub}
          onChange={onChange}
        />
      </div>
      <div className="input_field">
        <label>Personal Website</label>
        <input
          type="text"
          name="personalWebsite"
          value={linkData.personalWebsite}
          onChange={onChange}
        />
      </div>
    </>
  );
}
