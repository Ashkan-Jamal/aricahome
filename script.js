window.addEventListener('scroll', () => {
    const secondPage = document.querySelector('.second-page');
    const thirdPage = document.querySelector('.third-page');
    const fourthPage = document.querySelector('.fourth-page');
    const fifthPage = document.querySelector('.fifth-page'); // Reference to the fifth page
    const sixthPage = document.querySelector('.sixth-page'); // Reference to the sixth page

    // Scroll offsets for each page
    const scrollOffsetSecondPage = window.innerHeight / 4;
    const scrollOffsetThirdPage = window.innerHeight + (window.innerHeight / 4);
    const scrollOffsetFourthPage = window.innerHeight * 2 + (window.innerHeight / 4);
    const scrollOffsetFifthPage = window.innerHeight * 3 + (window.innerHeight / 4); // For fifth page
    const scrollOffsetSixthPage = window.innerHeight * 4 + (window.innerHeight / 4); // For sixth page

    // Fade in for each page based on scroll position
    // Second Page
    if (window.scrollY >= scrollOffsetSecondPage && window.scrollY < scrollOffsetThirdPage) {
        secondPage.style.opacity = 1;
        secondPage.style.backgroundColor = "#f1e4d6";
    } else {
        secondPage.style.opacity = 0;
        secondPage.style.backgroundColor = "#3e4216";
    }

    // Third Page
    if (window.scrollY >= scrollOffsetThirdPage && window.scrollY < scrollOffsetFourthPage) {
        thirdPage.style.opacity = 1;
        thirdPage.style.backgroundColor = "#f1e4d6";
    } else {
        thirdPage.style.opacity = 0;
        thirdPage.style.backgroundColor = "#3e4216";
    }

    // Fourth Page
    if (window.scrollY >= scrollOffsetFourthPage && window.scrollY < scrollOffsetFifthPage) {
        fourthPage.style.opacity = 1;
        fourthPage.style.backgroundColor = "#f1e4d6";
    } else {
        fourthPage.style.opacity = 0;
        fourthPage.style.backgroundColor = "#3e4216";
    }

    // Fifth Page
    if (window.scrollY >= scrollOffsetFifthPage && window.scrollY < scrollOffsetSixthPage) {
        fifthPage.style.opacity = 1;
        fifthPage.style.backgroundColor = "#f1e4d6";
    } else {
        fifthPage.style.opacity = 0;
        fifthPage.style.backgroundColor = "#3e4216";
    }

    // Sixth Page
    if (window.scrollY >= scrollOffsetSixthPage) {
        sixthPage.style.opacity = 1;
        sixthPage.style.backgroundColor = "#f1e4d6";
    } else {
        sixthPage.style.opacity = 0;
        sixthPage.style.backgroundColor = "#3e4216";
    }
});
