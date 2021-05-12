import "./Dashboard.scss";
import DashActivityListing from "./DashActivityListing";
import DashCircuitsListing from "./DashCircuitsListing";
import FormActivity from "./Form/FormActivity";
import FormCircuit from "./Form/FormCircuit";

export default function Dashboard() {
  console.log("dashboard");
  return (
    <div className="dash-ctn">
      <div className="forms">
        <FormActivity />
        <FormCircuit />
      </div>
      <div className="dashboard">
        <div className="dash-list">
          <h2>Activities</h2>
          <DashActivityListing />
        </div>
        <div className="dash-list">
          <h2>Circuits</h2>
          <DashCircuitsListing />
        </div>
      </div>
    </div>
  );
}
