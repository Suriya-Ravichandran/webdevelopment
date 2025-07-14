async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(
        ()=> 
        {
            resolve("I love You !!");
        }, 6000);
  });
  console.log(await myPromise);
}

myDisplay();