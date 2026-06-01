const footer = document.getElementById("footer");
let cursor = false;

export function changeColorEnter() {

    footer.addEventListener("mouseenter", () => {
            footer.style.backgroundColor = "#111822";
      
        

    });

}

export function changeColorLeave() {

    footer.addEventListener("mouseleave", () => {
             footer.style.backgroundColor = "#0B0F14";
        

    });

}