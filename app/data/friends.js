// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendsArray = [
    {
        name: "Janet",
        photo: "https://s11280.pcdn.co/wp-content/uploads/sites/21/2015/06/500w_uncropped.png",
        scores: [
            "5",
            "5",
            "3",
            "3",
            "4",
            "4",
            "3",
            "3",
            "5",
            "4"
        ]
    },
    {
        name: "Cardi B",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjq1bOUspfgAhVHeKwKHcV6DbIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F307722587032983449%2F&psig=AOvVaw2Cg36WGQL5IOII-BdLeIi2&ust=1549002422848399",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2"
        ]
    },
    {
        name: "Ri-Ri",
        photo: "https://thatgrapejuice.net/wp-content/uploads/2018/03/rihanna-thatgrapejuice-lingerie.jpg",
        scores: [
            "5",
            "3",
            "2",
            "2",
            "4",
            "4",
            "5",
            "2",
            "5",
            "2"
        ]
    },
    {
        name: "Fonzi",
        photo: "https://images-na.ssl-images-amazon.com/images/I/41DjRVwTi2L.jpg",
        scores: [
            "5",
            "3",
            "1",
            "1",
            "5",
            "5",
            "1",
            "2",
            "4",
            "2"
        ]
    }
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;