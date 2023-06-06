function passwordChecker() {

    const password = document.querySelector('#input').value;

    let result = "No Password is Entered";

    if (password.length >= 16 || password.match(/[*,#,(,),$,@,!,^,-,+]/g)) {
        result = `Your Password is "Strong"`;
    } else if (password.length >= 8 && password.match(/[a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]/g)) {
        result = `Your Password Could be improved`;
    } else {
        result = "Password is Really Weak!";
    }

    console.log(result);

    document.querySelector('#resultBox').innerHTML = result;

}