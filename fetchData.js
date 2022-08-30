const axios = require("axios");

async function fetchData() {
        const res = await axios.get("https://reqres.in/api/users/1");
        return res.data.data.first_name;
}

module.exports = fetchData;
