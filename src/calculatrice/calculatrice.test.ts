import Calculatrice from "./calculatrice";
let calculatrice: Calculatrice;

beforeAll(() => {
    console.log("Avant tous les tests");
    calculatrice = new Calculatrice();
})

describe("La méthode eval()", () => {
test("1 + 1 = 2", () => {
    expect(eval("3 + 3")).toBe(6);
})
});

describe("Calculatrice", () => {
    describe("Additions", () => {
        it("1 + 1", () => {
            expect(calculatrice.calculer("1 + 1")).toBe(2);
        })
    })
    describe("Division", () => {
        it("10 / 2", () => {
            expect(calculatrice.calculer("10 / 2")).toBe(5);
        })
        it("10 / 0", () => {
            expect(calculatrice.calculer("10 / 0")).toBe(Infinity);
        });
    })
});