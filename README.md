# 🖼️ Image Size Controller App

## 📌 Overview

The **Image Size Controller App** is a simple interactive web application built using **HTML, CSS, and JavaScript**. It allows users to **increase or decrease the width of an image** within defined limits and shows warning messages when the size goes beyond the allowed range.

This project is ideal for beginners to practice **DOM manipulation**, **conditional logic**, and **state management** in JavaScript.

---

## 🧩 Features

* Increase and decrease image size
* Displays current image width in pixels
* Minimum and maximum size limits
* Warning messages for invalid size changes

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## ⚙️ How It Works

* The image starts with a default width of **200px**.
* Users can click **Increase** or **Decrease** buttons.
* The width changes in steps of **5px**.
* If the image width goes below **100px** or above **300px**, a warning message is displayed.

---

## 📂 Project Structure

```
image-size-controller-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function increaseSize() {
  if (defaultImageWidth >= maxWidth) {
    warningElement.textContent = maxWarningMessage;
  } else {
    defaultImageWidth += 5;
    let updatedWidth = defaultImageWidth + "px";
    imageElement.style.width = updatedWidth;
    imageWidthElement.textContent = updatedWidth;
  }
}
```

---

## 📚 Concepts Covered

* DOM element selection
* Updating CSS styles dynamically
* Conditional statements
* Variable state management

---

## 🚀 Future Improvements

* Add smooth resize animation
* Add reset button
* Allow user-defined size input

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
