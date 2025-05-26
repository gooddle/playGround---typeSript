// export한 클래스: 외부에서 사용할 수 있음
export class FoodClass {
    menu: string
    time: number
    constructor(menu: string, time: number) {
        this.menu = menu
        this.time = time
    }

    order(): number {
        this.time = 7
        return this.time
    }
}