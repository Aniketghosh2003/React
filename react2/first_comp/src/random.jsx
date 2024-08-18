function Random(){
    
    let num = Math.random() * 10;
    let num1 = Math.floor(num);

    return <h1 style={{'background-color':'#766666'}}>
        Random number is {num1};
    </h1>
}

export default Random;