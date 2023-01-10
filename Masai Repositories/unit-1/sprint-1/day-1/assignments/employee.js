class Employees{
    
    #current_page;
    #data;

    constructor (){
        this.#data="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
        this.#current_page=3;
    }

    get current_page(){
        return this.#current_page;
    }
    get data(){
        this.#data;
    }
    getData(){
        return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
        .then((res)=>res.json())
        .then((res)=>{
            this.#data=res;
        })
        .catch((err)=>{
            console.log("error");
        })
    }

    url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
    fetchData(){
        return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify()

        });
        then((res)=>{
            console.log("success");
            return this.getData();
        })
        .catch((err),()=>{
            console.log("error");
        })
    }

}

const employee=new Employees();
employee.getData();


async function fetchDatafromAPI(){
    try{
        const urlapi="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
    let res=await fetch(urlapi)
    let data=await res.json()
    console.log(data.data)
    showData(data.data)
    }
    catch(error){
        console.log("error");
    }
}

fetchDatafromAPI();

function showData(data){
    data.map(function(ele){
    let div=document.createElement("div");
    let imag=document.createElement("img");
    let detailsdiv=document.createElement("div");
    let name=document.createElement("h1");
    let depart=document.createElement("h4");
    let otherinfo=document.createElement("p");
    let gender=document.createElement("p");
    let number=document.createElement("p");
    
    // imag.src="https://i.imgur.com/9xEcfJj.jpeg";
    imag.src="https://images.cdn3.stockunlimited.net/clipart/customer-care-executive_1558569.jpg"
    imag.style.width="40%"
    imag.style.height="30%"
    name.innerText="Name -"+ele.name;
    depart.innerText="department -"+ele.department;
    otherinfo.innerText="salary -"+ele.salary;
    number.innerText="Employee "+ele.id;
    gender.innerText="Gender -"+ele.gender;
    detailsdiv.append(name,depart,otherinfo, gender,number);
    div.append(imag,detailsdiv);
    div.style.border="1px solid blue"
    div.style.margin="20px"
    document.getElementById("container").append(div);
    })

}







