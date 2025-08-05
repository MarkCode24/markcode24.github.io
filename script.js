
//#region start UUID Generator

    const copyText = document.getElementById("copy-text");
    const copyMessage = document.getElementById("copy-message");
    var textCopiedToastmsg = document.getElementsByClassName("toast-isCopied");
    var tempId = copyText.id;

function GenerateUUID() {
    copyText.id = "copy-text_gen";
    let uuid = crypto.randomUUID();
    copyText.textContent = uuid;
}

function Copied(){
    const copyBtn = document.getElementById("copy-btn");
    copyBtn.addEventListener('click', () =>{
        copyBtn.classList.add('copyBtn-animate');
        navigator.clipboard.writeText(copyText.textContent)
        .then(() => {
            if(copyText.id === "copy-text_gen") {
                copyText.classList.add('move');
                // alert("UUID copied to clipboard!");
                
                GenTextClean();
                showCopiedToast();
            }
        });

        // textCopiedToastmsg.addEventListener('animationend', () => {
        // });
    });
    copyBtn.addEventListener('animationend', () => {
        copyBtn.classList.remove('copyBtn-animate');
        copyMessage.classList.remove("toast-isCopied");
    });

}

function GenTextClean() {
        copyText.addEventListener('animationend', () => {
                copyText.classList.remove('move');
            copyText.id = tempId;

            copyText.textContent = "UUID will appear here...";
        })
}

function showCopiedToast() {
    copyMessage.classList.add("toast-isCopied")
}
Copied();

//#endregion


//#region start Fiverr page viewer
fetch('./app.py')
    .then(response => response.text())
    .then(pyText => {
        // Extract JSON from Python file (assuming it's assigned to a variable)
        const jsonMatch = pyText.match(/{[\s\S]*}/);
        if (jsonMatch) {
            const jsonData = JSON.parse(jsonMatch[0]);
            console.log(jsonData);
        } else {
            console.error("No JSON data found in app.py");
        }
    })
    .catch(error => console.error(error));



    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/repos/markcode24/markcode24.github.io/contents/app.py', true);
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var data = JSON.parse(this.response);
            console.log(data);
            // Process the data as needed
        } else {
            // We reached our target server, but it returned an error
            console.error("Error fetching data from GitHub API");
        }
    };
    request.send();