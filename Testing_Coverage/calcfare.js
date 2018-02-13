function calcfare(kmTravelled,minWaited) {
    let fare = 25;
    if (kmTravelled > 2) {
        fare += 10 * (kmTravelled - 2)
    }
    if (minWaited > 15) {
        fare += 2 * (minWaited - 15)
    }
    return fare;
}
exports.calcfare=calcfare();
