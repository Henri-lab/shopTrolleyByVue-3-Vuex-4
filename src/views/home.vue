<template>
    <div class="container" ref="container">
        <img src="../img/img1.jpg" />
        <img src="../img/img2.jpg" />
        <img src="../img/img3.jpg" />
        <img src="../img/img4.jpg" />
        <img src="../img/img5.jpg" />
        <img src="../img/img6.jpg" />
        <div class="btns">
            <div class="left-arrow" @click="moveLeft">⬅️</div>
            <div class="right-arrow" @click="moveRight">️➡️</div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 实现一个方法，让每张图片调整到对应的位置
let curIndex = 3; // 图片的索引值，确认当前处于视口中心的那张图片
const xoffSet = 50; // x轴的偏移量
const scaleSpeed = 0.8; // 缩放的速度
const rotateSpeed = 46; // y轴旋转的速度
const opacitySpeed = 0.6; // 透明度的变化速度
const container = ref('container');

const layout = () => {
    const imgs = container.value.querySelectorAll("img");
    // 1. 让所有的图片叠在一起，处于视口中心
    // 2. 确定每一张图片要去到什么位置，包括平移、旋转、透明度和缩放
    imgs.forEach((img, index) => {
        // x轴的偏移量
        let x = (index - curIndex) * xoffSet + Math.sign(index - curIndex) * 300;
        // 希望让当前curIndex这张图片的z-index值是最大的
        // index - curIndex 越小，说明这张图片应该处于顶层
        let zIndex = 100 - Math.abs(index - curIndex);
        // scale的变化速率
        let scale = Math.pow(scaleSpeed, Math.abs(index - curIndex));
        // rotateY的旋转变化速率
        let rotateY = Math.sign(index - curIndex) * rotateSpeed;
        // opacity透明度的变化
        let opacity = Math.pow(opacitySpeed, Math.abs(index - curIndex));
        img.style.zIndex = zIndex;
        img.style.transform = `translateX(${x}px)  scale(${scale}) rotateY(${rotateY}deg)`;
        img.style.opacity = opacity;
    });
};

onMounted(() => {
    layout();
});

const moveLeft = () => {
    curIndex--;
    layout();
};

const moveRight = () => {
    curIndex++;
    layout();
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
    background-color: black;
}

.container {
    width: 500px;
    height: 300px;
    margin: 100px auto;
    position: relative;
    /* perspective 是 CSS 属性，用于定义 3D 元素的透视效果，它可以影响到元素的子元素以及其后代元素的大小和位置。具体地说，perspective 属性用于设置观察者与 z=0 平面的距离，以确定 3D 元素的远近关系。较大的 perspective 值会导致更强的透视效果，而较小的值会使透视效果变得更加平缓。 */
    perspective: 1000px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all 0.5s;
        /* 3D */
        transform-style: preserve-3d;
        backface-visibility: hidden;
    }

    .btns {
        display: flex;
        position: absolute;
        top: 350px;
        right: -200px;

        .left-arrow {
            width: 50px;
            height: 50px;
            text-align: center;
            font-size: 40px;
            position: absolute;
            top:-230px;
            left:-970px
        }

        .right-arrow {
            width: 50px;
            height: 50px;
            text-align: center;
            font-size: 40px;
            position: absolute;
            top:-230px;
        }

        .left-arrow:hover,.right-arrow:hover {
            cursor: pointer;
        }
    }
}
</style>