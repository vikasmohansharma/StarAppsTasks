function minPlanesToDestination(fuelArray) {
    let n = fuelArray.length;
    if (n == 0) return -1;

    let planes = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n; i++) {
        if (i > farthest) return -1; // If we can't move forward, return -1
        if (i > currentEnd) {
            planes++;
            currentEnd = farthest;
        }
        farthest = Math.max(farthest, i + fuelArray[i]);
    }

    return planes;
}

function calculatePlanes() {
    const input = document.getElementById('fuelInput').value;
    const fuelArray = input.split(',').map(Number);

    const result = minPlanesToDestination(fuelArray);
    
    const resultText = result === -1 
        ? 'It is not possible to reach the last airport.' 
        : `Minimum number of planes needed: ${result}`;
    
    document.getElementById('result').innerText = resultText;
}
