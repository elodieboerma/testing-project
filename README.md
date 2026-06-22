This is just for helping me practice how to write tests in the test-first method.



    *1 (install it if images are referenced directly in HTML file) npm install --save-dev html-loader*
        --don't forget to switch source branch to this in github pages*
    *2 (to run ESLint on any file or directory): npx eslint yourfile.js*
    *3 (to run Prettier on everything): npx prettier . --write
        (to run it on a certain directory): prettier --write app/
        (to run it on a certain file): prettier --write app/components/Button.js
        (to run it on tests): prettier --write "app/**/*.test.js"
    *4 (ensure everyone is using Pretter; if setup is CI; avoids merge conflicts/other collab issues):
        npx prettier . --check
