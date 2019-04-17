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
}