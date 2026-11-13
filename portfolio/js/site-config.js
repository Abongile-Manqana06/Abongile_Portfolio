/* ------------------------------------------------------------
   Site settings. Edit this one file to change your details
   everywhere (home page, project pages and CV page).
   After you edit it, run:  node tools/build.js
   ------------------------------------------------------------ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SITE = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    name: 'Abongile',
    // Put your surname here if you want it shown, for example 'Abongile Surname'
    fullName: 'Abongile Lathitha Manqana',
    role: 'Software Developer',
    location: 'Gqeberha, Eastern Cape, South Africa',
    phone: '083 771 9808',
    email: 'abongilelathitha@gmail.com',
    // Empty links are not shown.
    github: 'https://github.com/ST10470949',
    linkedin: 'https://www.linkedin.com/in/abongile-lathitha-manqana',
    // Your picture. Save it as assets/img/profile.jpg (square or portrait works best).
    photo: 'assets/img/profile.jpg',
    // Your CV file (replace assets/cv/Abongile_Manqana_CV.pdf to update the download)
    cvPdf: 'assets/cv/Abongile_Manqana_CV.pdf',
    company: 'Drew Technologies'
  };
});
