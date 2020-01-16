Clarity stylelint shareable config

## Usage

Install module and its dependencies.

    npm i stylelint-config-standard stylelint-order --save-dev
    npm i "github:clarityai-eng/stylelint-config-clarity#1.0.0" --save-dev
    
Create a .stylelintrc in the root of your project with the following content
```json
{
  "extends": "stylelint-config-clarity"
}
```

Now you can run eslint with something like: `stylelint src`
