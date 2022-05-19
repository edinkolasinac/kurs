const fetch = require("node-fetch");
const fn = async (author) => {
    try {
        const response = await fetch(
            `https://api.quotable.io/random${author ? `?author=${author}` : ""}`
        );
        const result = await response.json();
        console.log(result);

        console.log(result.content + "; author: " + result.author);
    } catch (error) {
        console.log(error);
    }
};

const authorCheck = async (author) => {
    try {
        const response = await fetch(
            `https://api.quotable.io/search/authors?query=${author}`
        );
        const result = await response.json();
        console.log(result);
        if (result.count < 1) {
            return false;
        }

        return result.results[0].name;
    } catch (error) {
        console.log(error);
    }
};

authorCheck("Adam").then((value) => console.log(value));