exports.getErrorPage = (req,res,next) => {
    res.status(404).render('404', {
        pageTitle: "Oops. Page Not Found",
        pageNotFound: "Oops. Page Not Found. Try something else",
        pageTest: "Page Test",
        path: ""
    });
}