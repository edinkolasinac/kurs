const credits = ((num) => {
    let credits = num;
    console.log(`broj vasih kredita je jednak: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0) console.log(`igrate igru broj kredita: ${credits} preostala credita(a)`);
        if (credits < 0) console.log(`nemas te vise ${credits} presotalo ti je `);
    }
})(3);
credits();
credits();

credits();
credits();

credits();




