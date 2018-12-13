// ===== TABS ======= //

//get tabs and tab panels
var tabs = document.querySelectorAll('.tab'); //one tab
var tabPanels = document.querySelectorAll('.tab-panels'); //tab panels container
var tabPanel = document.querySelectorAll('.tab-panel'); //single tab panel
var firstPanel = document.querySelector('.first-panel'); //first tab panel
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

    //reveal panel relating to tab
    if(tabPanel[tabIndex].style.display === 'block') { //this can be Flex if needed
        
        //if panel is visible then hide it. 
        tabPanel[tabIndex].style.display = 'none';

        //and reveal first panel
        firstPanel.style.display = 'flex';

    } else {

        for (var p=0; p < tabPanel.length; p++) {
            tabPanel[p].style.display = 'none';
        }

        //hide first panel
        firstPanel.style.display = 'none'; //may not always need to do this but oh well.

        //and display currently clicked panel
        tabPanel[tabIndex].style.display = 'block'; //this can be Flex if needed
    } 
}

// ===== TABS End ======= //