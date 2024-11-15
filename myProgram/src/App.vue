<template>

  <div>
    <h1>CMaaS 应用发布系统</h1>
    <div class="alert-message">
      <p style="color: red;">发布非小事，谨慎操作，选择环境请反复核对，翻车后果自负！切记切记！</p>
    </div>

    <br />
    <br />

    <div id="successMessage" class="success-message"></div>
    <div id="errorMessage" class="error-message"></div>

    <div class="tabs" style="background: #ececec; padding: 30px">
      <a-card :bordered="false">
        <Button type="primary" v-for="tab in tabs" :key="tab.id"
          :class="{ 'tablink active': currentTab.value === tab.id }" @click="openTab(tab.id)">
              {{ tab.name }}
        </Button>
        <div>
          <a-card :bordered="false" style="width: 500px">
            <publishProjectMenu :currentTab="currentTab" />
          </a-card>
        </div>
      </a-card>
    </div>
  </div>

      <!-- v-model 可以在组件上使用以实现双向绑定
       
      -->
  <!-- <div class="tabs">
    <a-menu style="width: 256px" v-model:openKeys="openKeys" v-model:selectedKeys="current" mode="horizontal"
      :theme="theme">
      <a-sub-menu key="sub1">
        <template #title>菜单</template>
        <Button type="primary" v-for="tab in tabs" :key="tab.id"
          :class="{ 'tablink active': currentTab.value === tab.id }" @click="openTab(tab.id)">
          {{ tab.name }}
        </Button>
      </a-sub-menu>
    </a-menu>
  </div> -->


</template>

<script setup>
import { ref } from 'vue';
import publishProjectMenu from "./components/publishProjectMenu.vue";
import { Button, Select } from 'ant-design-vue';

const currentTab = ref('firstImport');
const tabs = ref([
  { id: 'firstImport', name: '第一次导入' },
  { id: 'projectMenu', name: '发布项目菜单' },
  { id: 'translation', name: '发布多语言' },
  { id: 'app', name: '发布应用' },
  { id: 'pbc', name: '发布PBC' },
  { id: 'dataSync', name: '数据同步' },
  { id: 'gray', name: '灰度发布' },
  { id: 'increment', name: '增量发布' },
  { id: 'micro', name: '微服务发布' },
]);
console.log(currentTab.value)
function openTab(id) {
  console.log(id)
  currentTab.value = id;
}



</script>


<style>
.alert-message {

  padding: 20px;

  margin-bottom: 20px;

  background-color: #ffdddd;
  /* 轻微的红色背景 */

  border: 1px solid #ff0000;
  /* 红色边框 */

  color: #6b5900;
  /* 文本颜色 */

  font-size: 1.1rem;
  /* 字体大小 */

  font-weight: bold;
  /* 加粗字体 */

  text-align: center;
  /* 文本居中 */

}

.alert-message strong {

  color: #ff5733;
  /* 强调文本颜色 */

}
</style>