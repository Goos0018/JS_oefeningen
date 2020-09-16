let restaurant = {
    name: 'Frituur Noord',
    guestCapacity: 30,
    guestcount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestcount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestcount += partySize
    },
    removeParty: function (partySize){
        this.guestcount -= partySize
    }
}

restaurant.seatParty(25)
console.log(restaurant.checkAvailability(10))
restaurant.removeParty(8)
console.log(restaurant.checkAvailability(10))
