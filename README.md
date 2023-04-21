# How to install, host, and run the Angular Application (Project) on a local host and remote server.

## Note:

---

**This guide assumes you're using a google cloud VM w/ Ubuntu and Apache2 web server, with all required configurations and ports allowed or enabled.**

**This guide assumes you will be hosting in the root directory of your web server and on the default port (80).**

**The following instructions below is written for Windows, Windows Visual Studio Code, and PowerShell. Please adjust depending on your OS, IDE, or CLI.**

## Steps:

---

1. Download the Angular project folder and development files from a valid source.

   1. Github: [https://github.com/khnguyen88/personal-website-2023](https://github.com/khnguyen88/personal-website-2023), or
   2. Blackboard submission

2. Open the project folder with your IDE of choice.

3. Install the necessary dependencies w/ the following command

   1. **`npm install`**
   2. Note, if "npm install" does not work try running:
      1. **`npm install --legacy-peer-deps`**
      2. Source: [https://stackoverflow.com/questions/66020820/npm-when-to-use-force-and-legacy-peer-deps](https://stackoverflow.com/questions/66020820/npm-when-to-use-force-and-legacy-peer-deps)

4. Optional step: Let's run the project locally to see if we have installed all the dependencies successfully w/ the following command:

   1. **`ng serve`**
   2. Not, if "ng serve" does not work, try running these commands:
      1. **`$env:NODE\_OPTIONS='--openssl-legacy-provider'`**
      2. **`ng serve`**

5. The project should now run successfully. We can adjust our configuration files and build a production version of a project to hoist up onto the webserver.

6. Now it's time to build a production version of the project that works on your web server. We now run the command:

   1. **`ng build --base-href /`**
      1. Since I am hosting on /var/www/html/ webserver root, I saved my file here we assume our base href is "/"
   2. Alternatively, we can use this command too:
      1. **`ng build --configuration="production" --base-href "/"`**
   3. Note: If we are saving the file in a subdirectory of the web server, we can use the following command.

      1. **`ng build --base-href /subdirectory/of/root`**
      2. **`ng build --configuration="production" --base-href "/subdirectory/of/root"`**
      3. **WARNING: ONLY HOST THE APPLICATION FROM THE WEB SERVER'S ROOT NOW. CURRENTLY, THE APPLICATION DOES NOT WORK IN THE SUBDIRECTORY.**

         **THE APPLICATION RECOGNIZES THE PAGE URL FROM THE SUBDIRECTORY BUT THINKS THE ASSET FOLDER IS IN THE ROOT WEB SERVER. I NEED TO FIGURE IT OUT IN THE FUTURE AND UPDATE THIS GUIDE LATER.**

7. Note: During our **ng build** run, if we run into a budget issue w/ our project to initial or stylesheet files, we can adjust the limits in the "angular.json" file.

   1. We go into **projects \> architect \> configuration \> production \> budgets** property. And adjust the value of the "maximumError" properties until the issue has been resolved.

      1. Source: [https://stackoverflow.com/questions/61307462/warning-in-exceeded-maximum-budget-for-scss-file-in-angular](https://stackoverflow.com/questions/61307462/warning-in-exceeded-maximum-budget-for-scss-file-in-angular)

8. Rerun the **ng build** command as needed after resolving the budget issue

9. Now, in Window Explorer go to the following directory:

   1. **Angular project directory \> dist \> [project-name]**

10. Zip the content inside the directory.

11. Go into your Virtual Machine instance and upload the zip file via SSH.

12. Move the zip file to you're the root of your web server directory. For me, it is located in **`/var/www/html/`**

13. Unzip the files in the root of your web server directory

14. We must configure our Apache 2 server to get the Angular application working to ensure our routes work through the **index.html** file.

    1. Source: [https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)

15. We must create and populate a **.htaccess** file in the same directory as the index.html file or where we are hosting our file. In our case, it's the root of the webserver directory, **/var/www/html/**.

    1. We can do so with **`sudo vim .htaccess`**
    2. We populate the .hta file with the following code and then save it:
       1. ```
          	<IfModule mod_rewrite.c>
          		  RewriteEngine On
          		  RewriteBase /
          		  RewriteRule ^index\.html$ - [L]
          		  RewriteCond %{REQUEST_FILENAME} !-f
          		  RewriteCond %{REQUEST_FILENAME} !-d
          		  RewriteRule . index.html [L]
          	</IfModule>
          ```
    3. Source: [https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)

16. After we create the **.htaccess** file, we need to enable the rewrite module within the Apache configuration. We do so with this command:

    1. **`sudo a2enmod rewrite`**
    2. Source: [https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)

17. For the rewrite module to work, we must enable **AllowOverride all** for the directory where the Angular application is being hosted.

    1. To do so, we need to open the file **/etc/apache2/sites-enabled/000-default.conf** , and then add this code inside the Virtual Host block.

       ```
       <Directory "/var/www/html">
       	AllowOverride All
       </Directory>
       ```

    2. Since we are hosting from the default root directory, specify " **/var/www/html**" directory. However, you want to specify the directory where your application is being served from.
       1. Source: [https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)

18. After configuring the Apache files, we must restart the apache service with this command:
    1. **`sudo service apache2 restart`**
19. Once done, go to the URL of your application, and enjoy! For me, my website is hosted here:
    1. [http://34.148.114.117](http://34.148.114.117/)

---

---

# (BELOW IS DEFAULT FROM ANGULAR)

# PersonalWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
