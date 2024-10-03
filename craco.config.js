// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
      optimization: {
        minimize: false, // Desactiva la minificación temporalmente
      },
    },
  }