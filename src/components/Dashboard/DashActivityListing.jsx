import "./Dashboard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function DashActivityListing() {
  const [activityList, setActivityList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getActivityList = async () => {
      try {
        const response = await axios.get("http://localhost:8081/activities");
        console.log("response", response);
        setActivityList(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getActivityList();
  }, [loading]);

  const handleDeleteActivity = (id) => {
    const deleteCircuit = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:8081/activities/${id}`
        );
        setActivityList(activityList.filter((activity) => activity.id !== id));
      } catch (err) {
        console.log(err);
      }
    };
    deleteCircuit();
  };

  console.log("activities", activityList);
  if (loading) return <CircularProgress />;

  console.log("dash activity", activityList);

  return (
    activityList &&
    activityList.length > 0 &&
    activityList.map((act, index) => {
      return (
        <div className="dash-item" key={index}>
          <div className="item-head">
            <h3>
              #{act.id} {act.name}
            </h3>
            <DeleteIcon onClick={() => handleDeleteActivity(act.id)} />
          </div>
          <div className="dash-imgs">
            {act.image_1 && <img src={act.image_1}></img>}
            {act.image_2 && <img src={act.image_2}></img>}
            {act.image_3 && <img src={act.image_3}></img>}
            {act.image_4 && <img src={act.image_4}></img>}
          </div>
          <p>{act.description}</p>
          <p>Price: {act.price ? act.price : "0.00"}$</p>
          <p>Location: {act.location}</p>
          <p>Nbr de participant: {act.nbpax}</p>
        </div>
      );
    })
  );
}
