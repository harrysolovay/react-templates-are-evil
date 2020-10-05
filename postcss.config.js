/* eslint-disable */
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "@fullhuman/postcss-purgecss",
            {
              content: ["./pages/**/*.tsx"],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
  ],
};
