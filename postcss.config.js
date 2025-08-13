const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nested');

module.exports = {
    plugins: [
        postcssNesting(),
        autoprefixer(),
    ]
};
