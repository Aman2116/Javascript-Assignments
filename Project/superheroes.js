let superheroes=[
    {
        name:"Thor",
        age:1500,
        planet:"Asgard",
        weapon:["mjolnir","stormbreaker"]
    },
    {
        name:"Ironman",
        age:47,
        planet:"Earth",
        weapon:["jarvis","friday","mark 89"]
    },
    {
        name:"Superman",
        age:34,
        planet:"Krypton",
        weapon:[]
    }
]

function display()
{
    let rows="";
    
    for(let i=0;i<superheroes.length;i++)
    {
        let superhero=superheroes[i];
        rows+=`
        <tr>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.planet}</td>
        <td>${superhero.weapon.join(", ")}</td>
        <td>
        <button onclick="Deletesuperhero(${i})">Delete</button>
        </td>
        </tr>`;
    }
    document.getElementById("data").innerHTML=rows;
}
display();
function Deletesuperhero(index)
{
    superheroes.splice(index,1);
}
function Addsuperhero()
{
    let superhero={};
    superhero.name=document.getElementById("name").value;
    superhero.age=Number(document.getElementById("age").value);
    superhero.planet=document.getElementById("planet").value;
    let weaponslist=document.getElementById("weapon").value;
    superhero.weapon=weaponslist.split(",");
    superheroes.push(superhero);
    display();
}