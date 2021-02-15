export class ParkingSystem {
	constructor(
		private big: number,
		private medium: number,
		private small: number
	) { }

	addCar(carType: number): boolean {
		switch (carType) {
			case 1: {
				if (this.big === 0)
					return false;
				else
					this.big -= 1;
				break;
			}
			case 2: {
				if (this.medium === 0)
					return false;
				else
					this.medium -= 1;
				break;
			}
			case 3: {
				if (this.small === 0)
					return false;
				else
					this.small -= 1;
				break;
			}
		}
		return true;
	}
}