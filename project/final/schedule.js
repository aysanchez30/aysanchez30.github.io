const getDevices = async() => {
    try{
        return (await fetch("/api/devices/")).json();
    }catch(error){
        console.log(error);
    }
};

const showDevices = async() => {
    let devices = await getDevices();
    let devicesDiv = document.getElementById("devices-list");
    devicesDiv.innerHTML = "";
    devices.forEach((device) => {
        const section = document.createElement("section");
        section.classList.add("device");
        devicesDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = device.name;
        a.append(h3);

        const img = document.createElement("img");
        img.src = device.img;
        section.append(img);

        

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(device);
        };
    });
};

const displayDetails = (device) => {
    const deviceDetails = document.getElementById("devices-details");
    deviceDetails.innerHTML = "";

    const dLink = document.createElement("a");
    dLink.innerHTML = "	 &#x2715;";
    deviceDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    deviceDetails.append(eLink);
    eLink.id = "edit-link";

    const h3 = document.createElement("h3");
    h3.innerHTML = `<strong>Name: </strong> ${device.name}`;
    deviceDetails.append(h3);

    const date = document.createElement("p");
    date.innerHTML = `<strong>Release Date: </strong> ${device.date}`;
    deviceDetails.append(date);

    const authenticity = document.createElement("p");
    authenticity.innerHTML = `<strong>Authenticity: </strong> ${device.authenticity}`;
    deviceDetails.append(authenticity);

    const condition = document.createElement("p");
    condition.innerHTML = `<strong>Condition: </strong> ${device.condition}`;
    deviceDetails.append(condition);

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${device.description}`;
    deviceDetails.append(description);

    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("title").innerHTML = "Edit Device";
    };

    dLink.onclick = (e) => {
        e.preventDefault();
        deleteDevice(device);
    };

    populateEditForm(device); 
};

const deleteDevice = async (device) => {
    let response = await fetch(`/api/devices/${device._id}`, { 
        method: "DELETE",
        headers: {
        "Content-Type": "application/json;charset=utf-8",
        },
  });
 

    if (response.status != 200) {
        console.log("error deleting");
        return;
    }
    
    let result = await response.json();
    showDevices();
    document.getElementById("devices-details").innerHTML = "";
    resetForm();
}

const populateEditForm = (device) => {
    const form = document.getElementById("add-edit-device-form");
    form._id.value = device._id;
    form.name.value = device.name;
    form.date.value = device.date;
    form.querySelector('input[name="condition"]:checked').value = device.condition;
    form.description.value = device.description;
 
};

const addEditDevice = async(e) => {
    e.preventDefault();
    const form =  document.getElementById("add-edit-device-form");
    const formData = new FormData(form);
   
    let device;
    if(form._id.value == -1){
        formData.delete("_id");
        
        console.log(...formData);

        response = await fetch("/api/devices", {
            method: "POST",
            body: formData,
        });
        

    }

    else {

        console.log(...formData);

        response = await fetch(`/api/devices/${form._id.value}`, {
            method: "PUT",
            body: formData,
        });
    }

    if(response.status != 200){
        console.log("Posting Error");
    }

    device = await response.json();

    if (form._id.value != -1) {
        displayDetails(device);
    }

    
    
    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showDevices();
};


const resetForm = () => {
    const form = document.getElementById("add-edit-device-form");
    form.reset();
    form._id.value = "-1";
    
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("title").innerHTML = "Add Device";
    resetForm();
};




window.onload = () => {
    showDevices();
    document.getElementById("add-edit-device-form").onsubmit = addEditDevice;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };

    
};