<template>
  <div v-if="currentTab === 'projectMenu'">
    <h3>发布项目菜单</h3>

    <form id="projectMenuForm">

      <label for="sourceEnv">源环境：</label>

      <select id="sourceEnv">

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

      <select id="targetEnv">

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

      <button type="button" onclick="publishProjectMenu()">发布</button>

      <button type="button" onclick="downloadProjectMenu()">下载源环境seeddata</button>

    </form>
  </div>
  
  <div v-if="currentTab === 'app'">

    <h3>发布应用</h3>

    <form id="appForm">

      <label for="sourceEnvApp">源环境：</label>

      <select id="sourceEnvApp">

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

      <label for="targetEnvApp">目标环境：</label>

      <select id="targetEnvApp">

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

      <button type="button" onclick="publishApp()">发布</button>

      <button type="button" onclick="downloadApp()">下载源环境seeddata</button>

    </form>

  </div>



  <div v-if="currentTab === 'pbc'">

    <h3>发布PBC</h3>

    <form id="pbcForm">

      <label for="sourceEnvPbc">源环境：</label>

      <select id="sourceEnvPbc">

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

      <label for="targetEnvPbc">目标环境：</label>

      <select id="targetEnvPbc">

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

      <label for="pbcName">PBC名称：</label>

      <input type="text" id="pbcName"><br>

      <button type="button" onclick="publishPbc()">发布</button>

      <button type="button" onclick="downloadPbc()">下载源环境seeddata</button>

    </form>

  </div>



  <div v-if="currentTab === 'allPbc'">

    <h3>无差别发布所有PBC</h3>

    <form id="allPbcForm">

      <label for="sourceEnvAll">源环境：</label>

      <select id="sourceEnvAll">

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

      <label for="targetEnvAll">目标环境：</label>

      <select id="targetEnvAll">

        <option value="platform_dev">开发配置工具pltdev</option>

        <option value="platform_sit">edgesit配置工具pltsit</option>

        <option value="center_app_dev">开发环境中心云微服务cmaasdev</option>

        <option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</option>

        <option value="center_app_sit">测试环境中心云微服务cmaassit</option>

        <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>

        <option value="center_app_uat">压测环境中心云微服务cmaasuat</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>

        <option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</option>

        <option value="ctc_edge_app_uat">压测环境ctc微服务ctcedgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务fdcmaasuat</option>

        <option value="center_app_prod">生产环境中心云微服务cmaas</option>

        <option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</option>

        <option value="ctc_edge_app_prod">生产环境ctc边缘云微服务ctcedge</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <button type="button" onclick="publishAllPbcs()">发布</button>

      <button type="button" onclick="downloadAllPbcs()">下载源环境seeddata</button>

    </form>

  </div>

  <div v-if="currentTab === 'firstImport'">

    <h3>第一次导入</h3>

    <form id="firtImportMenu">

      <label for="plt">源环境：</label>

      <select id="plt">

        <option value="platform_dev">开发配置工具pltdev</option>

      </select><br>

      <label for="importEnv">目标环境：</label>

      <select id="importEnv">

        <option value="platform_dev">开发配置工具cmaaspltdev</option>

        <option value="platform_sit">cmaasedgesit配置工具cmaaspltsit</option>

        <option value="center_app_dev">开发环境中心云微服务cmaasdev</option>

        <option value="edge_app_dev">开发环境边缘云微服务cmaasedgedev</option>

        <option value="center_app_sit">测试环境中心云微服务cmaassit</option>

        <option value="edge_app_sit">测试环境边缘云微服务cmaasedgesit</option>

        <option value="center_app_uat">压测环境中心云微服务cmaasuat</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) cmaasedgeuat</option>

        <option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</option>

        <option value="ctc_edge_app_uat">压测环境ctc微服务 cmaasctcedgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

        <option value="fd_edge_app_uat_plt">uat环境福鼎配置工具 cmaaspltfduat</option>

        <option value="center_app_prod">生产环境中心云微服务cmaas</option>

        <option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</option>

        <option value="ctc_edge_app_prod">生产环境ctc边缘云微服务cmaasctcedge</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <button type="button" onclick="firstImportMenu()">发布</button>

    </form>

  </div>



  <div v-if="currentTab === 'syncTenant'">

    <h3>同步租户</h3>

    <form id="syncTenantData">

      <label for="syncEnv">选择同步租户的环境：</label>

      <select id="syncEnv">

        <option value="center_app_dev">开发环境中心云微服务cmaasdev</option>

        <option value="edge_app_dev">开发环境边缘云微服务cmaasedgedev</option>

        <option value="center_app_sit">测试环境中心云微服务cmaassit</option>

        <option value="edge_app_sit">测试环境边缘云微服务cmaasedgesit</option>

        <option value="center_app_uat">压测环境中心云微服务cmaasuat</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) cmaasedgeuat</option>

        <option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</option>

        <option value="ctc_edge_app_uat">压测环境ctc微服务 cmaasctcedgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

        <option value="center_app_prod">生产环境中心云微服务cmaas</option>

        <option value="main_edge_app_prod">生产环境主业态边缘云微服务cmaasedge</option>

        <option value="ctc_edge_app_prod">生产环境ctc边缘云微服务cmaasctcedge</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <button type="button" onclick="syncTenant()">同步租户</button>

    </form>

  </div>



  <div v-if="currentTab === 'translation'">

    <h3>发布多语言</h3>

    <form id="translationForm">

      <label for="translationSourceEnv">源环境：</label>

      <select id="translationSourceEnv">

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

      <label for="translationTargetEnv">目标环境：</label>

      <select id="translationTargetEnv">

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

      <button type="button" onclick="publishTranslation()">发布</button>

    </form>

  </div>



  <!--<div v-if="currentTab === 'earthOperations'"> 

<h3>earth环境操作</h3> 

<form id="earthOperationForm"> 

    <label for="earthTargetEnv">auth token：</label> 

    <input id="authToken"/> 

    <label for="earthTargetEnv">目标环境：</label> 

    <select id="earthTargetEnv"> 

        <option value="platform_dev">开发配置工具pltdev</option> 

        <option value="edge_app_dev">Hotfix开发环境边缘云微服务edgedev</option> 

        <option value="edge_app_sit">测试环境边缘云微服务edgesit</option> 

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option> 

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option> 

    </select><br> 

    <button type="button" onclick="earthRestart()">重启</button> 

    <button type="button" onclick="earthShutdown()">关闭</button> 

    <button type="button" onclick="earthStart()">启动</button> 

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

    <select id="qingCloudTargetEnv"> 

        <option value="main_edge_app_qing_cloud_uat">青云主业态新压测环境</option> 

    </select><br> 

    <button type="button" onclick="qingCloudRestart()">重启</button> 

    <button type="button" onclick="qingCloudShutdown()">关闭</button> 

    <button type="button" onclick="qingCloudStart()">启动</button> 

</form> 

</div>-->



  <div v-if="currentTab === 'dataSync'">

    <h3>数据同步</h3>

    <form id="dataSyncForm">

      <label for="dataSyncEnv">环境：</label>

      <select id="dataSyncEnv">

        <option value="platform_dev">开发配置工具pltdev</option>

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

      <label for="dataType">数据：</label>

      <select id="dataType">

        <option value="error-message-data">错误码</option>

        <option value="data-dictionary">数据字典</option>

        <!-- <option value="sys_permission">系统权限</option>-->

      </select><br>

      <label for="tenant">租户：</label>

      <select id="tenant">

        <option value="DEFAULT">默认租户</option>

        <option value="2540">福鼎时代</option>

        <option value="2700">时代智能</option>

        <option value="3240">宜春智科</option>

        <option value="CTC">时代智能CTC集团</option>

        <option value="CMAAS_CORP">宁德时代总部集团</option>

      </select><br>

      <button type="button" onclick="dataSync()">同步</button>

    </form>

  </div>



  <div v-if="currentTab === 'gray'">

    <h3>数据同步</h3>

    <form id="grayForm">

      <label for="env">环境：</label>

      <select id="env">

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

      </select><br>

      <label for="direction">主备：</label>

      <select id="direction">

        <option value="masterToSlave">主到备</option>

        <option value="slaveToMaster">备到主</option>

      </select><br>

      <button type="button" onclick="graySync()">同步</button>

    </form>

  </div>





  <div v-if="currentTab === 'increment'">

    <h3>增量同步</h3>

    <form id="incrementForm">

      <label for="incrementSourceEnv">源环境：</label>

      <select id="incrementSourceEnv">

        <option value="platform_dev">开发配置工具pltdev</option>

        <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <label for="incrementTargetEnv">目标环境：</label>

      <select id="incrementTargetEnv">

        <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <div>

        <label>flow:<input type="radio" name="type" value="flow" checked /></label>

        <label>form:<input type="radio" name="type" value="form" /></label>

        <label>page:<input type="radio" name="type" value="page" /></label>

      </div><br>

      <label for="incrementPbc">pbc token：</label>

      <input type="text" id="incrementPbc"><br>

      <label for="incrementToken">token/schema_id：</label>

      <input type="text" id="incrementToken"><br>

      <button type="button" onclick="incrementSync()">发布</button>

    </form>

  </div>

  <div v-if="currentTab === 'micro'">

    <h3>微服务发布</h3>

    <form id="microForm">

      <label for="microSourceEnv">源环境：</label>

      <select id="microSourceEnv">

        <option value="platform_dev">开发配置工具pltdev</option>

        <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <label for="microTargetEnv">目标环境：</label>

      <select id="microTargetEnv">

        <option value="edge_app_sit">测试环境边缘云微服务edgesit</option>

        <option value="main_edge_app_uat">压测环境边缘云微服务 (predev) edgeuat</option>

        <option value="fd_edge_app_uat">uat环境福鼎微服务 fdcmaasuat</option>

        <option value="fd_edge_app_prod">生产环境福鼎边缘云微服务cmaas-e-fd</option>

      </select><br>

      <div>

        <label>e-fd-tenant-management-pre:<input type="checkbox" name="micro" value="e-fd-tenant-management-pre"
            checked /></label>

        <label>e-fd-user-managemment-pre:<input type="checkbox" name="micro"
            value="e-fd-user-managemment-pre" /></label>

        <label>e-fd-pe-pre:<input type="checkbox" name="micro" value="e-fd-pe-pre" /></label>

      </div><br>

      <button type="button" onclick="getMicroList()">发布</button>

    </form>

  </div>
</template>

<script setup>
defineProps({
  currentTab: String
})
import { ref } from 'vue';
import { Button } from 'ant-design-vue';

const sourceEnv = ref('');
const targetEnv = ref('');
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