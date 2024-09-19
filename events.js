//Function declarations 
function incrementCounter (){
    var spanElement = document.getElementById('counter');
    var count = spanElement.getAttribute('numberofClicks');
    count++
    spanElement.innerText = count;
    spanElement.setAttribute ('numberOfClicks', count);

}
function toggleVisibility(){
    var chartImage = document.getElementById('chart1');
    if (chartImage.style.display === "none") {
    chartImage.style.display = "block";
    } else {
    chartImage.style.display = "none";
    }
}

//Script Calls 
document.getElementById('incrementButton').addEventListener('click', incrementCounter);
