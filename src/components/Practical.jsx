import { useState } from "react";
import "/src/styles/Practical.css";

export default function Practical() {
  const [edit, setEdit] = useState(true);
  const [formData, setFormData] = useState([
    {
      companyName: "",
      location: "",
      dateStart: "",
      dateEnd: "",
      description_1: "",
      description_2: "",
      description_3: "",
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
      companyName: "",
      location: "",
      dateStart: "",
      dateEnd: "",
      description_1: "",
      description_2: "",
      description_3: "",
      ID: crypto.randomUUID(),
    };

    setFormData([...formData, newForm]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  if (edit) {
    return (
      <>
        {formData.map((form) => (
          <Job
            key={form.ID}
            jobData={form}
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
            <div className="practical_title_DOM">
                <div className="job_title">
                    <h4>
                    <b>{form.name}</b>
                    </h4>
                    <h4><i>, {form.location}</i></h4>
                </div>
                <div className="start_end_date_DOM">
                    <h4 className="date">{form.dateStart} - {form.dateEnd}</h4>
                </div>
            </div>
            <div className="data_DOM">
                <ul>
                    <li>{form.description_1}</li>
                    <li>{form.description_2}</li>
                    <li>{form.description_3}</li>
                </ul>
            </div>
          </div>
        ))}
      </>
    );
  }
}

function Job({ jobData, onChange }) {
  return (
    <div className="job_divider">
      <div className="section">
        <div className="input_name">
          <label>Company name / Job title</label>
          <input
            type="text"
            name="name"
            value={jobData.name}
            onChange={onChange}
          />
        </div>
        <div className="input_name">
          <label>Company Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={onChange}
          />
        </div>
        <div className="start_end_date">
          <div className="input_name">
            <label>Date Start</label>
            <input
              type="date"
              name="dateStart"
              value={jobData.dateStart}
              onChange={onChange}
            />
          </div>
          <div className="input_name">
            <label>Date End</label>
            <input
              type="date"
              name="dateEnd"
              value={jobData.dateEnd}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="input_name">
          <label>Description 1</label>
          <textarea
            type="text"
            name="description_1"
            value={jobData.description_1}
            onChange={onChange}
            placeholder="Accomplished [X]: Increased blog engagement by 20%"
            maxLength={200}
            cols={100}
          />
        </div>
      </div>
      <div className="section">
        <div className="input_name">
          <label>Description 2</label>
          <textarea
            type="text"
            name="description_2"
            value={jobData.description_2}
            onChange={onChange}
            placeholder="Measured by [Y]: by writing and publishing 15 articles on the Google blog"
            maxLength={200}
            cols={100}
          />
        </div>
      </div>
      <div className="section">
        <div className="input_name">
          <label>Description 3</label>
          <textarea
            type="text"
            name="description_3"
            value={jobData.description_3}
            onChange={onChange}
            placeholder="By doing [Z]: leading to a 20% increase in user engagement"
            maxLength={200}
            cols={100}
          />
        </div>
      </div>
    </div>
  );
}
