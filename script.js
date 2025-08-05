
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
