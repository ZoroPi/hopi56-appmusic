
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Rồi Nâng Cái Ly',
            singer: 'Nal',
            path: './music/RoiNangCaiLy.mp3',
            image: './img/anh1.jpg'
        },
        {
            name: 'Rồi Tới Luôn Cover',
            singer: 'Út Nhị',
            path: './music/RoiToiLuonCover.mp3',
            image: './img/anh2.jpg'
        },
        {
            name: 'Tết Trong Tim Tôi',
            singer: 'Phát Hồ',
            path: './music/TetTrongTimToi.mp3',
            image: './img/anh3.jpg'
        },
        {
            name: 'Thương Nhau Tới Bến ',
            singer: 'Nal',
            path: './music/ThuongNhauToiBen.mp3',
            image: './img/anh4.jpg'
        },
        {
            name: 'Vui Lắm Nha',
            singer: 'Hương Ly',
            path: './music/VuiLamNha.mp3',
            image: './img/anh5.jpg'
        },
        {
            name: 'Y Chang Xuân Sang',
            singer: 'Nal',
            path: './music/YChangXuanSang.mp3',
            image: './img/anh6.jpg'
        },
        {
            name: 'Về Quê Anh Lo',
            singer: 'The Night',
            path: './music/VeQueAnhLo.mp3',
            image: './img/anh7.jpg'
        },
        {
            name: 'Ái Nộ',
            singer: 'Masew & Khôi Vũ',
            path: './music/AiNo.mp3',
            image: './img/anh8.jpg'
        },
        {
            name: 'Cưới Thôi',
            singer: 'Masew',
            path: './music/CuoiThoi.mp3',
            image: './img/anh9.jpg'
        },
        {
            name: 'Đế Vương',
            singer: 'Đình Dũng',
            path: './music/DeVuong.mp3',
            image: './img/anh10.jpg'
        },
        {
            name: 'Điêu Toa',
            singer: 'Pháo & Masew',
            path: './music/DieuToa.mp3',
            image: './img/anh11.jpg'
        },
        {
            name: 'Độ Tộc 2',
            singer: 'Độ Mixi',
            path: './music/DoToc2.mp3',
            image: './img/anh12.jpg'
        },
        {
            name: 'Đường Một Chiều',
            singer: 'Masew & Huỳnh Tú',
            path: './music/DuongMotChieu.mp3',
            image: './img/anh13.jpg'
        },
        {
            name: 'Ép Duyên',
            singer: 'Long Nón Lá',
            path: './music/EpDuyen.mp3',
            image: './img/anh14.jpg'
        },
        {
            name: 'Gieo Quẻ',
            singer: 'Hoàng Thùy Linh',
            path: './music/GieoQue.mp3',
            image: './img/anh15.jpg'
        },
        {
            name: 'Kém Duyên',
            singer: 'Masew & Rum',
            path: './music/KemDuyen.mp3',
            image: './img/anh16.jpg'
        },
        {
            name: 'Mệt Chưa! Anh Vê Đây',
            singer: 'Hana Cẩm Tiên',
            path: './music/MetChuaAnhVeDay.mp3',
            image: './img/anh17.jpg'
        },
        {
            name: 'Mộng Bờ Tây',
            singer: 'Jombie',
            path: './music/MongBoTay.mp3',
            image: './img/anh18.jpg'
        },
        {
            name: 'Mộng Mơ',
            singer: 'Masew & RedT',
            path: './music/MongMo.mp3',
            image: './img/anh19.jpg'
        },
        {
            name: 'Nàng Thơ',
            singer: 'Masew & Ý Tiên',
            path: './music/NangTho.mp3',
            image: './img/anh20.jpg'
        },
        {
            name: 'Nhất Thân',
            singer: 'Masew & Khôi Vũ',
            path: './music/NhatThan.mp3',
            image: './img/anh21.jpg'
        },
        {
            name: 'Sầu Hồng Gai',
            singer: 'G5R',
            path: './music/SauHongGai.mp3',
            image: './img/anh22.jpg'
        },
        {
            name: 'Ta Say',
            singer: 'Masew',
            path: './music/TaSay.mp3',
            image: './img/anh23.jpg'
        },
        {
            name: 'Thê Lương',
            singer: 'Phúc Chinh',
            path: './music/TheLuong.mp3',
            image: './img/anh24.jpg'
        },
        {
            name: 'Thế Thái',
            singer: 'Hương Ly',
            path: './music/TheThai.mp3',
            image: './img/anh25.jpg'
        },
        {
            name: 'Túy Âm',
            singer: 'Hương Ly',
            path: './music/TuyAm.mp3',
            image: './img/anh26.jpg'
        },
        {
            name: 'Vách Ngọc Ngà',
            singer: 'Anh Rồng',
            path: './music/VachNgocNga.mp3',
            image: './img/anh27.jpg'
        },
        {
            name: 'Yêu Là Cưới',
            singer: 'Phúc Bồ',
            path: './music/YeuLaCuoi.mp3',
            image: './img/anh28.jpg'
        },
        {
            name: 'Bánh Chưng Nhân Tết',
            singer: 'Anh Rồng',
            path: './music/BanhChungNhanTet.mp3',
            image: './img/anh29.jpg'
        },
        {
            name: 'Còn Thở Là Còn Gỡ',
            singer: 'Phương Mỹ Chi',
            path: './music/ConThoLaConGo.mp3',
            image: './img/anh30.jpg'
        },
        {
            name: 'Cưa Là Đổ',
            singer: 'Phúc Bồ',
            path: './music/CuaLaDo.mp3',
            image: './img/anh31.jpg'
        },
        {
            name: 'Dâu Miền Tây',
            singer: 'YuniBoo & TraCy Thảo My',
            path: './music/DauMienTay.mp3',
            image: './img/anh50.jpg'
        },
        {
            name: 'Thì Thôi',
            singer: 'Nal',
            path: './music/ThiThoi.mp3',
            image: './img/anh33.jpg'
        },
        {
            name: 'Cô Đơn Dành Cho Ai Đây',
            singer: 'Lee Ken & Nal',
            path: './music/CoDonDanhChoAi.mp3',
            image: './img/anh34.jpg'
        },
        {
            name: 'Dây Tơ Kết Đôi',
            singer: 'Nana Liu',
            path: './music/DayToKetDoi.mp3',
            image: './img/anh35.jpg'
        },
        {
            name: 'Đèo Bòng',
            singer: 'Keyo',
            path: './music/DeoBong.mp3',
            image: './img/anh36.jpg'
        },
        {
            name: 'Em Bỏ Hút Thuốc Chưa',
            singer: 'Bích Phương',
            path: './music/EmBoHutThuocChua.mp3',
            image: './img/anh43.jpg'
        },
        {
            name: 'Em Chào Tết',
            singer: 'Bích Phương',
            path: './music/EmChaoTet.mp3',
            image: './img/anh49.jpg'
        },
        {
            name: 'Gửi Anh Xa Nhớ',
            singer: 'Bích Phương',
            path: './music/GuiAnhXaNho.mp3',
            image: './img/anh39.jpg'
        },
        {
            name: 'Lời Đường Mật',
            singer: 'LyLy & HIEUTHUHAI',
            path: './music/LoiDuongMat.mp3',
            image: './img/anh44.jpg'
        },
        {
            name: 'Nụ Cười Xuân',
            singer: 'YuniBoo & H2K',
            path: './music/NuCuoiXuan.mp3',
            image: './img/anh41.jpg'
        },
    ],

    render: function() {
        const htmls = this.songs.map((song,index) =>{
            return ` 
                <div class="song ${index === this.currentIndex ? 'active' : ''}"data-index="${index}">
                    <div class = "thumb"
                        style = "background-image: url('${song.image}')">
                    </div>
                    <div class = "body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        })
        playlist.innerHTML = htmls.join('')
    },

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    // Lắng nghe / xử lý các sự kiện (DOM events)
    handleEvents: function(){
        const _this = this
        const cdWidth = cd.offsetWidth

        // xử lý CD xoay
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ],{
            duration: 10000, // 10 seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function (){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play
        playBtn.onclick = function (){
            if (_this.isPlaying){
                _this.isPlaying = false
                audio.pause()
                player.classList.remove('playing')
            }else{
                audio.play()
            }
        }

        // khi song được play
        audio.onplay = function (){
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        // khi song được pause
        audio.onpause = function (){
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        // Khi next song
        nextBtn.onclick = function() {
            if (_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Khi prev song
        prevBtn.onclick = function() {
            if (_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // khi nhấn nút Random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active',_this.isRandom)
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // xử lý phát lại 1 bài hát
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active',_this.isRepeat)

        }
        // Xử lý khi hết bài hát
        audio.onended = function ()  {
            if (_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
            }
        }
        // Lắng nghe hành vi khi click vào playlist
        playlist.onclick = function (e) {
            const songNode =e.target.closest('.song:not(.active)');
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play()
            if(songNode|| e.target.closest('.option')){
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
            }
        }
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

    },

    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function () {
        this.currentIndex--
        if(this.currentIndex < 0 ){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function() {
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        }, 300)
    },

    // phuong thuc start de bat dau
    start: function(){
        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()
    }
}
app.start()