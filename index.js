//store all cars globally for filtering
let allCars = []

//define an asynchronous function to get our car data from our json file
const fetchCarData = async () => {
    try{
        //fetch the json file containing car data
        const response = await fetch('cars.json')

        //Parse the response into a Javascript object.
        const data = await response.json()

        //store the array of cars in the global variable "allCars" for future filtering
        allCars = data.cars

        //initially display all cars when the page loads
        displayCars(allCars)
    
        //handles any error that occurs during the fetch process
    }catch(error){
        //log the error message to the console
        console.error('Error fetch car data:', error)
    }

}
    //define a function to display the cars
const displayCars = (cars) => {
    const carContainer = document.getElementById('carContainer')

    carContainer.innerHTML = '';

    cars.forEach((car) => {
        //create a new div for each car card
        const carCard = document.createElement('div')

        //Add a CSS class 'card to the '<div>' for styling purposes
        carCard.classList.add('card')

        //Add HTML content to the car card, including an image, name, and model of the car.
        carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name} ${car.model}" width="300">
        <h2>${car.name}</h2>
        <p>Model: ${car.model}</p>
        `

        //Append the car card to the car container on the webpage
        carContainer.appendChild(carCard)
    })
}
//fetch and display all car data when the page loads
window.onload = fetchCarData