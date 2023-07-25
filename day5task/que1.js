//THIRUGNANAM K
//DAY5 TASK

//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
   getrating(){
      console.log("The movie rating is " + this.rating);
    }
    /*getPG(){
      console.log("Movie title is:"+this.title,"and Rating is:"+this.rating);
     }*/
    
  }
 
  const result1= new movie( "leo", "seven screen productions", "PG13");
  console.log(result1);
  result1.getrating();
  //result1.GetPG();
  //result1.getPG();
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  class moviedetails {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = "PG"
    }
  }
  const result2= new moviedetails ("title", "studio", " ");
  console.log(result2);

  /*c) Write a method getPG, which takes an array of base type Movie as its argument, 
  and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
   The returned array need not be full.*/
   class moviereview {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }

   getPG(){
    console.log("Movie title is:"+this.title,"and Rating is:"+this.rating);
   }

   /*GetPG(movie) {
    let pgMov = new movie[mov.length];
    let newArrayIndex = 0;
    for (let i = 0; i < mov.length; i++) {
    if (mov[i].rating.equals("PG")) {
    pgMov[newArrayIndex] = mov[i];
    newArrayIndex++;
    }
    }
    return pgMov;
   }*/
  }
   const result3= new moviereview ("jailer", "sun pictures", "PG13")
   result3.getPG()
  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
  // the studio “Eon Productions”, and the rating “PG­13”

  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13"); 
  console.log("CasinoRoyale movie:", CasinoRoyale);