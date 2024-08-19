# Gaming Handheld Web Design Practice

## Project Overview

The Gaming Handheld Web Design Practice project is a practical exercise for developing and improving web design skills using HTML, CSS, and JavaScript. The project involves creating a web application that enables users to explore, search, and compare different gaming handheld devices. The application features advanced search functionality, device comparisons, and detailed specification pages for each handheld device, providing an excellent opportunity to practice and refine front-end development techniques.

## Features

- **Advanced Search**: Filter handheld devices based on various criteria like brand, OS, screen size, price, and more.
- **Head-to-Head Comparison**: Compare two handheld devices side-by-side to see their specifications.
- **Detailed Specifications**: View detailed specs for each handheld device, including brand, model, dimensions, screen type, and more.
- **Dynamic Data Handling**: The handhelds data is initially stored in a CSV file and is converted to a JavaScript file for use in the application.

## Project Structure

- **HTML Files**:
  - `index.html`: The main landing page of the application.
  - `advancedsearch.html`: The page for performing advanced searches.
  - `allhandhelds.html`: Displays a table of all handheld devices with their specs.
  - `headtohead.html`: The comparison page for comparing two handhelds.
  - `logitechgcloud.html`, `nintendoswitch.html`, `retroid4pro.html`, `steamdeck.html`: Individual pages for the four handheld devices used in the main page.

- **CSS Files**:
  - `styles.css`: The stylesheet containing all the styles used in the application.

- **JavaScript Files**:
  - `advanced_search.js`: Handles the advanced search functionality, including filtering and displaying results.
  - `comparison.js`: Manages the head-to-head comparison of two handheld devices.
  - `generate_table.js`: Generates the table of handhelds in the "All Handhelds" page.
  - `handhelds_data.js`: Contains the handhelds dataset, converted from CSV format.

- **Images**:
  - `logitechgcloud.jpg`, `nintendoswitch.jpg`, `retroid4pro.jpg`, `steamdeck.jpg`: Images of the four handheld devices used in the main page.

- **Dataset**:
  - `handheld.csv`: The initial dataset containing the specifications of various handheld devices.

- **Python Script**:
  - `csv_to_js.py`: A Python script to convert the `handheld.csv` dataset into the `handhelds_data.js` file used by the application.

## Setup and Usage

### Prerequisites

- A web browser to run the application.
- Python (optional, if you need to regenerate the `handhelds_data.js` from `handheld.csv`).

### Running the Application

1. **Clone the repository**:
    ```bash
    git clone https://github.com/f2-bigdeli/gaming-handheld-web-design-practice.git
    cd gaming-handheld-web-design-practice
    ```

2. **Open the main page**:
    - Simply open `index.html` in your web browser to start using the application.

3. **Advanced Search**:
    - Navigate to `advancedsearch.html` to perform a detailed search.

4. **Comparison**:
    - Use `headtohead.html` to compare two handheld devices side by side.

5. **View All Handhelds**:
    - Explore all devices and their specs by opening `allhandhelds.html`.

### Generating the `handhelds_data.js` File

If you need to regenerate the `handhelds_data.js` file from the `handheld.csv` dataset:

1. Ensure you have Python installed.
2. Run the Python script:
    ```bash
    python csv_to_js.py
    ```
   This will generate a new `handhelds_data.js` file from the `handheld.csv`.

## Contributing

This project is intended for learning and practice, so feel free to fork the repository, make changes, and explore different design and coding approaches.

## License

This project is open source and available under the MIT License.
