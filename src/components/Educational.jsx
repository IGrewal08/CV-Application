import { useState } from "react";
import "/src/styles/Educational.css";

export default function Educational() {
  const [edit, setEdit] = useState(true);
  const [formData, setFormData] = useState([
    {
      name: "",
      location: "",
      degree: "",
      gradDate: "",
      GPA: "",
      ID: crypto.randomUUID(),
    },
  ]);

  const handleInputChange = (e, ID) => {
    const { name, value } = e.target;
    const myArr = formData.map((form) =>
      form.ID === ID ? update(name, value, form) : form
    );

    setFormData(myArr);
  };

  function update(name, value, prevForm) {
    const changedForm = {
      ...prevForm,
      [name]: value,
    };
    return changedForm;
  }

  function handleAdd() {
    const newForm = {
      name: "",
      location: "",
      degree: "",
      gradDate: "",
      GPA: "",
      ID: crypto.randomUUID(),
    };

    setFormData([...formData, newForm]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(!edit);
  }

  if (edit) {
    return (
      <>
        {formData.map((form) => (
          <Build
            key={form.ID}
            buildData={form}
            onChange={(e) => handleInputChange(e, form.ID)}
          />
        ))}
        <button className="add_form" type="button" onClick={handleAdd}>
          Add
        </button>
        <button className="submit_general" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </>
    );
  } else {
    return (
      <>
        {formData.map((form) => (
          <div className="container">
            <div className="educational_title_DOM">
              <h4>
                <b>{form.name}</b>
              </h4>
              <h4>{form.location}</h4>
            </div>
            <div className="data_DOM">
              <ul>
                <li>{form.degree}</li>
                <li>{form.GPA}</li>
              </ul>
              <ul className="offset_date">
                <li className="date">{form.gradDate}</li>
              </ul>
            </div>
          </div>
        ))}
        <button
          className="edit_button_educational"
          type="button"
          onClick={handleSubmit}
        >
          Edit
        </button>
      </>
    );
  }
}

function Build({ buildData, onChange }) {
  return (
    <>
      <div className="section">
        <div className="input_name">
          <label>College Name</label>
          <input
            type="text"
            name="name"
            value={buildData.name}
            onChange={onChange}
          />
        </div>
        <div className="input_name">
          <label>College Location</label>
          <input
            type="text"
            name="location"
            value={buildData.location}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="section">
        <div className="input_name">
          <label>Degree Description</label>
          <textarea
            type="text"
            name="degree"
            value={buildData.degree}
            onChange={onChange}
            placeholder="School of Engineering and Applied Science: BSE in Computer Science, Minor in Mathematics"
            maxLength={200}
            cols={100}
          />
        </div>
        <div className="input_name">
          <label>Graduation Date</label>
          <input
            type="date"
            name="gradDate"
            value={buildData.gradDate}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="section">
        <div className="input_name">
          <label>GPA/Honors</label>
          <textarea
            type="text"
            name="GPA"
            value={buildData.GPA}
            onChange={onChange}
            placeholder="Cumulative GPA: 3.72/4.00 | Honors: Wharton Dean’s List & Engineering Dean’s List (May 20xx)"
            maxLength={200}
            cols={100}
          />
        </div>
      </div>
    </>
  );
}
