# Amazon Shirts Clone

This project is a simple e-commerce website that showcases a selection of shirts, similar to Amazon. It allows users to browse through various shirt products, view details, and get pricing information.

## Project Structure

```
amazon-shirts-clone
├── public
│   ├── index.html        # Main HTML document for the website
│   └── styles.css       # Styles for the website
├── src
│   ├── app.js           # Entry point of the application
│   ├── components
│   │   ├── Header.js    # Header component with navigation
│   │   ├── ProductList.js# Component to display list of products
│   │   └── ProductCard.js# Component for individual product display
│   └── data
│       └── shirts.json  # JSON file containing shirt product data
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd amazon-shirts-clone
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- Browse a selection of shirts with images, names, and prices.
- Responsive design for optimal viewing on various devices.
- Easy navigation through the header component.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.