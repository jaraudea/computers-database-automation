# computers-database-automation
Test automation for CRUD operations on computers database application 

## To Get Started

### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome browser installed.


#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* To run test cases, just execute the below command, that should:
    * Download the **chrome driver** binaries locally for you!
    * Create an output folder named 'typeScript' and transpile the .ts files to .js
    * Run the test command which launches the Chrome Browser and runs the script

```
npm run clean-test
``` 

#### HTML Reports
Currently this project has been integrated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter), which is generated in the `reports` folder, there you can see the status of last run.
