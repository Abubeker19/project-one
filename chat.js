function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();

    if (message) {
        displayMessage(message, "user");

        inputField.value = "";
        inputField.focus();

        // Simulate bot response with a delay
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            displayMessage(botResponse, "bot");
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    // Auto-scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Simple predefined responses
    if (userMessage.toLowerCase().includes("hello")) {
        return "Hello! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (userMessage.toLowerCase().includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I don't understand that. Can you try asking something else?";
    }
}
