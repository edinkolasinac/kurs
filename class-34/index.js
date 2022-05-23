const fetch = require("node-fetch");
<<<<<<< HEAD
const fn = async (author) => {
    try {
        const response = await fetch(
            `https://api.quotable.io/random${author ? `?author=${author}` : ""}`
        );
        const result = await response.json();
        console.log(result);

        console.log(result.content + "; author: " + result.author);
=======
const randomQuoteFromAuthor = async (author) => {
    try {
        const checkedAuthor = await authorCheck(author);

        if (!checkedAuthor) {
            return "That author doesn't exist";
        }

        const response = await fetch(
            `https://api.quotable.io/random${checkedAuthor ? `?author=${checkedAuthor}` : ""
            }`
        );
        const result = await response.json();

        return result.content + ", Author: " + result.author;
>>>>>>> b830080ef7aeb1402f2c89da2f9c6d6169dc7365
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
<<<<<<< HEAD
        console.log(result);
        if (result.count < 1) {
            return false;
        }

=======

        if (!result.count) {
            return false;
        }
>>>>>>> b830080ef7aeb1402f2c89da2f9c6d6169dc7365
        return result.results[0].name;
    } catch (error) {
        console.log(error);
    }
};

<<<<<<< HEAD
authorCheck("Adam").then((value) => console.log(value));
=======
const getQuotes = async (page, sortBy, order) => {
    try {
        const paramsExist = page || sortBy || order;
        const response = await fetch(
            `https://api.quotable.io/quotes${paramsExist ? "?" : ""}${page ? `page=${page}` : ""
            }${page ? "&" : ""}${sortBy ? `sortBy=${sortBy}` : ""}${page || sortBy ? "&" : ""
            }${order ? `order=${order}` : ""}`
        );
        const result = await response.json();
        return result.results;
    } catch (error) {
        console.log(error);
    }
};

getQuotes(95, "content", "desc").then((result) => {
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        console.log(element.content + " by: " + element.author);
    }
});
>>>>>>> b830080ef7aeb1402f2c89da2f9c6d6169dc7365
