# Abongile - Portfolio website

A static website (HTML, CSS and JavaScript). There is nothing to install to view it.

## Open it in VS Code
1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the "Live Server" extension, right-click index.html and choose "Open with Live Server".
   (You can also double-click index.html to open it in a browser.)

## Pages
- index.html: 3D hero, project gallery with filters, About, How I work, Skills, Contact
- projects/: one page for each of the 12 projects
- cv.html: your CV (use "Print or save as PDF" on the page)

## Change your details
- js/site-config.js: name, email, GitHub, LinkedIn, photo path
- js/projects-data.js: all project text
- After changing either file, run:  node tools/build.js   (needs Node.js)

## Your picture
Your photo is already at assets/img/profile.jpg. To change it, replace that file with another picture of the same name.

## Deploy on Cloudflare Pages
Option A, upload (simplest):
1. Sign in at dash.cloudflare.com and go to Workers & Pages.
2. Create > Pages > Upload assets.
3. Name the project, then drag in the whole unzipped folder (the folder that contains index.html).
4. Choose Deploy. Cloudflare gives you a link ending in .pages.dev.

Option B, GitHub:
1. Push this folder to a GitHub repository.
2. In Cloudflare Pages choose Connect to Git and pick the repository.
3. Leave the build command empty and set the build output directory to / (the root).

To update the live site later, upload the folder again (Option A) or push to GitHub (Option B).

## Notes
- The contact form opens the visitor's email app, so no server is needed.
- Fonts load from Google Fonts. If they cannot load, the site falls back to system fonts.
- No external API is needed for this portfolio.

## Drew Technologies logo
The logo is already in place at assets/img/drew-logo.png. To change it, replace that file with a new image of the same name.
