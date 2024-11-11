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

    <div class="tabs">
      <button
        class="tablink"
        v-for="tab in tabs"
        :key="tab.id"
        @click="openTab(tab.id)"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- Tab Contents -->
    <div v-for="tab in tabs" :key="tab.id" :id="tab.id" class="tabcontent" v-show="currentTab === tab.id">
      <h3>{{ tab.name }}</h3>
      <!-- Form Contents -->
      <!-- You can add the form contents for each tab here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'firstImport',
      tabs: [
        { id: 'firstImport', name: '第一次导入' },
        { id: 'projectMenu', name: '发布项目菜单' },
        { id: 'translation', name: '发布多语言' },
        { id: 'app', name: '发布应用' },
        { id: 'pbc', name: '发布PBC' },
        { id: 'dataSync', name: '数据同步' },
        { id: 'gray', name: '灰度发布' },
        { id: 'increment', name: '增量发布' },
        { id: 'micro', name: '微服务发布' },
      ],
    };
  },
  methods: {
    openTab(tabId) {
      this.currentTab = tabId;
    },
  },
};
</script>


<style>
body {

  font-family: Arial, sans-serif;

}



.tabs {

  overflow: hidden;

  border-bottom: 1px solid #ccc;

}



.tablink {

  background-color: #f2f2f2;

  float: left;

  border: none;

  outline: none;

  cursor: pointer;

  padding: 14px 16px;

  transition: background-color 0.3s;

}



.tablink:hover {

  background-color: #ddd;

}



.tabcontent {

  display: none;

  padding: 20px;

}



form {

  margin-bottom: 20px;

}



form label {

  font-weight: bold;

}



form select,
form input[type="text"] {

  margin-bottom: 10px;

  padding: 8px;

  width: 200px;

  border: 1px solid #ccc;

}



form button {

  padding: 10px 20px;

  background-color: #4CAF50;

  color: white;

  border: none;

  cursor: pointer;

  transition: background-color 0.3s;

}



form button:hover {

  background-color: #45a049;

}



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



/* styles.css */

/* 成功消息动画 */

@keyframes fadeInOut {

  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }

}



.success-message {

  display: none;

  position: fixed;

  top: 50%;

  left: 50%;

  transform: translate(-50%, -50%);

  background-color: #4CAF50;

  color: white;

  padding: 15px 20px;

  border-radius: 5px;

  animation: fadeInOut 3s ease-in-out;

}



/* 错误消息动画 */

.error-message {

  display: none;

  position: fixed;

  top: 50%;

  left: 50%;

  transform: translate(-50%, -50%);

  background-color: #f44336;

  color: white;

  padding: 15px 20px;

  border-radius: 5px;

  animation: fadeInOut 3s ease-in-out;

}
</style>