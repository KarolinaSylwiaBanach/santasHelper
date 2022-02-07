class GiftRecord {
    constructor() {
    }

    static listAll(){
        return [
            {
                id: 'aaa123',
                name: "Doll",
                count: 5,
            },
            {
                id: 'bbb123',
                name: "Train",
                count: 3,
            },
            {
                id: 'ccc123',
                name: "Car",
                count: 2,
            },
        ];
    }


}

module.exports = {
    GiftRecord,
}