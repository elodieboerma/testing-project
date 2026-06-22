This is just for helping me practice how to write tests in the test-first method.

list of commands run/packages installed in terminal:
1 (created package.json file): npm init -y --init-type=module
2 (created empty config file to let editors and other tools know of Prettier usage):
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
3 (created .prettierignore file):
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

Pacakges to install (listed in order of commands): webpack, HTML plugin, CSS loaders, webpack dev server,
Prettier, Jest, to allow ESM usage with Jest, to allow eslint usage with Jest

    *5 (install it if images are referenced directly in HTML file) npm install --save-dev html-loader*
        --don't forget to switch source branch to this in github pages*
    *10 (to run ESLint on any file or directory): npx eslint yourfile.js*
    *14 (to run Prettier on everything): npx prettier . --write
        (to run it on a certain directory): prettier --write app/
        (to run it on a certain file): prettier --write app/components/Button.js
        (to run it on tests): prettier --write "app/**/*.test.js"
    *15 (ensure everyone is using Pretter; if setup is CI; avoids merge conflicts/other collab issues):
        npx prettier . --check
    *16 (change file names in eslint.config.js to match test files)
