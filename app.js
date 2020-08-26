let slider = {
	slideImg: document.querySelector('.slider__img'),
	btnBack: document.querySelector('.back'),
	btnNext: document.querySelector('.next'),
	imgs: ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg'],
	zero: 0,
	firstImg: function () {
		this.slideImg.src = this.imgs[this.zero]
	},
	clickOnBack: function () {
		this.btnBack.addEventListener('click', () => {
			if (this.zero == 0) {
				this.zero += this.imgs.length;
			}
			this.zero--;
			this.slideImg.src = this.imgs[this.zero];
		})
	},
	clickOnNext: function () {
		this.btnNext.addEventListener('click', () => {
			if (this.zero == this.imgs.length - 1) {
				this.zero -= this.imgs.length;
			}
			this.zero++;
			this.slideImg.src = this.imgs[this.zero];
		})
	}


}

slider.firstImg();
slider.clickOnNext();
slider.clickOnBack();