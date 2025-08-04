
    const copyText = document.getElementById("copy-text");
    const copyMessage = document.getElementById("copy-message");
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
            GenTextClean();
        });
    });
    copyBtn.addEventListener('animationend', () => {
        copyBtn.classList.remove('copyBtn-animate');
    });

}

function GenTextClean() {
    copyText.classList.add('move');
        copyText.addEventListener('animationend', () => {
                copyText.classList.remove('move');
            copyText.id = tempId;

            copyText.textContent = "UUID will appear here...";
        })

    copyMessage.hidden = true;
}
Copied();
