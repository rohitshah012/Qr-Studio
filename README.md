# QR Studio - Professional QR Code Generator

A lightweight, responsive web application for generating, previewing, and sharing QR codes instantly. Built with vanilla HTML, CSS, and JavaScript—no frameworks, no dependencies, just clean, efficient code.

---

## 📋 Overview

QR Studio is a fast, intuitive QR code generator that allows users to create scannable QR codes for URLs, contact information, Wi-Fi details, or any text data. Generate and download professional QR codes in seconds with a modern, user-friendly interface.

---

## ✨ Key Features

- **Instant QR Code Generation** – Generate scannable QR codes in real-time
- **Responsive Design** – Seamlessly works on desktop, tablet, and mobile devices
- **Download & Share** – Save generated QR codes as images or open them directly
- **No Sign-Up Required** – Start generating codes immediately
- **Lightweight & Fast** – Pure vanilla JavaScript with zero external dependencies
- **Accessible Interface** – Built with semantic HTML and ARIA labels for better accessibility
- **Real-Time Validation** – User-friendly error messages and status indicators

---

## 🛠️ Technology Stack

| Technology | Details |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **CSS Features** | Flexbox, CSS Grid, Media Queries |
| **API** | QR Server API (https://api.qrserver.com/) |
| **Compatibility** | All modern browsers (Chrome, Firefox, Safari, Edge) |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation or build tools required

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone <repository-url>
   cd Qr-Code-Generator
   ```

2. **Open in your browser:**
   - Double-click `index.html`, or
   - Right-click → Open with → Select your browser, or
   - Use a local server (optional):
     ```bash
     # Using Python
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

---

## 📖 How to Use

1. **Enter Text or URL** – Type any text, URL, contact details, or Wi-Fi information in the input field
2. **Generate QR Code** – Click the "Generate" button to create your QR code
3. **Download or Share** – Download the image or use the share options
4. **Scan** – Use any QR code scanner app to read your generated code

---

## 🎯 Use Cases

- Converting long URLs into shareable QR codes
- Creating contact information QR codes (vCard format)
- Generating Wi-Fi authentication codes
- Event tickets and registration codes
- Business card and marketing material QR codes
- Quick link sharing on social media

---

## 📁 Project Structure

```
Qr-Code-Generator/
├── index.html       # Main HTML structure with semantic markup
├── style.css        # Responsive styling and layout
├── script.js        # JavaScript functionality and API integration
└── README.md        # Project documentation
```

---

## 🔄 How It Works

1. User enters text or URL in the input field
2. JavaScript validates the input
3. Application sends request to QR Server API with encoded data
4. API returns QR code image
5. Image is displayed and ready for download or scanning

### API Integration
- **Service:** [QR Server API](https://api.qrserver.com/)
- **Endpoint:** `https://api.qrserver.com/v1/create-qr-code/`
- **Parameters:** Size, margin, and encoded data

---

## 💻 Development

### Browser DevTools
- Open DevTools (F12 or Right-click → Inspect)
- Check Console for any errors or debugging information
- Test responsive design using Device Emulation

### Code Quality
- Clean, readable JavaScript without minification
- Semantic HTML for better accessibility
- Mobile-first responsive CSS approach

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome/Edge | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Mobile Browsers | ✅ Full support |

---

## 📄 License

This project is open source and available for educational and commercial use.

---

## 👤 Author

**Developed by:** Rohit Shah

A passion project demonstrating that powerful web applications don't require heavy frameworks—just clean code, thoughtful design, and solid web development principles.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to fork the repository and submit pull requests.

---

## 📧 Support & Feedback

For questions, issues, or feedback, please open an issue in the repository or contact the developer directly.

---

**Last Updated:** May 2026
