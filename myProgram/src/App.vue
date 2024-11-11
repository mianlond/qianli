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
      <button class="tablink" v-for="tab in tabs" :key="tab.id" @click="openTab(tab.id)">
        {{ tab.name }}
      </button>
    </div>

    <!-- Tab Contents -->
    <div v-for="tab in tabs" :key="tab.id" :id="tab.id" class="tabcontent" v-show="currentTab === tab.id">
      <h3>{{ tab.name }}</h3>
      <!-- Form Contents -->
      <!-- You can add the form contents for each tab here -->
      <!-- Project Menu Tab Content -->
      <div v-if="currentTab === 'projectMenu'">
        <form id="projectMenuForm">
          <label for="sourceEnv">源环境：</label>
          <select v-model="sourceEnv">
            <option value="platform_dev">开发配置工具pltdev</option>
            <option value="platform_sit">edgesit配置工具pltsit</option>
            <option value="center_app_dev">开发环境中心云微服务cmaasdev</option>
            <option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</option>
            <option value="center_app_sit">测试环境中心云微服务cmaassit</option>
            <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>
            <option value="center_app_uat">压测环境中心云微服务cmaasuat</option>
            <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>
            <option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</option>
            <option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</option>
            <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>
            <option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</option>
            <option value="center_app_prod">生产环境中心云微服务</option>
            <option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</option>
            <option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</option>
            <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>
          </select><br>

          <label for="targetEnv">目标环境：</label>
          <select v-model="targetEnv">
            <option value="platform_dev">开发配置工具pltdev</option>
            <option value="platform_sit">edgesit配置工具pltsit</option>
            <option value="center_app_dev">开发环境中心云微服务cmaasdev</option>
            <option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</option>
            <option value="center_app_sit">测试环境中心云微服务cmaassit</option>
            <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>
            <option value="center_app_uat">压测环境中心云微服务cmaasuat</option>
            <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>
            <option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</option>
            <option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</option>
            <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>
            <option value="center_app_prod">生产环境中心云微服务</option>
            <option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</option>
            <option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</option>
            <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>
          </select><br>

          <button type="button" @click="publishProjectMenu">发布</button>
          <button type="button" @click="downloadProjectMenu">下载源环境seeddata</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref('firstImport');
const tabs = [
  { id: 'firstImport', name: '第一次导入' },
  { id: 'projectMenu', name: '发布项目菜单' },
  { id: 'translation', name: '发布多语言' },
  { id: 'app', name: '发布应用' },
  { id: 'pbc', name: '发布PBC' },
  { id: 'dataSync', name: '数据同步' },
  { id: 'gray', name: '灰度发布' },
  { id: 'increment', name: '增量发布' },
  { id: 'micro', name: '微服务发布' },
];

const sourceEnv = ref('sourceEnv');
const targetEnv = ref('targetEnv');
const openTab = (tabId) => {
  currentTab.value = tabId;
};

const publishProjectMenu = () => {
  console.log('发布项目菜单', sourceEnv.value, targetEnv.value);

//   var sourceEnv = document.getElementById("sourceEnv").value;

// var targetEnv = document.getElementById("targetEnv").value;

// REST API 请求 

fetch(`http://localhost:8080/api/v1/seed-data/restoreProjectMenu/${sourceEnv}/to/${targetEnv}`, {

    method: 'POST',

    headers: {

        'Accept': '*/*',

        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',

        'Accept-Encoding': 'gzip, deflate, br',

        'Connection': 'keep-alive',

        'Host': 'localhost'

    }

})

    .then(response => {

        if (!response.ok) {

            throw new Error('网络错误，发布失败');

        }

        showSuccessMessage('发布成功');

    })

    .catch(error => {

        showErrorMessage('发布失败:' + error.message);

    });
};

const downloadProjectMenu = () => {
  console.log('下载源环境seeddata', sourceEnv.value);
  // 这里添加下载源环境seeddata的逻辑
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