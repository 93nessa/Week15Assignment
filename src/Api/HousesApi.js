const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';


class HousesApi {
    getHouses = async () => {
        try {
        const resp = await fetch (HOUSES_ENDPOINT);
        const data = await resp.json ();
        return data;
      } catch (e) {
        console.log('There is an issue with getHouses', e)
      }
    }
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify (house)
            });
            return await resp.json();
        }catch(e) {
            console.log('There is an issue with adding houses', e);
        }
    }
}export const housesApi = new HousesApi();