# Try-This

> Stop scrolling and start doing! A responsive web app to cure your boredom.

**Try-This** is a dynamic web application built with **Node.js** and **Express** that helps users discover random activities. By interacting with the [Bored API](https://bored-api.appbrewery.com/), it allows users to filter activities based on the **type** of activity (e.g., recreational, educational) and the number of **participants**.

## Features

* **Dynamic Activity Generation:** Fetches real-time suggestions from an external API using Axios.
* **Custom Filters:** Users can specify the *Type* (Education, Relaxation, DIY, etc.) and *Participant count*.
* **Responsive Design:** A clean user interface optimized for both desktop and mobile viewing.
* **Server-Side Rendering:** Uses EJS templates to render data directly from the server.
* **Error Handling:** Gracefully handles scenarios where no activities match the user's specific criteria.

## Tech Stack

* **Backend:** Node.js, Express.js
* **Templating Engine:** EJS (Embedded JavaScript)
* **HTTP Client:** Axios
* **Frontend:** HTML5, CSS3
* **Data Source:** [The Bored API](https://bored-api.appbrewery.com/)

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

* Node.js

## Installation & Usage

Follow these steps to get the project running locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/vishakhmv/Try-This.git
    cd Try-This
    ```

2.  **Install dependencies**
    This will install Express, EJS, Axios, and Body-Parser.
    ```bash
    npm install
    ```

3.  **Run the application**
    ```bash
    node index.js
    ```
    *(Note: If you have `nodemon` installed, you can use `nodemon index.js` for automatic restarts during development)*

4.  **Open in Browser**
    Open your web browser and navigate to:
    `http://localhost:3000`

## Project Structure

```text
Try-This/
├── public/             # Static files (CSS)
│   └── styles/
│       └── main.css
├── views/
│   └── index.ejs       # Main UI and form
├── index.js            # Main server entry point (Express logic)
├── package.json        # Project metadata and dependencies
├── package-lock.json
└── README.md           # Documentation
```

## Credits

This project started from a basic structure provided in Angela Yu’s Web
Development course (App Brewery). All remaining work, including application
logic, error handling, and complete UI styling, was done by me for learning and
portfolio purposes.

