//ejemplo 
const nameInput = document.getElementById('nameInput');
const colorPicker = document.getElementById('colorPicker');
const displayName = document.getElementById('displayName');
const banner = document.querySelector('.banner');



//actualizar el nombre a ingresar 
nameInput.addEventListener('input',(e) =>{
	displayName.textContent = e.target.value || "escribe tu nombre aqui"   
});

//actualizar color de fondo 

colorPicker.addEventListener('input',(e) =>{
	banner.style.backgroundColor = e.target.value;
});

