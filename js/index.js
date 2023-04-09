// 找到所有的菜单标题dom对象
var menuTitleDoms = document.querySelectorAll(".pm-menu-items-tit");
// 给每个标题dom对象绑定点击事件
for (var i = 0; i < menuTitleDoms.length; i++) {
    menuTitleDoms[i].onclick = function() {
        //父级互斥
        //for (var j = 0; j < menuTitleDoms.length; j++) {
        //    menuTitleDoms[j].parentElement.classList.remove("pm-menu-active");
        //}
        // 获取当前点击的父元素
        var parentDom = this.parentElement;
        // 给父元素绑定pm-menu-active样式，
        // toggle是切换的含义，如果存在，就删除，如果不存在就添加
        parentDom.classList.toggle("pm-menu-active");
        // 图标的方向问题
        // 获取点击的图标
        var arrowDom = this.querySelector("i[class*='icon-arrow']");
        // 判断档期那父亲的className样式列表中是否包含pm-menu-active
        if (parentDom.className.includes("pm-menu-active")) {
            arrowDom.className = "iconfont icon-arrowup";
        } else {
            arrowDom.className = "iconfont icon-arrowdown";
        }
    }
}


// 折叠
var pgBarDom = document.querySelector(".pu-bar");
var sildeDom = document.querySelector(".pg-ant-silde");
var menuDoms = document.querySelectorAll(".pm-menu-items");
pgBarDom.onclick = function() {
    // 给左侧导航增加折叠class，变成45像素
    sildeDom.classList.toggle("pg-ant-silde-expand");
    if (sildeDom.className.includes("pg-ant-silde-expand")) {
        this.className = "iconfont icon-wrench pu-bar";
    } else {
        this.className = "iconfont icon-outdent pu-bar";
    }
    // 同时把第一个选中和激活，其他的全部进行折叠
    menuDoms[0].classList.add("pm-menu-active");
    menuDoms[0].querySelector("i[class*='icon-arrow']").className = "iconfont icon-arrowup";
    // 其他全部折叠
    for (var i = 1; i < menuTitleDoms.length; i++) {
        menuDoms[i].classList.remove("pm-menu-active")
        menuDoms[i].querySelector("i[class*='icon-arrow']").className = "iconfont icon-arrowdown";
    }
}


//换肤
// 拿到所有的色卡li
var liDoms = document.querySelectorAll(".u-items");
for (var i = 0; i < liDoms.length; i++) {
    // 循环遍历所有li元素，开始绑定点击事件
    liDoms[i].onclick = function() {
        // 互斥，先把所有的li的选中效果全部清空，包括自己
        for (var i = 0; i < liDoms.length; i++) {
            liDoms[i].innerHTML = "";
        }
        // 然后在给自己重新添加 html到内容区域
        this.innerHTML = '<i class="iconfont icon-check"></i>';
        // 核心： js动态获取每个元素自身的中css样式值
        var backgroundColor = getComputedStyle(this).backgroundColor;
        // js修改::root的属性
        document.documentElement.style.setProperty("--theme", backgroundColor);
        document.documentElement.style.setProperty("--theme-text", "#ffffff");
    }
}


var liAllDoms = document.querySelectorAll(".u-items-all");
for (var i = 0; i < liAllDoms.length; i++) {
    liAllDoms[i].onclick = function() {
        // 互斥选中
        for (var i = 0; i < liAllDoms.length; i++) {
            liAllDoms[i].innerHTML = "";
        }
        // 给自身增加选中
        this.innerHTML = '<i class="iconfont icon-check"></i>';

        // 如果你白色风格
        if (this.className.includes("u-white")) {
            // js修改::root的属性
            document.documentElement.style.setProperty("--theme", "#e6f7ff");
            document.documentElement.style.setProperty("--theme-text", "rgb(24, 144, 255)");
            document.documentElement.style.setProperty("--slide-color", "#ffffff");
            document.documentElement.style.setProperty("--slide-text-color", "rgb(24, 144, 255)");
            document.documentElement.style.setProperty("--slide-text-li-color", "#333");
            document.documentElement.style.setProperty("--slide-bar-color1", "#ddd");
            document.documentElement.style.setProperty("--slide-bar-color2", " #fafafa");
        } else {
            // js修改::root的属性
            document.documentElement.style.setProperty("--theme", "#1890ff");
            document.documentElement.style.setProperty("--theme-text", "#ffffff");
            document.documentElement.style.setProperty("--slide-color", "#001529");
            document.documentElement.style.setProperty("--slide-text-color", "#ffffff");
            document.documentElement.style.setProperty("--slide-text-li-color", "#8c8c8c");
            document.documentElement.style.setProperty("--slide-bar-color1", "#51606d");
            document.documentElement.style.setProperty("--slide-bar-color2", " #263849");
        }
    }
}


// 右侧折叠按钮事件
var opDom = document.querySelector(".pg-setting-op");
opDom.onclick = function() {
    // 获取当前按钮的父元素
    var parentDom = this.parentElement;
    // 给父元素进行添加和删除展开的样式.toggle 存在就删除，不存在就添加
    parentDom.classList.toggle("pg-setting-expand");
    // 如果父容器是展开的状态
    if (parentDom.className.includes("pg-setting-expand")) {
        // 更改成为关闭按钮
        this.innerHTML = "<i class='iconfont icon-close'></i>"
    } else {
        // 更换成设置按钮
        this.innerHTML = "<i class='iconfont icon-setting'></i>"
    }
}


// 给固定和显示按钮绑定点击事件
var headFixDom = document.querySelector(".js-head-fixed");
var headShowDom = document.querySelector(".js-head-show");
var slideFixDom = document.querySelector(".js-slide-fixed");
var slideShowDom = document.querySelector(".js-slide-show");


// 用于固定头部菜单
headFixDom.onclick = function() {
    this.classList.toggle("checked");
    document.querySelector(".pg-ant-main-head").classList.toggle("pg-ant-main-head-fixed")
}

// 头部菜单是否显示
headShowDom.onclick = function() {
    this.classList.toggle("checked");
    document.querySelector(".pg-ant-main-head").classList.toggle("hide")
}


// 用于固定左侧菜单
slideFixDom.onclick = function() {
    this.classList.toggle("checked");
    document.querySelector(".pg-ant-silde-wrapper").classList.toggle("pg-ant-silde-fixed");
}

// 左侧菜单是否显示
slideShowDom.onclick = function() {
    this.classList.toggle("checked");
    document.querySelector(".pg-ant-silde").classList.toggle("hide")
    document.querySelector(".pm-header-logo").classList.toggle("hide");
}


/*控制用户信息展开 */

var userBoxDom = document.querySelector(".j-userbox");
var dropdownDom = document.querySelector(".pg-dropdown");
userBoxDom.onclick = function() {
    dropdownDom.classList.toggle("hide");
    // 如果你离开的时候，给你增加隐藏
    dropdownDom.onmouseleave = function() {
        this.classList.add("hide");
    }
}


/*路由导航改变iframe的src */
var liDoms = document.querySelectorAll(".pm-menu-sub>li");
var mainframe = document.getElementById("mainframe");
for (let index = 0; index < liDoms.length; index++) {
    const element = liDoms[index];
    element.onclick = function() {
        var href = this.dataset.href;
        mainframe.src = href;
    }

}