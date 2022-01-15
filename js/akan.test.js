const MyInfo = require('./main');

const testDate = "2022-01-15";
const testGender = "male";

const infoClass = new MyInfo(testDate, testGender);

describe('Akan Name Generator Tests', function () {
    test('Test for correct name', () => {
        expect(infoClass.getAkanName()).toBe("You were born on a Saturday: your Akan name is Kwame");
    });
});