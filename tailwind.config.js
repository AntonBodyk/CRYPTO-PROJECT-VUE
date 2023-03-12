module.exports = {
    purge:{content: ["./public/**/*.html", "./src/**/*.vue"]},
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  }