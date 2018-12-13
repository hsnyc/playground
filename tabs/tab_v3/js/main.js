// ===== TABS ======= //

//get tabs and tab panels
var tabs = document.querySelectorAll('.tab'); //one tab
var tabPanels = document.querySelectorAll('.tab-panels'); //tab panels container
var tabPanel = document.querySelectorAll('.tab-panel'); //single tab panel
var tabID;
var idNum;
var tabIndex;

//IE bug: re-doing Loop
for (var t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener('click', openTab, false);
}

//Open tab function
function openTab(e) {

    //get ID of clicked tab
    tabID = e.target.id;
    // console.log(tabID);

    //find out which panel should be reveal
    idNum = tabID.match(/\d/g); //returns array
    idNum = idNum.join(''); //remove from array
    tabIndex = idNum - 1; //subtract one due to zero based # in arrays

    //hide any visible panel
    for (var p=0; p < tabPanel.length; p++) {
        tabPanel[p].style.display = 'none';
    }

    //hide underline from active tab
    for (var t=0; t < tabs.length; t++) {
        tabs[t].classList.remove('show-underline');
    }

    //and display currently clicked panel
    tabPanel[tabIndex].style.display = 'block'; //this can be Flex if needed

    //show underline on clicked tab
    e.target.classList.add('show-underline');
}

// ===== TABS End ======= //