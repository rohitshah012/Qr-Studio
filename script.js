const form = document.getElementById("qrForm");
const imgbox = document.getElementById("imgbox");
const qrtext = document.getElementById("qrtext");
const qrimg = document.getElementById("qrimg");
const helperText = document.getElementById("helperText");
const statusText = document.getElementById("statusText");
const downloadBtn = document.getElementById("downloadBtn");
const openBtn = document.getElementById("openBtn");

const defaultHelper = "Tip: URLs, contact details, Wi-Fi notes, and plain text all work.";

const setActionState = (enabled, url = "#") => {
    [downloadBtn, openBtn].forEach((link) => {
        link.href = url;
        link.classList.toggle("disabled", !enabled);
        link.setAttribute("aria-disabled", String(!enabled));
    });
};

const setMessage = (message, isError = false) => {
    helperText.textContent = message;
    helperText.classList.toggle("error", isError);
};

const generateQrUrl = (value) => {
    const encodedValue = encodeURIComponent(value);
    return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodedValue}`;
};

const generateQR = () => {
    const value = qrtext.value.trim();

    if (!value) {
        qrtext.classList.add("error");
        statusText.textContent = "Needs input";
        setMessage("Please enter text or a URL before generating a QR code.", true);
        setActionState(false);

        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 900);
        return;
    }

    const qrUrl = generateQrUrl(value);

    qrimg.src = qrUrl;
    qrimg.alt = `QR code for ${value}`;
    imgbox.classList.add("show-img");
    statusText.textContent = "Generated";
    setMessage("QR code generated successfully. Scan it once before publishing.");
    setActionState(true, qrUrl);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    generateQR();
});

qrtext.addEventListener("input", () => {
    if (qrtext.value.trim()) {
        statusText.textContent = "Ready";
        setMessage(defaultHelper);
        qrtext.classList.remove("error");
    }
});

setActionState(false);
