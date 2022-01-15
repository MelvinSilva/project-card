const createNewCard = (title, image, text) => {
    const newCard = document.createElement("div")
    newCard.classList.add("blok-card")

    const cardTitle = document.createElement("h2")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = title
    newCard.appendChild(cardTitle)

    const cardImg = document.createElement("img")
    cardImg.classList.add("card-img")
    cardImg.src = image
    newCard.appendChild(cardImg)

    const cardParagraphe = document.createElement("p")
    cardParagraphe.classList.add("card-paragraphe")
    cardParagraphe.innerText = text
    newCard.appendChild(cardParagraphe)

    return newCard
}

const reset = () => {
    document.querySelector("#project-title").value = ""
    document.querySelector("#project-img").value = ""
    document.querySelector("#project-text").value = ""

}

const handleSubmit = (event) => {
    event.preventDefault()
    const projectTitle = document.querySelector("#project-title").value
    const projectImg = document.querySelector("#project-img").value
    const projectText = document.querySelector("#project-text").value
    const newProjectCard = createNewCard(projectTitle, projectImg, projectText)
    document.querySelector("#container-projets").appendChild(newProjectCard)
    reset()



}