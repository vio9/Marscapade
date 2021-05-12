import DashActivityListing from "./DashActivityListing";
import DashCircuitsListing from "./DashCircuitsListing";
import FormActivity from "./Form/FormActivity";
import FormCircuit from "./Form/FormCircuit";



export default function Dashboard() {

    console.log('dashboard')
    return(
        <>
            <DashActivityListing/>
            <FormActivity/>
            <DashCircuitsListing/>
            <FormCircuit/>
        </>
    )


}