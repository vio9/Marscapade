import React, { useState } from "react";
import "./Form.scss";

export default function FormActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [distance, setDistance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Create Circuit</h1>

        <label>
          Title :
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description :
          <textarea
            name="description"
            type="textarea"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Images URL :
          <div className="img-row">
            <input
              name="img1"
              type="url"
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
            />
            {
              <div className="preview-img">
                {img1 && <img src={img1} alt="image 1" />}
              </div>
            }
            <input
              name="img2"
              type="url"
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
            />
            <div className="preview-img">
              {img2 && <img src={img2} alt="image 2" />}
            </div>
          </div>
          <div className="img-row">
            <input
              name="img3"
              type="url"
              value={img3}
              onChange={(e) => setImg3(e.target.value)}
            />
            <div className="preview-img">
              {img3 && <img src={img3} alt="image 3" />}
            </div>
            <input
              name="img4"
              type="url"
              value={img4}
              onChange={(e) => setImg4(e.target.value)}
            />
            <div className="preview-img">
              {img4 && <img src={img4} alt="image 4" />}
            </div>
          </div>
        </label>

        <label>
          Distance :
          <input
            name="distance"
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}

// CREATE TABLE circuit (
//   id INT NOT NULL AUTO_INCREMENT,
//   title VARCHAR(100) NOT NULL,
//   image_1 VARCHAR(250) NULL,
//   image_2 VARCHAR(250) NULL,
//   image_3 VARCHAR(250) NULL,
//   image_4 VARCHAR(250) NULL,
//   description TEXT NULL,
//   distance INT NULL,

//   duration TIMESTAMP NULL,

//   difflevel VARCHAR(10),
//   PRIMARY KEY (id)
//   );
