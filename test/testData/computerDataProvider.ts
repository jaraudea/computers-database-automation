export class ComputerDataProvider {

    static getValidComputerData1(randomText) {
        const introducedDate = new Date();
        introducedDate.setFullYear(introducedDate.getFullYear() - 100);
        const discontinuedDate = new Date();

        return {
            computerName: `Krabappel-${randomText}`,
            introducedDate: introducedDate.toISOString().substr(0, 10),
            discontinuedDate: discontinuedDate.toISOString().substr(0, 10),
            company: "Apple Inc."
        };
    }

    static getValidComputerData2(randomText) {
        const introducedDate = new Date();
        introducedDate.setFullYear(introducedDate.getFullYear() - 1);
        const discontinuedDate = new Date();
        discontinuedDate.setMonth(discontinuedDate.getMonth() - 5);

        return {
            computerName: `Krabappel-${randomText}-updated`,
            introducedDate: introducedDate.toISOString().substr(0, 10),
            discontinuedDate: discontinuedDate.toISOString().substr(0, 10),
            company: "Samsung Electronics"
        };
    }
}