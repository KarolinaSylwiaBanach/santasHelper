class ChildRecord {
    constructor() {
    }

    static listAll(){
        return [
            {
                id: 'aaa123',
                name: "Karolina",
                surname: "Banach",
                gift: "Doll"
            },
            {
                id: 'bbb123',
                name: "Patryk",
                surname: "Woźniak",
                gift: "Train"
            },
            {
                id: 'ccc123',
                name: "Jake",
                surname: "Smith",
                gift: "Car"
            },
        ];
    }


}

module.exports = {
    ChildRecord,
}