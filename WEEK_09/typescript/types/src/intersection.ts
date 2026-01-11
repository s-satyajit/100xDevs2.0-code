type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const techHead: TeamLead = {
    name: "Satyajit",
    startDate: new Date(),
    department: "Software Engineer"
}

console.log(techHead.name, techHead.department, techHead.startDate);