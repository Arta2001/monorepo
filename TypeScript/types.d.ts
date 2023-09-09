enum Domain {
    WEB="Web",
    Connect="Connect",
    Backend="Backend"
}

interface Interns {
    name: string,
    age: number,
    skills: string[];
}

interface Juniors{
    name: string, 
    age: number, 
    skills: string[],
    date_of_promotion: Date,
    domain: Domain,
}

interface Company {
    Interns: Interns[];
    Juniors: Juniors[];
    Country: string;
}
  
  // Export the Company interface
  export { Company }