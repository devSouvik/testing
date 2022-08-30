const getFirstAlbumTitle = require("./sample");

// it("returns the title of the first album", async () => {
//         const title = await getFirstAlbumTitle(); // Run the function
//         expect(title).toEqual("quidem molestiae enim"); // Make an assertion on the result
// });

const axios = require("axios");

jest.mock("axios");

it("returns the title of the first album", async () => {
        axios.get.mockResolvedValue({
                data: [
                        {
                                userId: 1,
                                id: 1,
                                title: "My First Album",
                                username: "souvik",
                        },
                        {
                                userId: 1,
                                id: 2,
                                title: "Album: The Sequel",
                                username: "ram",
                        },
                ],
        });

        const username = await getFirstAlbumTitle();
        expect(username).toEqual("souvik");
});
