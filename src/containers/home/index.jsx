import { CITY_LIST } from "../../constants/cityList";
import Grid from "@mui/material/Grid";
import CityWrapper from "./cityWrapper";

const Home = () => {
    return <div>
        <Grid container spacing={4} >
            {
                CITY_LIST.map((city, index) => <Grid item key={index} md={4}>
                    <CityWrapper city={city} />
                </Grid>)
            }
        </Grid>
    </div>
}

export default Home;