window.onload = () => {
    let width = window.innerWidth;
    if (width < 768) {
        moblie();
    } else {
        pc();
    };
}

window.onresize = () => {
    let width = window.innerWidth;
    if (width < 768) {
        moblie();
    } else {
        pc();
    };
}