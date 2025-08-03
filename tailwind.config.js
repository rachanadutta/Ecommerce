module.exports = {
  content: ["./**/*.html","./index.html",
    "./wishlist.html",
    "./*.js",     
    "./js/**/*.js" ], // ✅ recursively scans all HTML files in all subfolders
  theme: {
    extend: {
      fontFamily:{
        jost: ['Jost', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
