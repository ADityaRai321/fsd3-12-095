const fun1 = () => {
  console.log("This is fun1");
};
const fun2 = () => {
    console.log("the fun 2");
};
const fun3 = () => {
    console.log("the fun 3");
};
function main(){
    console.log("main");
    setTimeout(fun1,0);
    // setInterval(fun1,1000);
    setImmediate(fun2);
    process.nextTick(fun3);
    fun3();
    console.log("end");
}
main();
// a function not executed Immediatelty but it must be executed after a while it had some status at final it may resolve 