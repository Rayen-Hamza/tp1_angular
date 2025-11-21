export class CvModel{
    id : number;
    name :string;
    firstname : string;
    age:  number; 
    cin : number;
    job : string;
    path : string;

    constructor(id: number , name: string, firstname: string, age: number, cin: number, job: string, path: string){
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.cin = cin;
        this.job = job;
        this.path = path;
    }
                

}