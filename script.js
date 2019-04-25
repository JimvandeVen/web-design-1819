const dragButtons = document.querySelectorAll(".dragButton")
const chooseList = document.querySelector("#chooseList")
const yourList = document.querySelector("#yourList")
// console.log(dragButtons)

dragButtons.forEach(dragButton => {
    dragButton.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            let currentList = e.srcElement.parentNode.parentNode.id
            let movingElement = e.srcElement.parentNode
            // let movingElementId = e.srcElement.parentNode.id

            // console.log("drag", movingElementId)
            if (currentList == "chooseList") {
                //move to yourList
                addElement(yourList.id, movingElement)
            } else {
                //move to chooseList
                addElement(chooseList.id, movingElement)
            }
        }
    })
})

const trelloSelectors = document.querySelectorAll(".trelloMove")

trelloSelectors.forEach(trelloselector => {
    trelloselector.addEventListener("change", (e) => {
        let movingTrello = e.srcElement.parentNode.parentNode
        let targetTrello = e.srcElement.value
        addElement(targetTrello, movingTrello)
    })
})

function addElement(parentId, elementTag) {
    // Adds an element to the document
    const parent = document.getElementById(parentId);
    parent.appendChild(elementTag);
    const child = document.getElementById(elementTag.id);
    console.log(child)
}

const trelloSelectors2 = document.querySelectorAll(".trelloMove2")

trelloSelectors2.forEach(trelloselector2 => {
    trelloselector2.addEventListener("change", (e) => {
        let movingTrello2 = e.srcElement.parentNode.parentNode.parentNode


        let targetTrello2 = e.srcElement.value
        console.log(targetTrello2);
        addElement(targetTrello2, movingTrello2)
    })
})

function addElement(parentId2, elementTag2) {
    // Adds an element to the document
    const parent2 = document.getElementById(parentId2);
    console.log(parent2);
    parent2.appendChild(elementTag2);
    const child2 = elementTag2;
    child2.focus()
    console.log(child2)
}

const selects = document.querySelectorAll(".trelloSelect")

selects.forEach(select => {
    select.onfocus
})
function changeFocus(e) {
    console.log(e);

}