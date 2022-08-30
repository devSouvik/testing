const axios = require("axios");

async function getFirstAlbumTitle() {
        const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
        );
        return response.data[0].username;
}

module.exports = getFirstAlbumTitle;
