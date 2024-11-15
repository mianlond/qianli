<template>
  <!-- 一个特殊的单文件组件（Single File Component，SFC）标签，用于定义组件的 HTML 模板
   以.vue为后缀，包含三个部分：<template>、<script> 和 <style> -->


  <button class="fancy-btn">
    <slot></slot> <!-- slot outlet  插槽出口 
    标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染-->
  </button>

  <div v-if="isErrorVisible" class="error-message">
    <a-alert message="Error" description="发布失败:Failed to fetch" type="error" show-icon />
  </div>

  <div v-if="currentTab === 'firstImport'">

    <h3>第一次导入</h3>

    <form id="firtImportMenu">

      <label for="plt">源环境：</label>

      <Select id="plt" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

      </Select><br>

      <label for="importEnv">目标环境：</label>

      <a-select id="importEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具cmaaspltdev</a-select-option>

        <a-select-option value="platform_sit">cmaasedgesit配置工具cmaaspltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">开发环境边缘云微服务cmaasedgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务cmaasedgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) cmaasedgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 cmaasctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务cmaas</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务cmaasctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="firstImportMenu()">发布</a-button>
      <!-- 父组件可以通过 v-on (缩写为 @) 来监听事件,  同样，组件的事件监听器也支持 .once 修饰符 -->

    </form>

  </div>

  <div v-if="currentTab === 'projectMenu'">
    <h3>发布项目菜单</h3>

    <form id="projectMenuForm">

      <label for="sourceEnv">源环境：</label>

      <a-select id="sourceEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="targetEnv">目标环境：</label>

      <a-select id="targetEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="publishProjectMenu()">发布</a-button>

      <a-button type="primary" @click="downloadProjectMenu()">下载源环境seeddata</a-button>

    </form>
  </div>

  <div v-if="currentTab === 'app'">

    <h3>发布应用</h3>

    <form id="appForm">

      <label for="sourceEnvApp">源环境：</label>

      <a-select id="sourceEnvApp" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="targetEnvApp">目标环境：</label>

      <a-select id="targetEnvApp" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="publishApp()">发布</a-button>

      <a-button type="primary" @click="downloadApp()">下载源环境seeddata</a-button>

    </form>

  </div>



  <div v-if="currentTab === 'pbc'">

    <h3>发布PBC</h3>

    <form id="pbcForm">

      <label for="sourceEnvPbc">源环境：</label>

      <a-select id="sourceEnvPbc" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="targetEnvPbc">目标环境：</label>

      <a-select id="targetEnvPbc" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="pbcName">PBC名称：</label>

      <input type="text" id="pbcName"><br>

      <a-button type="primary" @click="publishPbc()">发布</a-button>

      <a-button type="primary" @click="downloadPbc()">下载源环境seeddata</a-button>

    </form>

  </div>



  <div v-if="currentTab === 'allPbc'">

    <h3>无差别发布所有PBC</h3>

    <form id="allPbcForm">

      <label for="sourceEnvAll">源环境：</label>

      <a-select id="sourceEnvAll" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="targetEnvAll">目标环境：</label>

      <a-select id="targetEnvAll" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务cmaas</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="publishAllPbcs()">发布</a-button>

      <a-button type="primary" @click="downloadAllPbcs()">下载源环境seeddata</a-button>

    </form>

  </div>


  <div v-if="currentTab === 'syncTenant'">

    <h3>同步租户</h3>

    <form id="syncTenantData">

      <label for="syncEnv">选择同步租户的环境：</label>

      <a-select id="syncEnv" default-value="platform_dev">

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">开发环境边缘云微服务cmaasedgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务cmaasedgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) cmaasedgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 cmaasctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务cmaas</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务cmaasctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="syncTenant()">同步租户</a-button>

    </form>

  </div>



  <div v-if="currentTab === 'translation'">

    <h3>发布多语言</h3>

    <form id="translationForm">

      <label for="translationSourceEnv">源环境：</label>

      <a-select id="translationSourceEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="translationTargetEnv">目标环境：</label>

      <a-select id="translationTargetEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="platform_sit">edgesit配置工具pltsit</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="publishTranslation()">发布</a-button>

    </form>


  </div>



  <!--<div v-if="currentTab === 'earthOperations'"> 

<h3>earth环境操作</h3> 

<form id="earthOperationForm"> 

    <label for="earthTargetEnv">auth token：</label> 

    <input id="authToken"/> 

    <label for="earthTargetEnv">目标环境：</label> 

    <a-select id="earthTargetEnv" default-value="platform_dev"> 

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option> 

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option> 

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option> 

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option> 

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option> 

    </a-select><br> 

    <a-button type="primary"  @click="earthRestart()">重启</a-button> 

    <a-button type="primary"  @click="earthShutdown()">关闭</a-button> 

    <a-button type="primary"  @click="earthStart()">启动</a-button> 

</form> 

</div>-->



  <!--<div v-if="currentTab === 'qingCloudOperations'"> 

<h3>青云环境操作</h3> 

<form id="qingCloudOperationForm"> 

    <div> 

        <label for="earthTargetEnv">auth token：</label> 

        <input type="text" id="token"/> 

    </div> 

    <label for="qingCloudTargetEnv">目标环境：</label> 

    <a-select id="qingCloudTargetEnv"> 

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option> 

    </a-select><br> 

    <a-button type="primary"  @click="qingCloudRestart()">重启</a-button> 

    <a-button type="primary"  @click="qingCloudShutdown()">关闭</a-button> 

    <a-button type="primary"  @click="qingCloudStart()">启动</a-button> 

</form> 

</div>-->



  <div v-if="currentTab === 'dataSync'">

    <h3>数据同步</h3>

    <form id="dataSyncForm">

      <label for="dataSyncEnv">环境：</label>

      <a-select id="dataSyncEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="center_app_dev">开发环境中心云微服务cmaasdev</a-select-option>

        <a-select-option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</a-select-option>

        <a-select-option value="center_app_sit">测试环境中心云微服务cmaassit</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="center_app_uat">压测环境中心云微服务cmaasuat</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</a-select-option>

        <a-select-option value="ctc_edge_app_uat">压测环境ctc微服务 ctcedgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="center_app_prod">生产环境中心云微服务</a-select-option>

        <a-select-option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</a-select-option>

        <a-select-option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="dataType">数据：</label>

      <a-select id="dataType" default-value="error-message-data">

        <a-select-option value="error-message-data">错误码</a-select-option>

        <a-select-option value="data-dictionary">数据字典</a-select-option>

        <!-- <a-select-option value="sys_permission">系统权限</a-select-option>-->

      </a-select><br>

      <label for="tenant">租户：</label>

      <a-select id="tenant" default-value="primary">

        <a-select-option value="primary">默认租户</a-select-option>

        <a-select-option value="2540">福鼎时代</a-select-option>

        <a-select-option value="2700">时代智能</a-select-option>

        <a-select-option value="3240">宜春智科</a-select-option>

        <a-select-option value="CTC">时代智能CTC集团</a-select-option>

        <a-select-option value="CMAAS_CORP">宁德时代总部集团</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="dataSync()">同步</a-button>

    </form>

  </div>



  <div v-if="currentTab === 'gray'">

    <h3>数据同步</h3>

    <form id="grayForm">

      <label for="env">环境：</label>

      <a-select id="env" default-value="main_edge_app_uat">

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

      </a-select><br>

      <label for="direction">主备：</label>

      <a-select id="direction" default-value="masterToSlave">

        <a-select-option value="masterToSlave">主到备</a-select-option>

        <a-select-option value="slaveToMaster">备到主</a-select-option>

      </a-select><br>

      <a-button type="primary" @click="graySync()">同步</a-button>

    </form>

  </div>





  <div v-if="currentTab === 'increment'">

    <h3>增量同步</h3>

    <form id="incrementForm">

      <label for="incrementSourceEnv">源环境：</label>

      <a-select id="incrementSourceEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="incrementTargetEnv">目标环境：</label>

      <a-select id="incrementTargetEnv" default-value="edge_app_sit">

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <div>

        <label>flow:<input type="radio" name="type" value="flow" checked /></label>

        <label>form:<input type="radio" name="type" value="form" /></label>

        <label>page:<input type="radio" name="type" value="page" /></label>

      </div><br>

      <label for="incrementPbc">pbc token：</label>

      <input type="text" id="incrementPbc"><br>

      <label for="incrementToken">token/schema_id：</label>

      <input type="text" id="incrementToken"><br>

      <a-button type="primary" @click="incrementSync()">发布</a-button>

    </form>

  </div>

  <div v-if="currentTab === 'micro'">

    <h3>微服务发布</h3>

    <form id="microForm">

      <label for="microSourceEnv">源环境：</label>

      <a-select id="microSourceEnv" default-value="platform_dev">

        <a-select-option value="platform_dev">开发配置工具pltdev</a-select-option>

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <label for="microTargetEnv">目标环境：</label>

      <a-select id="microTargetEnv" default-value="edge_app_sit">

        <a-select-option value="edge_app_sit">测试环境边缘云微服务edgesit</a-select-option>

        <a-select-option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</a-select-option>

        <a-select-option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</a-select-option>

        <a-select-option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</a-select-option>

      </a-select><br>

      <div>

        <label>e-fd-tenant-management-pre:<input type="checkbox" name="micro" value="e-fd-tenant-management-pre"
            checked /></label>

        <label>e-fd-user-managemment-pre:<input type="checkbox" name="micro"
            value="e-fd-user-managemment-pre" /></label>

        <label>e-fd-pe-pre:<input type="checkbox" name="micro" value="e-fd-pe-pre" /></label>

      </div><br>

      <a-button type="primary" @click="getMicroList()">发布</a-button>

    </form>

  </div>



</template>

<script setup>
defineProps({ // 传递 prop  https://cn.vuejs.org/guide/components/props.html
  currentTab: String
})
import { ref } from 'vue';
import { Button, Select } from 'ant-design-vue'; // 局部声明


const openTab = (tabId) => {
  currentTab.value = tabId;
};

function qingCloudRestart() {

  var env = ref("qingCloudTargetEnv");

  var authToken = ref("token");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/qingcloud-operation/redeploy/${env}/withToken/${authToken}`, {

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

        throw new Error('网络错误，重启服务失败');

      }

      showSuccessMessage('重启服务成功');

    })

    .catch(error => {

      showErrorMessage('重启服务失败:' + error.message);

    });

}



function qingCloudShutdown() {

  var env = ref("qingCloudTargetEnv");

  var authToken = ref("token");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/qingcloud-operation/shutdown/${env}/withToken/${authToken}`, {

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

        throw new Error('网络错误，关闭服务失败');

      }

      showSuccessMessage('关闭服务成功');

    })

    .catch(error => {

      showErrorMessage('关闭服务失败:' + error.message);

    });

}



function qingCloudStart() {

  var env = ref("qingCloudTargetEnv");

  var authToken = ref("token");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/qingcloud-operation/startup/${env}/withToken/${authToken}`, {

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

        throw new Error('网络错误，重启服务失败');

      }

      showSuccessMessage('启动服务成功');

    })

    .catch(error => {

      showErrorMessage('启动服务失败:' + error.message);

    });

}



function earthRestart() {

  var env = ref("earthTargetEnv");

  var authToken = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJmODUwZGYzNzk4ZjY2ODM1NGJiYTA0ZDA2NDQyMzQwODI4ZTQ5ZTQiLCJ1aWQiOjQyODc5NDYwLCJvcmdJZCI6ODgsInVzZXJDb2RlIjoiV2FuZ1dLMDMiLCJpYXQiOjE3MTkxMjE5NzJ9.CF8jD9PflZOQb9TeEvX5NBVXlvxxern53_aeQazFesFzcyC-tcroSS1scbjLvZsBTWMTqpuCfhp0bCr082I5_Q';

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/earth-operation/redeploy/${env}/withToken/${authToken}`, {

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

        throw new Error('网络错误，重启服务失败');

      }

      showSuccessMessage('重启服务成功');

    })

    .catch(error => {

      showErrorMessage('重启服务失败:' + error.message);

    });

}



function publishTranslation() {

  var sourceEnv = ref("translationSourceEnv");

  var targetEnv = ref("translationTargetEnv");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/seed-data/restoreTranslation/${sourceEnv}/to/${targetEnv}`, {

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

}



function publishProjectMenu() {

  var sourceEnv = ref("sourceEnv");

  var targetEnv = ref("targetEnv");

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

}



function syncTenant() {

  var env = ref("syncEnv");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/seed-data/syncTenant/${env}`, {

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

      showSuccessMessage('同步成功');

    })

    .catch(error => {

      showErrorMessage('同步失败:' + error.message);

    });

}



function firstImportMenu() {

  var sourceEnv = ref("plt");

  var targetEnv = ref("importEnv");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/seed-data/firstImport/to/${targetEnv}`, {

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

}



function publishApp() {

  var sourceEnv = ref("sourceEnvApp");

  var targetEnv = ref("targetEnvApp");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/seed-data/restorePbcs/${sourceEnv}/to/${targetEnv}`, {

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

}



function publishAllPbcs() {

  var sourceEnv = ref("sourceEnvAll");

  var targetEnv = ref("targetEnvAll");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/seed-data/restoreAllPbcs/${sourceEnv}/to/${targetEnv}`, {

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

}



function publishPbc() {

  var sourceEnv = ref("sourceEnvPbc");

  var targetEnv = ref("targetEnvPbc");

  var pbcName = ref("pbcName");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/seed-data/restorePbc/${sourceEnv}/to/${targetEnv}/withPbc/${pbcName}`, {

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

}



function showSuccessMessage(message) {

  var successMessage = ref("successMessage");

  successMessage.textContent = message;

  successMessage.style.display = "block";



  // 设置定时器，在 3 秒后隐藏消息 

  setTimeout(function () {

    successMessage.style.display = "none";

  }, 3000);

}



// 定义响应式数据属性
const errorMessage = ref('');
const isErrorVisible = ref(false);

// 函数来显示错误消息
function showErrorMessage(message) {
  errorMessage.value = message;
  isErrorVisible.value = true;

  // 设置定时器，在 3 秒后隐藏消息
  setTimeout(() => {
    isErrorVisible.value = false;
  }, 3000);
}



// 同样实现其他发布和下载功能的函数，如 publishApp(), downloadApp(), publishPbc(), downloadPbc() 





function dataSync() {

  var targetEnv = ref("dataSyncEnv");

  var dataType = ref("dataType");

  var tenant = ref("tenant");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/check-data/restoreData/${targetEnv}/by/${dataType}/for/${tenant}`, {

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

      showSuccessMessage('同步成功');

    })

    .catch(error => {

      showErrorMessage('同步失败:' + error.message);

    });

}



function graySync() {

  var env = ref("env");

  var direction = ref("direction");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/gray/syncpbc/${env}/${direction}`, {

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

      showSuccessMessage('同步成功');

    })

    .catch(error => {

      showErrorMessage('同步失败:' + error.message);

    });

}

function incrementSync() {

  var form = ref("incrementForm");

  var fromData = new FormData(form);

  var incrementSourceEnv = ref("incrementSourceEnv");

  var incrementTargetEnv = ref("incrementTargetEnv");

  var incrementPbc = ref("incrementPbc");

  var incrementToken = ref("incrementToken");

  var incrementType = fromData.get("type");

  // REST API 请求 

  fetch(`http://localhost:8080/api/v1/gray/increment/${incrementSourceEnv}/${incrementTargetEnv}/${incrementPbc}/${incrementToken}/${incrementType}`, {

    method: 'POST',

    headers: {

      'Accept': '*',

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

      showSuccessMessage('同步成功');

    })

    .catch(error => {

      showErrorMessage('同步失败:' + error.message);

    });

}



function getMicroList() {

  // REST API 请求 

  var env = "fd_edge_app_uat";

  fetch(`http://localhost:8080/api/v1/gray/getMicroList/${env}`, {

    method: 'GET',

    headers: {

      'Accept': '*',

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

      alert(JSON.stringify(response))

      //      response.data.forEach(item) =>{ 

      //          alert(item) 

      //      } 

      showSuccessMessage('同步成功');

    })

    .catch(error => {

      showErrorMessage('同步失败:' + error.message);

    });

}




</script>


<style>

.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>