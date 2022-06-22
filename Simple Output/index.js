let myDetails={
    name:"Mary Mutuku",
    height:"5'",
    country:"Kenya"
}
showMyDetails(myDetails)
console.log(myDetails.name)
console.log(myDetails.height)
console.log(myDetails.country)

function showMyDetails(myDetails) {
    document.getElementById('heading').textContent ="Here are my details:";
    document.getElementById('name').textContent = myDetails.name;
    document.getElementById('height').textContent = myDetails.height;
    document.getElementById('country').textContent = myDetails.country;
    alert(`Here are my details:\n${myDetails.name}\n${myDetails.height}\n${myDetails.country}` );
}