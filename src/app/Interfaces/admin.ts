export class admin{
    id :number | undefined;
    name:string|undefined;
    email:string|undefined;
    password:string|undefined;

    constructor(name?:string,email?:string,password?:string){
        this.email=email;
        this.name=name;
        this.password=password;
    }
}