import DashActivityListing from "./DashActivityListing";
import DashCircuitsListing from "./DashCircuitsListing";



export default function Dashboard() {

    console.log('dashboard')
    return(
        <>
            <DashActivityListing/>
            <DashCircuitsListing/>
        </>
    )


}