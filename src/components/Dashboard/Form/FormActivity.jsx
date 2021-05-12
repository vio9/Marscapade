import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

export default function FormActivity() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [person, setPerson] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("activity");
    const postActivity = async () => {
      try{
          const response = await axios.post('http://localhost:8081/activities', {
            name: name,
            description: description,
            nbpax: person,
            location: location,
            image_1: img1,
            image_2: img2,
            image_3: img3,
            image_4: img4,
            price: price
          })
      } catch(err) {
          console.log(err)
      }
    };
    postActivity();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Create Activity</h1>

        <div className="div-row">
          <label id="form-name">
            Name :
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Price :
            <input
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
        </div>

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
          Persons :
          <input
            name="person"
            type="number"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            required
          />
        </label>
        <label>
          Images URL :
          <div className="div-row">
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
            <div className="img-input">
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
          </div>
          <div className="div-row">
            <div className="img-input">
              <input
                name="img3"
                type="url"
                value={img3}
                onChange={(e) => setImg3(e.target.value)}
              />
              <div className="preview-img">
                {img3 && <img src={img3} alt="preview" />}
              </div>
            </div>
            <div className="img-input">
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
          </div>
        </label>

        <label>
          Location :
          <input
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
