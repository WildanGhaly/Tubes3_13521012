const handleSend = () => {
    const userInput = document.getElementById("my-input").value;
    console.log(userInput);
    document.getElementById("my-input").value = "";
};

export default handleSend;