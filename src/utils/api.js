const apiUrl = "https://opentdb.com/api.php?amount=5&type=multiple"

export const fetchQuestionFromApi = () => {
    return fetch (apiUrl)
    .then( res=> res.json())
    .then(questions =>questions.results)
    .catch((error) => Promise.reject(error));
}
