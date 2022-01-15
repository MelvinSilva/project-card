const createNewCard = (title, image, text) => {
    const newCard = document.createElement("div")
    newCard.classList.add("blok-card")

    const cardTitle = document.createElement("h2")
    cardTitle.classlist.add("card-title")
    cardTitle.innerText = title
    newCard.appendChild(cardTitle)

    const cardImg = document.createElement("img")
    cardImg.classlist.add("card-img")
    cardImg.src = image
    newCard.appendChild(cardImg)

    const cardParagraphe = document.createElement("p")
    cardParagraphe.classList.add("card-paragraphe")
    cardParagraphe.innerText = text
    newCard.appendChild(cardParagraphe)

    return newCard
}

const reset = () => {
    document.querySelector("#project-title").value = "lol"
    document.querySelector("#project-img").value = ""
    document.querySelector("#project-text").value = ""

}
const submit = (event) => {
    event.preventDefault()
    const projectTitle = document.querySelector("#project-title").value
    const projectImg = document.querySelector("#project-img").value
    const projectText = document.querySelector("#project-text").value
    const newProjectCard = createNewCard(projectTitle, projectImg, projectText)
    document.querySelector("#container-projets").appendChild(newProjectCard)
    reset()


}