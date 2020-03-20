const dropDown  = document.querySelector('.btn-drop');
const dropDownMenu  = document.querySelector('.drop-down-menu');



const toggleDropDown = () => {
    if (dropDownMenu.style.display === 'none'){
        dropDownMenu.style.display = 'block'
    }else{
        dropDownMenu.style.display = 'none';
    }
}


dropDown.addEventListener('click', toggleDropDown);