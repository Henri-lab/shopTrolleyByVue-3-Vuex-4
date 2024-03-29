<template>
    <div class="list">
        <el-table :data="products" stripe style="width: 100%">
            <el-table-column prop="title" label="型号" width="180" />
            <el-table-column prop="price" label="价格" width="180" />
            <el-table-column prop="number" label="库存" />
            <el-table-column label="操作"><el-button type="success">Success</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { onMounted, onCreated } from 'vue';
import product from '../../product'
import useStore from 'vuex'


</script>

<style lang="scss" scoped></style>