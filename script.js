const randNumber = num => {
    return Math.floor(Math.random() * num)
}

let quotes = {
    mentalHealth: ["It's okay not to be okay.", 
        "Your struggles do not define you.", 
        "You are worthy of happiness and peace of mind",
        "Your mental health is just as important as your physical health."],
    physicalHealth: ["Every workout is progress.",
        "The reason I exercise is for the quality of life I enjoy.",
        "We do not stop exercising because we grow old – we grow old because we stop exercising." ],
    spiritualHealth: ["Life is really simple, but we insist on making it complicated.", 
        "Happiness depends upon ourselves.", 
        "You don’t have to be happy every second to be happy overall.",
        "Be the reason someone smiles today."]
}

let quoteOfTheDay = []

for (let getQuote in quotes) {
    let randomPick = randNumber(quotes[getQuote].length)

    switch (getQuote) {
        case 'mentalHealth':
            quoteOfTheDay.push(`Your Mental Health Quote for Today Is :- ${quotes[getQuote][randomPick]}`)
            break
        case 'physicalHealth':
            quoteOfTheDay.push(`Your Phyusical Health Quote for Today is :- ${quotes[getQuote][randomPick]}`)
            break
        case 'spiritualHealth':
            quoteOfTheDay.push(`Your Spiritual Health Quote for Today is :- ${quotes[getQuote][randomPick]}`)
            break
        default:
            quoteOfTheDay.push('Error Please try again!')
    }
}

const generateQuote = (newQuote) => {
    const generate = quoteOfTheDay.join('\n')
    console.log(generate)
}

generateQuote(quoteOfTheDay)