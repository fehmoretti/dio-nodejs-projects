import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger:true});

server.register(cors,{
    origin:"*",
});

const teams = [
    { id: 1, name: "Mercedes", base: "Brackley, Reino Unido" },
    { id: 2, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
    { id: 3, name: "McLaren", base: "Woking, Reino Unido" },
    { id: 4, name: "Ferrari", base: "Maranello, Itália" },
    { id: 5, name: "Aston Martin", base: "Silverstone, Reino Unido" },
    { id: 6, name: "Alpine", base: "Enstone, Reino Unido" },
    { id: 7, name: "Williams", base: "Grove, Reino Unido" },
    { id: 8, name: "RB (Visa Cash App RB)", base: "Faenza, Itália" },
    { id: 9, name: "Kick Sauber", base: "Hinwil, Suíça" },
    { id: 10, name: "Haas", base: "Kannapolis, EUA" }
];

const drivers = [
    {id:1, name:"Max Verstappen",team:"Red Bull Racing"},
    {id:2, name:"Lewis Hamilton",team:"Ferrari"},
    {id:3, name:"Lando Norris",team:"McLaren"},
]

server.get("/teams",async(request,response)=>{
    response.type("application/json").code(200);
;
    return {teams};
});

server.get("/drivers",async(request,response)=>{
    response.type("application/json").code(200);
    return [drivers];

});

interface DriverParams{
    id:string;
}

interface TeamsParams{
    id:string;
}

server.get<{Params: DriverParams}>("/drivers/:id",async(request,response) =>{
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Driver not Found"}
    }else{
        response.type("application/json").code(200);
        return {driver};
    }
});

server.get<{Params: TeamsParams}>("/teams/:id",async(request,response) =>{
    const id = parseInt(request.params.id);
    const team = teams.find(d => d.id === id);

    if(!team){
        response.type("application/json").code(404);
        return {message: "Team not Found"}
    }else{
        response.type("application/json").code(200);
        return {team};
    }
});


server.listen({port:3333},()=>{
    console.log("Server init");
});


