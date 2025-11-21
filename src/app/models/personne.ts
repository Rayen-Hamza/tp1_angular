export class Personne {
    name: string;
    profession: string;
    motto: string;
    jobDescription: string;
    followers: number;
    following: number
    projects: number;
    facebook: string;
    googlePlus: string;
    twitter: string;
    image: string;

    constructor(
        name: string,
        profession: string,
        motto: string,
        jobDescription: string,
        followers: number,
        following: number,
        projects: number,
        facebook: string,
        googlePlus: string,
        twitter: string,
        image: string
    ) {
        this.name = name;
        this.profession = profession;
        this.motto = motto;
        this.jobDescription = jobDescription;
        this.followers = followers;
        this.following = following;
        this.projects = projects;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.twitter = twitter;
        this.image = image;
    }
}