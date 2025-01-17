// -- AXIOS
import axios from "axios";
// -- PROPERTIES
import { base } from "./properties";
// -- ENDPOINT
import { GETPeople, GETPlanetDetails } from "./properties";

// create axios instance
const api = axios.create({
  baseURL: base.baseURL,
  timeout: base.timeout,
});

// # GET PEOPLE
export async function getPeople() {
  try {
    const response = await api.get(GETPeople);
    return response.data;
  } catch (e) {
    console.error("Error during fetch people data", e);
  }
}

// # GET PLANET DETAILS
export async function getPlanetDetails(planetId) {
  try {
    const response = await api.get(GETPlanetDetails + planetId);
    return response.data;
  } catch (e) {
    console.error("Error during fetch people data", e);
  }
}
