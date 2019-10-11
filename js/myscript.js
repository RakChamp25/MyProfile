
function closeViewModals() {
    document.getElementById('modal_view_tag').setAttribute("style", "display:none;");
    document.getElementById('content').setAttribute("style", "filter: none;-webkit-filter: none;");
    document.getElementById('about').setAttribute("style", "filter: none;-webkit-filter: none;");
}
function getModalId() {
    document.getElementById('modal_view_tag').setAttribute("style", "display:block");
    document.getElementById('content').setAttribute("style", " filter: blur(8px);-webkit-filter: blur(8px);");
    document.getElementById('about').setAttribute("style", " filter: blur(8px);-webkit-filter: blur(8px);");
    var wrapToModal = document.getElementById("modal-content");
    return wrapToModal;
}
function showProfile() {
    getModalId().innerHTML = `
    <table cellspacing='15' align='center' cellpadding='5' width='90%' style='text-align:left;'>
        <tr><td>Name</td><td>: Ajith Kannan</td></tr><tr><td>Email</td><td>: ajithkannan.r@zohocorp.com</td></tr>
        <tr><td>Mobile</td><td>: 7871107813</td></tr><tr><td>Date of Birth</td><td>: 25-Aug-1997</td></tr>
    </table>
    `;
}
function showModalImage() {
    getModalId().innerHTML = "<img src='../image/IMG_20180621_090150153_HDR.jpg' style=' border: 2px solid #440311;margin-left:2%;margin-top:2%;'  width='500px'  height='300vh'>";
}
function showAcademics() {
    getModalId().innerHTML = `
    <dl>
        <dt>Under Graduate</dt>
        <dd><ul><li>BE CSE - Sri Krishna College of Technology(2015-2019)</li></ul></dd>
        <dt>Higher Secondary</dt>
        <dd><ul><li>PSG Sarvajana Higher Secondary School(2015)</li></ul></dd>
        <dt>High School</dt><dd><ul><li>CSI Boys Higher Secondary School</li></ul></dd>
    </dl>
    `;
}
function showAcheivements() {
    getModalId().innerHTML = `
    <ul>
        <li>Won a <strong>code strom</strong> in Dhruvafest at KCT.</li>
        <br><br>
        <li>Won a <strong>web spider</strong> in Kriya at PSG.</li>
        <br><br>
        <li>Won a <strong>codathon</strong> in Avalya at Kgisl.</li>
        <br><br>
        <li>Won a <strong>code war</strong> in yukta at Psg itech.</li><br><br>
    </ul>
    `;
}
function showProjects() {
    getModalId().innerHTML = `
        <dl>
            <dt>Library Management System</dt>
            <dd><ul><li style='text-align:justify;'>Library Management System is a software used to manages the catalog of a library. This helps to keep the records of whole transactions of the books available in the library.Library Management System which is very easy to use and fulfills all the requirement of a librarian. There are many features which helps librarian to keep records of available books as well as issued books. This software is available in both mode i.e. web-based or local host based</li></ul></dd>
        </dl>
        `;
}
function showInConsole() {
    console.log("LastName : " + document.getElementById("myform").elements.namedItem("lastname").value);
    console.log("FirstName : " + document.getElementById("myform").elements.namedItem("firstname").value);
    console.log("MiddleName : " + document.getElementById("myform").elements.namedItem("middlename").value);
    console.log("Social Security Number : " + document.getElementById("myform").elements.namedItem("securityNumber").value);
    console.log("Sex : " + document.querySelector('input[id = "gender"]:checked').value);
    console.log("Address : " + document.getElementById("myform").elements.namedItem("Address").value);
    console.log("City : " + document.getElementById("myform").elements.namedItem("city").value);
    console.log("State : " + document.getElementById("myform").elements.namedItem("state").value);
    console.log("Zip Code : " + document.getElementById("myform").elements.namedItem("zip").value);
    console.log("Date : " + document.getElementById("myform").elements.namedItem("date").value);
    console.log("Mobile : " + document.getElementById("myform").elements.namedItem("mobile").value);
    console.log("Email : " + document.getElementById("myform").elements.namedItem("email").value);
    console.log("Medical Claim Number : " + document.getElementById("myform").elements.namedItem("claim").value);
    console.log("Insurance Number : " + document.getElementById("myform").elements.namedItem("insurance").value);
}
var a = [];
(function () {
    for (var i = 0; i < 5; ++i) { 
        a.push(function a() { 
            return i; 
        }) 
         ; 
    }
}());
console.log(a);
console.log(a.map(
    function (f) 
    { let i = f();
        console.log( i); 
    }
    )
);
console.log(a);
var a = [];
(function () {
    for (var i = 0; i < 5; ++i) { 
        a.push(function a() { 
            return i; 
        }) 
         ; 
    }
}());
console.log(a);
console.log(a.map(
    f => f()
    )
);