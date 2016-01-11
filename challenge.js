'use strict';

class Event {
	constructor(name, date, attendees=[]){
		this.name = name;
		this.date = new Date(date)
		this.attendees = attendees;
	}
	// basic methods
	getAttendees(){
		return this.attendees
	}
	addAttendee(person){
		this.attendees.push(person);
	}
	getDate(){
		return this.date;
	}
	getTimeToEvent(){
		let now = new Date(Date.now());
		let diff = this.date.getTime() - now.getTime();
		let days = Math.floor(diff / 86400000);

		let mess = days < 0 ? 
			`${this.name} was ${days} dayas ago` :
			`${this.name} is in ${days} days` 
		
		return mess;
	}

}

class Person {
	constructor(first, last){
		this.first = first;
		this.last = last;
	}
	get fullname(){
		return `${this.first} ${this.last}`;
	}
}

class Invite {
	constructor(person, event){
		this.person = person;
		this.event = event;
		this.status = "pending";
	}
	respondPositive(){
		this.event.addAttendee(this.person);
		this.status = "confirmed";
	}
	respondNegative(){
		this.status = "declined";
	}
}

//JO
// we can create a new event
var party = new Event("Slamming Party", "May 12 2017");
// create a new person
var me = new Person('joe', 'oliver');
// create an invite for that person, to the event
var myInvite = new Invite(me, party);
// respond to the event
myInvite.respondPositive();
// and get a list of all those who have confirmed attending to that event.
party.getAttendees());
