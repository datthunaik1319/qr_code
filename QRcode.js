var qr;

function generateQRCode() {
    var inputText = document.getElementById("inputText").value;

    if (inputText === "") {
        alert("Please enter some text.");
        return;
    }

    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = ""; 

    qr = new QRCode(qrcodeElement, {
        text: inputText,
        width: 128,
        height: 128
    });
}
function shareQRCode() {
    if (!qr) {
        alert("Please generate a QR code first.");
        return;
    }

    var canvas = qr._el.firstChild;
    var dataUrl = canvas.toDataURL();

    var link = document.createElement("a");
    link.href = dataUrl;
    link.download = "qrcode.png";
    link.click();
}