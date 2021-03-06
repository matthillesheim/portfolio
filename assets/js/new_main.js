const imageWrappers = document.querySelectorAll('.image-wrapper');

function toggleOverlay(num) {
	const overlay = document.getElementById("overlay");
	overlay.style.visibility = (overlay.style.visibility == "visible") ? "hidden" : "visible";
	let overlayImgSrc;
	switch (num) {
		case 1:
			overlayImgSrc = '<div class="iframe-container"><iframe class="iframe-video" src="https://www.youtube.com/embed/zHy-PD_9PQc?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
			break;
		case 2:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/Makeover Takeover - Wall/FD118_Makeover_Wall.gif" />';
			break;
		case 3:
			overlayImgSrc = '<img class="overlayed_image_horiz" src="images/matt_made/New Year, New Sale - Spring 2018/SP118_Homepage_Teen_0115_Hero.gif" />';
			break;
		case 4:
			overlayImgSrc = '<img class="overlayed_image_horiz" src="images/matt_made/Out Of This World Event - Summer 2018/SU218_Homepage_Teen_0514_SU218_Homepage_Teen_0514_03.gif" />';
			break;
		case 5:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/Star Wars - Holiday 2017/XXXX_17_StarWars_Stormtrooper.gif" />';
			break;
		case 6:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/Style Stories - Spring 2018/SP18_Welcome_1.jpg" />';
			break;
		case 7:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/The Bedroom Furniture Event - Spring 2017/SpringTemplate_BedroomFurniture_1_MH.gif" />';
			break;
		case 8:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/The Here & Now Sale - Fall 2018/0907_18_HereNowSale_AM.gif" />';
			break;
		case 9:
			overlayImgSrc = '<img class="overlayed_image_horiz" src="images/matt_made/The Lights Out Sale - Spring 2018/SP118_Homepage_Teen_Generic_3.gif" />';
			break;
		case 10:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/Welcome Series - Holiday 2017/HD17_Welcome_2.jpg" />';
			break;
		case 11:
			overlayImgSrc = '<img class="overlayed_image_vert" src="images/matt_made/Welcome Series - Summer 2018/SU18_Welcome_2.gif" />';
			break;
		default:
			'<div/>';
	}
	document.getElementById("overlay_image").innerHTML=overlayImgSrc;

	num ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
}
