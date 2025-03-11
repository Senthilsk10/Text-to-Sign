const glossary = new Set([
    "accident", "africa", "all", "apple", "basketball", "bed", "before", "bird", "birthday", "black",
    "blue", "bowling", "brown", "but", "can", "candy", "chair", "change", "cheat", "city", "clothes",
    "color", "computer", "cook", "cool", "corn", "cousin", "cow", "dance", "dark", "deaf", "decide",
    "doctor", "dog", "drink", "eat", "enjoy", "family", "fine", "finish", "fish", "forget", "full",
    "give", "go", "graduate", "hat", "hearing", "help", "hot", "how", "jacket", "kiss", "language",
    "last", "letter", "like", "man", "many", "meet", "mother", "need", "no", "now", "orange", "paint",
    "paper", "pink", "pizza", "play", "pull", "purple", "right", "same", "school", "secretary", "shirt",
    "short", "son", "study", "table", "tall", "tell", "thanksgiving", "thin", "thursday", "time", "walk",
    "want", "what", "white", "who", "woman", "work", "wrong", "year", "yes", "book", "later", "medicine"
]);

const ignoreWords = new Set(["is", "are", "the", "a", "an", "to", "of", "on", "at", "with", "in", "for", "and"]);

function glossMap(sentence) {
    return sentence.toLowerCase().split(" ")
        .filter(word => glossary.has(word) && !ignoreWords.has(word));
}