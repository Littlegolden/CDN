1. 在 FLarum 后台自定义页脚或页眉添加下方的 js 。
``` html
<script src="https://cdn.jsdelivr.net/gh/Littlegolden/CDN@1.1/scrollTop/jquery.js?ver=1.12.4"></script>
<script src="https://cdn.jsdelivr.net/gh/Littlegolden/CDN@1.1/scrollTop/menu.js?ver=4.9.9"></script>
```
2. 在上方js代码后添加 FontAwesome CSS文件，因为Flarum自带，所以这一步可以不做。
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.min.css">
或者（二选一）
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css">
```

3. 在自定义页脚或页眉、或者网页<body>中任何位置添加返回顶部按钮代码：
``` html
<a href="#" class="scroll-up" style="display: inline;">
    <!-- i标签是用来显示斜体文本效果的，不过大多数时候，因为它比span少三个字母，所以很多人用i标签来放置图标。 -->
    <i class="fa fa-chevron-up"></i> 
    <!-- fa fa-chevron-up 是在线导入的css中的图标样式 -->
</a>
```
4. 在自定义 CSS 中添加样式：
``` javascript
/*返回顶部开始*/
.scroll-up {
    background-color: #f8504b; /*初始颜色*/
    color:#ffffff; /*文字白色*/
    transition: transform 0.5s; /*设置效果出现、消失过渡时间*/
}

.scroll-up:hover, .scroll-up:focus { /*悬浮、点击样式*/
    background-color: #f8504b;
    color:#ffffff;
    transform: scale(1.1,1.1); /*缩放*/
    transition:all 100ms; /*动画过渡*/
}

.scroll-up {
    border-radius: 50px; /*圆角*/
    bottom: 30px; /*距离网页底部*/
    padding: 3px;
    display: none;
    height: 50px; /*圆高度*/
    opacity: 1;
    position: fixed;
    right: 30px; /*距离网页右边*/
    text-align: center; /*文本居中*/
    width: 50px; /*圆宽度*/
    overflow: hidden; /*属性规定当内容溢出元素框时，修剪多余内容*/
    z-index: 9999; /*设置元素的堆叠顺序（在网页的图层顺序），拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面*/
    line-height: 2.5;
    color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
}
@media (max-width: 992px){
    .scroll-up {
        bottom:10px;
        right:10px;
        width:40px;
        height:40px;
    }
}
/*返回顶部结束*/
```
