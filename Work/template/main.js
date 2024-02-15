
!function() {
	const chx = ["modules", "cash", "root"]
	const list = ["Android", "iPhone", "Safari", "iPad", "Chrome", "Opera"]
	var d = function(chx) {
		var d = (navigator.userAgent); var ug = ["agent:", d]
		if (d != null) {
			return console.log(d)
			var temp = function(chx) {
				data = [{
					"locale": d,
					"check": chx[1],
					"nl": list
				}]

			}(chx);
		} else {
			window.location.replace("https://vercel.com")
		}

	}(chx);

   
	const openBtn = document.querySelector('.acp');
	const modal = document.querySelector('.modals');
	const closeBtn = document.querySelector('.modal__btn');
	const mobileClose = document.querySelector('.mobile-close');
	const exit = document.querySelector(".form__btn");
    let onev = document.querySelector('.one_v_l');
    let ch1 = document.getElementById('i_pc');
    let form_c = document.querySelector('.c_form');
    let cp_amount = document.getElementById('cp_amount');
    let cryptobot = document.querySelector('.cp_pay');
    let cryptobotb = document.getElementById('cp');




	let disableScroll = function () {
		let pagePosition = window.scrollY;
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	let enableScroll = function () {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({ top: pagePosition, left: 0 });
		document.body.removeAttribute('data-position');
	}

	openBtn.addEventListener('click', () => {
		openModalDesktop();
		openModalMobile();
	});

	modal.addEventListener('click', (e) => {
		if (e.target == modal) {
			closeModal();
		}
	});

	closeBtn.addEventListener('click', () => {
		closeModal();
	});

	const openModalDesktop = () => {
		modal.classList.add('is-open');
		disableScroll();
	}

	const closeModal = () => {
		modal.classList.remove('is-open');
		disableScroll();
	}

	const openModalMobile = () => {
		modal.classList.add('is-open');
		disableScroll();
		setTimeout(() => {
			modal.querySelector('.modal').classList.add('visible');
		}, 300);
	}

	const closeModalMobile = () => {
		modal.querySelector('.modal').classList.remove('visible');
		setTimeout(() => {
			modal.classList.remove('is-open');
			enableScroll();
		}, 400);
	}

	mobileClose.addEventListener('swiped-down', function (e) {
		closeModalMobile();
	});

	mobileClose.addEventListener('click', function (e) {
		closeModalMobile();
	});


    mobileClose.addEventListener('click', () => {
        onev.style.display = 'block';
        form_c.style.display = 'none';
        ch1.innerHTML = 'Payment Method'

    })


    cryptobotb.addEventListener('click', () => {
        onev.style.display = 'none';
        ch1.innerHTML = "CryptoBot";
        form_c.style.display = 'block'
    })

    cp_amount.addEventListener('input', () => {
        cp_amount = document.getElementById('cp_amount').value;
        let ncpa = parseFloat(cp_amount);
        if (ncpa > 1 && ncpa < 1000) {
            console.log(ncpa);
            cryptobot.style.background = '#3390EC';
            cryptobot.setAttribute('type', 'submit');
        }
        else {
            cryptobot.style.background = '#707579';
            cryptobot.setAttribute('type', 'button');
        }
    })




}();
