# Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
npx tailwindcss init -p

# Configue your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ]

# Add the Tailwind directives to your CSS
Add the `@tailwind` directives for each of Tailwind's layers to your `./src/index.css` file

@tailwind base;
@tailwind components;
@tailwind utilities;