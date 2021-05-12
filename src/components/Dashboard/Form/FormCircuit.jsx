import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

export default function FormActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [difflevel, setDifflevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("circuit");
    const postCircuit = async () => {
      try {
        const response = await axios.post("http://localhost:8081/circuits", {
          title: title,
          description: description,
          image_1: img1,
          image_2: img2,
          image_3: img3,
          image_4: img4,
          distance: distance,
          duration: duration,
          difflevel: difflevel,
        });
      } catch (err) {
        console.log(err);
      }
    };
    postCircuit();
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
            <div className="img-input">
              <input
                name="img1"
                type="url"
                value={img1}
                onChange={(e) => setImg1(e.target.value)}
              />
              {
                <div className="preview-img">
                  {img1 && <img src={img1} alt="preview" />}
                </div>
              }
            </div>
            <input
              name="img2"
              type="url"
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
            />
            <div className="preview-img">
              {img2 && <img src={img2} alt="preview" />}
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
              {img3 && <img src={img3} alt="preview" />}
            </div>
            <input
              name="img4"
              type="url"
              value={img4}
              onChange={(e) => setImg4(e.target.value)}
            />
            <div className="preview-img">
              {img4 && <img src={img4} alt="preview" />}
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
        <label>
          Duration :
          <input
            name="duration"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </label>

        <label>
          Level of Difficulty :
          <input
            name="difflevel"
            type="text"
            value={difflevel}
            onChange={(e) => setDifflevel(e.target.value)}
            required
          />
        </label>

        <input type="submit" value="Submit"></input>
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
