const iconFront = document.querySelector(".icon-front");

iconFront.style = "width: 10%";

let percent = 0;

const loading = setInterval(() => {
	percent += 1;
  iconFront.style = `width: ${percent}%`;
  if(percent>=100){clearInterval(loading);}
}, 15);
