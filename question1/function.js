var acceptInteger = function (number) {
    switch (true) {
        case number % 22 === 0:
            console.log("candybar");
            break;
        case number % 11 === 0:
            console.log("bar");
            break;
        case number % 2 === 0:
            console.log("candy");
            break;
        default:
            console.log(number);
    }
};
acceptInteger(44);
acceptInteger(11);
acceptInteger(4);
acceptInteger(35);


