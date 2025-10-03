let ManuBar = document.querySelector(".main-mn-sb");
let aTag = ManuBar.querySelectorAll("a");

for (let i = 0; i < aTag.length; i++) {
    aTag[i].addEventListener("click", function (e) {
        e.preventDefault();
        const current = document.getElementById("active");
        current.removeAttribute("id");
        this.id = "active";
    });

}
function drop(el) {
    let submenu = el.nextElementSibling; // ul.sub-mn-sb ที่เกี่ยวกับปุ่มนี้
    let chew = el.querySelector(".chew");

    // ปิด submenu อื่นทั้งหมดก่อน
    let allSubmenus = document.getElementsByClassName("sub-mn-sb");
    let allChew = document.getElementsByClassName("chew");

    for (let i = 0; i < allSubmenus.length; i++) {
        if (allSubmenus[i] !== submenu) {
            allSubmenus[i].className = allSubmenus[i].className.replace(" show", "");
            allChew[i].className = allChew[i].className.replace(" skwen", "");
        }
    }

    // ถ้า menu ที่กดมี submenu → toggle
    if (submenu) {
        if (submenu.className.indexOf("show") === -1) {
            submenu.className += " show";
            if (chew && chew.className.indexOf("skwen") === -1) {
                chew.className += " skwen";
            }
        } else {
            submenu.className = submenu.className.replace(" show", "");
            if (chew) chew.className = chew.className.replace(" skwen", "");
        }
    }
}
// Humberger open ManuBar
let hamburger = document.getElementsByClassName('humberger')[0];
let sideBar = document.querySelector('aside');
let closeSbBtn = document.getElementsByClassName('close')[0];

// ฟังก์ชันปรับ sidebar ตามขนาดหน้าจอ
function adjustSidebar() {
    if(window.innerWidth >= 600) {
        sideBar.style.display = "flex"; // desktop แสดง sidebar
    } else {
        sideBar.style.display = "none"; // mobile เริ่มซ่อน
    }
}

// เรียกฟังก์ชันตอนโหลดหน้า
adjustSidebar();

// ปรับ sidebar เมื่อขนาดหน้าจอเปลี่ยน
window.addEventListener('resize', adjustSidebar);

// toggle sidebar เมือกด hamburger (เฉพาะหน้าจอเล็ก)
hamburger.addEventListener('click', function(){
    if(window.innerWidth < 600){
        if(sideBar.style.display === "block"){
            sideBar.style.display = "none";
        } else {
            sideBar.style.display = "block";
        }
    }
});

// ปุ่ม close
closeSbBtn.addEventListener('click', function(){
    if(window.innerWidth < 600){
        sideBar.style.display = "none";
    }
});


