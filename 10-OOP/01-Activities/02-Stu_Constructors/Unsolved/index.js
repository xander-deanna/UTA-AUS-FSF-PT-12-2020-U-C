// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech){
    this.name = name;
    this.tech = tech;

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
this.introduction = () => {
    console.log(`My name is ${this.name} and my favorite tech is ${this.tech}! :)`);
    }
this.dont = () => {
    console.log(`Don't bother ${this.name}! They're working a ${this.tech} project.`);
    }
};

// TODO: Create a new object using the 'Developer' constructor
const me = new Developer("Deanna", "CSS")
const molly = new Developer("Molly", "React")
const natalie = new Developer("Natalie", "JavaScript")

// TODO: Call the 'introduction()' method on the new object
me.introduction ();
molly.introduction ();
natalie.introduction ();

me.dont ();
molly.dont ();
natalie.dont ();
