

// Inputs DOM............................- 


let templateType = document.querySelector("#templateType");
let basicTemplate = document.querySelector(".basicTemp");
let proTemplate = document.querySelector(".proTemplate");


 let colorHeader= document.querySelector("#colorHeader");
 let textColorHeader= document.querySelector("#textColorHeader");
 let nameText = document.getElementById("name");
 let email = document.getElementById("email");
 let contactNo = document.getElementById("contactNo");
 let place = document.getElementById("place");


 let jobTitle= document.getElementById("jobTitle");
 let summary = document.querySelector(".summary");
 let skills = document.getElementById("skills");
 let inputTagsAll =document.querySelectorAll("input");


//  tags for appending elements..........
 let addEmployment = document.getElementById("employment");
 let appendEmployment = document.getElementById("newappendemploy");
 let newEmploydetails = document.querySelector(".addNewEmployment");
 let addProject = document.getElementById("project");
 let appendProject = document.getElementById("newappend");
 let addNewProjects = document.querySelector(".addNewProjects");
 let addEdu = document.getElementById("education");
 let appendEdu = document.getElementById("newappendeducat");
 let addNewEducation = document.querySelector(".addNewEducation");



// Inputs DOM for basic resume format.............

let nameBasic = document.querySelector(".name1");
let postBasic = document.querySelector(".post1");
let contactNumBasic = document.querySelector(".call1");
let mailBasic = document.querySelector(".mailId1");
let locationBasic = document.querySelector(".location1");

let summaryBasic = document.querySelector(".summ1");
let skillsBasic = document.querySelector(".skills1");
let expBasic = document.querySelector(".exp1");
let projectsBasic = document.querySelector(".projects1");
let eduBasic = document.querySelector(".edu1");
let topDivBasic = document.querySelector(".topDiv1");



// Inputs DOM for Professional resume format.............

let namePro = document.querySelector(".name2");
let postPro = document.querySelector(".post2");
let contactNumPro = document.querySelector(".call2");
let mailPro = document.querySelector(".mailId2");
let locationPro = document.querySelector(".location2");

let summaryPro = document.querySelector(".summ2");
let skillsPro = document.querySelector(".skills2");
let expPro = document.querySelector(".exp2");
let projectsPro = document.querySelector(".projects2");
let eduPro = document.querySelector(".edu2");
let topDivPro = document.querySelector(".topDiv2");


 // Changing background color of heading

colorHeader.addEventListener("input", function(){
    
    topDivPro.style.backgroundColor = colorHeader.value;
    topDivBasic.style.backgroundColor = colorHeader.value;
})


// Changing text color of heading................
textColorHeader.addEventListener("input",function(){
    topDivBasic.style.color = textColorHeader.value;
    topDivPro.style.color = textColorHeader.value;
})


// funnctionalities with input tags.........

inputTagsAll.forEach( (items)=>{
    items.addEventListener("input", ()=>{
        if(items.id === "name"){
            nameBasic.innerText = items.value;
            namePro.innerText = items.value;
        }
        else if(items.id === "email"){
            mailBasic.innerText = items.value;
            mailPro.innerText = items.value;
        }
        else if(items.id === "contactNo"){
            contactNumBasic.innerText = items.value;
            contactNumPro.innerText = items.value;
        }else if(items.id === "place"){
            locationPro.innerText = items.value;
            locationBasic.innerText = items.value;
        }else if(items.className === "jobTitle"){
            postBasic.innerText = items.value;
            postPro.innerText = items.value;
        }else if(items.id === "skills"){
            skillsPro.innerText = items.value;
            skillsBasic.innerText = items.value;
        }
    })
})


// funnctionalities with textarea...........................

summary.addEventListener("input", ()=>{
    summaryPro.innerText = summary.value;
    summaryBasic.innerText = summary.value;
})


// Choosing Resume Template code..........................
templateType.addEventListener("click", function(){
    var val = templateType.value;
    
    if(val === "basic"){
        // console.log("hii");
        proTemplate.style.display = "none";
        basicTemplate.style.display = "block";
    }
    else{
        // console.log("hello");
        basicTemplate.style.display = "none";
        proTemplate.style.display = "block";
    }
});


// Appending elements for exp, projects and education............

// adding employment..............
addEmployment.addEventListener("click", addWorkDetails);

function addWorkDetails(){
    appendEmployment.style.display="block";
    // start date....
    let start = document.createElement('p');
    start.innerText = "Start Date";
    let startDate = document.createElement('input');
    startDate.setAttribute("type","date");
    startDate.classList.add("startDate");
    newEmploydetails.appendChild(start);
    newEmploydetails.appendChild(startDate);

    // end date....
    let end = document.createElement('p');
    end.innerText = "End Date";
    let endDate = document.createElement('input');
    endDate.setAttribute("type","date");
    endDate.classList.add("endDate");

    // job profile....
    let employer = document.createElement('input');
    employer.setAttribute('type','text');
    employer.setAttribute('placeholder','Employer');
    employer.classList.add("employer");

    // Description of work......
    let workDescription = document.createElement('textarea');
    workDescription.setAttribute('placeholder','Description');
    workDescription.classList.add("workDescription");

    newEmploydetails.appendChild(end);
    newEmploydetails.appendChild(endDate);
    newEmploydetails.appendChild(employer);
    newEmploydetails.appendChild(workDescription);
};

// Firing of the Employment event.......

appendEmployment.addEventListener("click",()=>{
    let startDate = document.querySelector(".startDate");
    let endDate = document.querySelector(".endDate");
    let employer = document.querySelector(".employer");
    let workDescription = document.querySelector(".workDescription");

    expPro.innerText = "From "+ startDate.value + " to " + endDate.value + " at "+ employer.value + " " + workDescription.value;

    expBasic.innerText = "From "+ startDate.value + " to " + endDate.value + " at "+ employer.value + " " + workDescription.value;

})




// adding project................. 

addProject.addEventListener("click", addProjectsDetails);

function addProjectsDetails(){
    appendProject.style.display="block";
    // start date....
    let projectStart = document.createElement('p');
    projectStart.innerText = "Start Date";
    let projectStartDate = document.createElement('input');
    projectStartDate.setAttribute("type","date");
    projectStartDate.classList.add("projectstartDate");

    // end date....
    let projectEnd = document.createElement('p');
    projectEnd.innerText = "End Date";
    let projectEndDate = document.createElement('input');
    projectEndDate.setAttribute("type","date");
    projectEndDate.classList.add("projectEndDate");
    
    // console.log(startDate);

    // job profile....
    let projectTitle = document.createElement('input');
    projectTitle.setAttribute('type','text');
    projectTitle.setAttribute('placeholder','Project Title');
    projectTitle.classList.add("projectTitle");

    // Description of work......
    let projectDescription = document.createElement('textarea');
    projectDescription.setAttribute('placeholder','Description');
    projectDescription.classList.add("projectDescription");

    addNewProjects.appendChild(projectStart);
    addNewProjects.appendChild(projectStartDate);
    addNewProjects.appendChild(projectEnd);
    addNewProjects.appendChild(projectEndDate);
    addNewProjects.appendChild(projectTitle);
    addNewProjects.appendChild(projectDescription);
};

// Firing of the projects event.......

appendProject.addEventListener("click",()=>{
    let projectStartDate = document.querySelector(".projectstartDate");
    let projectEndDate = document.querySelector(".projectEndDate");
    let projectTitle = document.querySelector(".projectTitle");
    let projectDescription = document.querySelector(".projectDescription");

    projectsBasic.innerText = "From "+ projectStartDate.value + " to "+ projectEndDate.value + " Title: "+ projectTitle.value + " " + projectDescription.value;

    projectsPro.innerText = "From "+ projectStartDate.value + " to "+ projectEndDate.value + " Title: "+ projectTitle.value + "-> " + projectDescription.value;
})




// Adding Educational Details......................

addEdu.addEventListener("click", addEduDetails);

function addEduDetails(){
    appendEdu.style.display="block";
    // start date....
    let eduStart = document.createElement('p');
    eduStart.innerText = "Start Date";
    let eduStartDate = document.createElement('input');
    eduStartDate.setAttribute("type","date");
    eduStartDate.classList.add("eduStartDate");

    // end date....
    let eduEnd = document.createElement('p');
    eduEnd.innerText = "End Date";
    let eduEndDate = document.createElement('input');
    eduEndDate.setAttribute("type","date");
    eduEndDate.classList.add("eduEndDate");
    
    // console.log(startDate);

    // job profile....
    let school = document.createElement('input');
    school.setAttribute('type','text');
    school.setAttribute('placeholder','School/College');
    school.classList.add('school');

    // Description of work......
    let eduDescription = document.createElement('textarea');
    eduDescription.setAttribute('placeholder','Description');
    eduDescription.classList.add('eduDescription');

    addNewEducation.appendChild(eduStart);
    addNewEducation.appendChild(eduStartDate);
    addNewEducation.appendChild(eduEnd);
    addNewEducation.appendChild(eduEndDate);
    addNewEducation.appendChild(school);
    addNewEducation.appendChild(eduDescription);
}

// Firing of the education event.......
appendEdu.addEventListener("click",()=>{
    let eduStartDate = document.querySelector(".eduStartDate");
    let eduEndDate = document.querySelector(".eduEndDate");
    let school = document.querySelector(".school");
    let eduDescription = document.querySelector(".eduDescription");

    eduBasic.innerText = "from " + eduStartDate.value +" to "+ eduEndDate.value + " from "+ school.value + " " +eduDescription.value;

    eduPro.innerText = "from " + eduStartDate.value +" to "+ eduEndDate.value + " from "+ school.value + " " +eduDescription.value;

})



// Converting into pdf and Downloading resume....

let downloadBtn = document.querySelector(".dwnldBtn");
let resumeTemplate = document.querySelector(".templates");

downloadBtn.addEventListener("click",function(){

    html2pdf().from(resumeTemplate).save();
    resumeTemplate.style.width="100%"
    
    });



    