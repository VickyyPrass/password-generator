const btnGenerate = document.querySelector(".btnGenerate");
const btnCopyText = document.querySelector(".btn-copy-password");
const textPassword = document.getElementById("password");

function generatePass() {
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChar = "abcdefghijklmnopqrstuvwxyz";
    const numberChar = "0123456789";
    const symbolChar = "~!@#$%&+=";
    const allChar = upperChar + lowerChar + numberChar + symbolChar;
    const passwordlength = 10;
    let password = "";

    // menentukan password acak dengan looping seluruh karakter
    for (let x = 0; x <= passwordlength; x++) {
        // menentukan angka acak dari jumlah karakter
        const randomNumber = Math.floor(Math.random() * allChar.length);
        // mengisi password dari setiap posisi angka acak yang telah di tentukan
        password += allChar.substring(randomNumber, randomNumber + 1);
    }
    // mengisi value input
    textPassword.value = password;
}

function copyText() {
    textPassword.select();
    document.execCommand("copy");
    alert("Teks Berhasil DIsalin Ke Clipboard.");
}

// event ketika button di klik
btnGenerate.addEventListener("click", generatePass);
btnCopyText.addEventListener("click", copyText);
