const anotherFution = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('404');
        }
    });
}
anotherFution()
.then(response=>console.log(response))
.catch(err=>console.log(err));