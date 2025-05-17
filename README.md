# Food Delivery App

An easy-to-use food ordering website built with React and Tailwind CSS. Browse food, add items to your cart, and check out - just like your favorite food delivery apps!

## ✨ What Can It Do?

- **Works on all devices**: Looks great on phones, tablets, and computers
- **Light and Dark mode**: Switch between light and dark themes based on your preference
- **Easy to use**: Simple design that's easy to navigate
- **Food categories**: Find food by type (pizza, burger, sushi, etc.)
- **Shopping cart**: Add food items, change amounts, or remove them
- **Simple checkout**: Enter your delivery details and place your order
- **Remembers your choices**: Your cart items and theme choice are saved even if you close the browser

## � What's It Built With?

- **React**: For building the website
- **React Router**: For moving between different pages
- **Context API**: For managing cart items and theme
- **Tailwind CSS**: For making everything look nice
- **Vite**: For fast loading during development
- **localStorage**: For saving your choices in the browser

## � How It's Organized

```
food-delivery/
├── client/                # The website code
│   ├── public/            # Images and icons
│   └── src/
│       ├── components/    # Reusable parts
│       │   ├── layout/    # Headers and footers
│       │   └── ui/        # Buttons, cards, etc.
│       ├── context/       # Manages cart and theme
│       ├── data/          # Food items and categories
│       ├── pages/         # Different screens
│       └── routes/        # Page navigation
└── README.md             # This guide
```

## 🚀 How to Run It

### What You Need First

- Node.js (version 14 or newer)
- npm or yarn (package managers for JavaScript)

### Setup Steps

1. Get the code:
   ```bash
   git clone https://github.com/yourusername/food-delivery.git
   cd food-delivery
   ```

2. Install what you need:
   ```bash
   cd client
   npm install
   # or
   yarn install
   ```

3. Start the website:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open in your browser:
   ```
   http://localhost:5173
   ```

## 📱 What Pages Are There?

- **Home**: Main page with featured foods and categories
- **Menu**: All food items with filters by category
- **Cart**: See what you've added and adjust quantities
- **Checkout**: Enter your address and place your order
- **Success**: Confirms your order was placed

## 🔄 How It Manages Data

The app uses React's Context API to:

- **Cart**: Keep track of what food you've added
- **Theme**: Remember if you prefer light or dark mode

Your cart items and theme choice are saved in your browser, so they'll still be there next time you visit.

## 🎨 How It Looks

The design uses Tailwind CSS for:

- Colors that work in both light and dark modes
- Layouts that adjust to different screen sizes
- Accessible features for all users
- Buttons and links that react when you hover or click them