for (let i = 1 ; i < 100; i++){
    console.log(i)
if (i%3 == 0 && i%5 == 0) {
        console.log(i + ' footbar')
} else if (i%3 == 0) {
    console.log(i +' foo')
} else if (i%5 == 0) {
    console.log(i + ' bar')
} 
}