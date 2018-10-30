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
    // console.log(tab);
    tabs[t].addEventListener('click', openTab, false);
}

//Open tab function
function openTab(e) {
    //console.log(e);

    //get ID of clicked tab
    tabID = e.target.id;
    //console.log(tabID);

    //find out which panel should be reveal
    idNum = tabID.match(/\d/g); //returns array
    idNum = idNum.join(''); 
    tabIndex = idNum - 1;
    //console.log(tabIndex);

    //reveal panel relating to tab
    if( tabPanel[tabIndex].style.display === 'flex') {
        
        //if panel is visible then hide it. 
        tabPanel[tabIndex].style.display = 'none';
        // console.log(tabPanel[tabIndex]);

    } else {

        //else hide all visible panels
        // for (let p of tabPanel) {
        //     p.style.display = 'none';
        // }

        // EI11 bug - re-doing loop
        for (var p=0; p < tabPanel.length; p++) {
            tabPanel[p].style.display = 'none';
        }

        //and display currently clicked panel
        tabPanel[tabIndex].style.display = 'flex';
    } 
}

// ===== TABS End ======= //