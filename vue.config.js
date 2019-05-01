module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                data: 
                    `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
                    `
            }
        }
    }
}