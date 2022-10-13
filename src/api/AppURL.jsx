class AppURL{
   
    static HomeURL = "https://laravel.almasthemes.com/public/api";
    static LoginPage = this.HomeURL+"/login";
    static RegisterPage = this.HomeURL+"/register";
    static ForgetPasswordPage = this.HomeURL+"/forget/password";

    static ResetPasswordPage = this.HomeURL+"/reset/password";
    static UserData = this.HomeURL+"/user";

  
    static VisitorDetails(userId,email,page){
        return  this.HomeURL+"/getvisitor/"+userId+"/"+email+"/"+page;
    }
    static getCategories = this.HomeURL+"/getcategories";
    static getsliders = this.HomeURL+"/getsliders";
     
}


export default AppURL;

