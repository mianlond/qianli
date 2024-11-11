
function openTab(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";

    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].classList.remove("active");

    }

    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.classList.add("active");

}

function qingCloudRestart() {

    var env = document.getElementById("qingCloudTargetEnv").value;

    var authToken = document.getElementById("token").value;

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

    var env = document.getElementById("qingCloudTargetEnv").value;

    var authToken = document.getElementById("token").value;

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

    var env = document.getElementById("qingCloudTargetEnv").value;

    var authToken = document.getElementById("token").value;

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

    var env = document.getElementById("earthTargetEnv").value;

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

    var sourceEnv = document.getElementById("translationSourceEnv").value;

    var targetEnv = document.getElementById("translationTargetEnv").value;

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

    var sourceEnv = document.getElementById("sourceEnv").value;

    var targetEnv = document.getElementById("targetEnv").value;

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

    var env = document.getElementById("syncEnv").value;

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

    var sourceEnv = document.getElementById("plt").value;

    var targetEnv = document.getElementById("importEnv").value;

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

    var sourceEnv = document.getElementById("sourceEnvApp").value;

    var targetEnv = document.getElementById("targetEnvApp").value;

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

    var sourceEnv = document.getElementById("sourceEnvAll").value;

    var targetEnv = document.getElementById("targetEnvAll").value;

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

    var sourceEnv = document.getElementById("sourceEnvPbc").value;

    var targetEnv = document.getElementById("targetEnvPbc").value;

    var pbcName = document.getElementById("pbcName").value;

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

    var successMessage = document.getElementById("successMessage");

    successMessage.textContent = message;

    successMessage.style.display = "block";



    // 设置定时器，在 3 秒后隐藏消息 

    setTimeout(function () {

        successMessage.style.display = "none";

    }, 3000);

}



function showErrorMessage(message) {

    var errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = message;

    errorMessage.style.display = "block";



    // 设置定时器，在 3 秒后隐藏消息 

    setTimeout(function () {

        errorMessage.style.display = "none";

    }, 3000);

}



// 同样实现其他发布和下载功能的函数，如 publishApp(), downloadApp(), publishPbc(), downloadPbc() 





function dataSync() {

    var targetEnv = document.getElementById("dataSyncEnv").value;

    var dataType = document.getElementById("dataType").value;

    var tenant = document.getElementById("tenant").value;

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

    var env = document.getElementById("env").value;

    var direction = document.getElementById("direction").value;

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

    var form = document.getElementById("incrementForm");

    var fromData = new FormData(form);

    var incrementSourceEnv = document.getElementById("incrementSourceEnv").value;

    var incrementTargetEnv = document.getElementById("incrementTargetEnv").value;

    var incrementPbc = document.getElementById("incrementPbc").value;

    var incrementToken = document.getElementById("incrementToken").value;

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


