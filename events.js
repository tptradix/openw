!function() {
    var {r, t, w} = {
        r: function() {
            setTimeout(() => {
                document.querySelector('.ld_wp').style.display = 'none';
                document.querySelector('.main').style.display = 'block';
            }, 3000);
        }(r),
        t: function Events() {
            var id, c, s, g, h = {
                c: (() => {
                    var rc1 = document.getElementById('opt1')
                    if (rc1.checked) {
                        return console.log('All');
                    }
                    else {
                        rc1.addEventListener('change', () => {
                            if (this.checked) {
                                return console.log('False');
                            }
                            else {
                                return console.log('All');
                            }
                        });
                    }
                    var rc2 =  document.getElementById('opt2')
                    if (rc2.checked) {
                        return console.log('Design')
                    }
                    else {
                        rc2.addEventListener('change', () => {
                            if (this.checked) {
                                return console.log('False');
                            }
                            else {
                                return console.log('Design');
                            }
                        })
                    }
                    var rc3 =  document.getElementById('opt3')
                    if (rc3.checked) {
                        return console.log('Ads')
                    }
                    else {
                        rc3.addEventListener('change', () => {
                            if (this.checked) {
                                return console.log('False');
                            }
                            else {
                                return console.log('Ads');
                            }
                        })
                    }
                })(c)
            };
        }()
    }
}();