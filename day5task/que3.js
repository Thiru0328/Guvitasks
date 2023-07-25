// Write a “person” class to hold all the details

class PersonDetails {
    constructor(FirstName, LastName, DOB, Qualification, City, State, Country) {
     // console.log(this) // Check the output from here
      this.FirstName = FirstName
      this.LastName = LastName
      this.DOB = DOB
      this.Qualification = Qualification
      this.City = City
      this.State = State
      this.Country= Country
    }
  }
  
  const person1 = new PersonDetails('THIRU', 'GNANAM', '1995', 'BE Mechanical','Tirunelveli', 'Tamilnadu', 'India')
  
  console.log(person1)