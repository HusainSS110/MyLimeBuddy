
function getBotResponse(input) {
    if (input == "hello"||input == "Hello"||input == "HELLO"||input=="hELLO"||input == "hi"||input == "Hi"||input == "HI") {
        return "Hello there!";
    } else if (input == "bYE"||input == "BYE"||input == "bye") {
        return "Talk to you later!";
    } 
    else if (input == "How are you?") {
        return "I'm fine.";
    } else {
        return "Try asking something else!";
    }
}