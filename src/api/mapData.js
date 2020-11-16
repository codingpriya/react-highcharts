import axios from 'axios';

class MapData{
    baseUrl = "https://code.highcharts.com/mapdata/";

    getWorld = async () => {
        return await axios.get(this.baseUrl + "countries/kr/kr-all.geo.json");
    }
}

export default MapData;