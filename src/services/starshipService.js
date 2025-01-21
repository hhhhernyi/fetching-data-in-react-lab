const BASE_URL = "https://swapi.info/api/starships";

async function getStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      // Throw an error if we get a response that doesn't
      // hold valid starship data.
      throw new Error("Failed to fetch starships.");
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

getStarships();

export { getStarships };
