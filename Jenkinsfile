pipeline {
  agent {
    label 'default'
  }
  stages {
    stage('检出') {
      steps {
        sh 'ci-init'
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], 
                            userRemoteConfigs: [[url: env.GIT_REPO_URL]]])
      }
    }
    stage('安装') {
      steps {
        echo '安装中...'
        sh 'node -v'
        sh 'apt-get update -y && apt-get install -y chromium'
        sh 'cd app && npm install --verbose --registry=https://registry.npm.taobao.org'
        echo '构建完成.'
      }
    }
    stage('测试') {
      steps {
        echo '单元测试中...'
        sh 'cd app && npm run lint && npm run citest'
        sh 'cd app && tar -zcvf coverage.tar.gz ./coverage/*'
        sh 'cd app && tar -zcvf reports.tar.gz ./reports/*'
        junit 'app/reports/*.xml'
        archiveArtifacts(artifacts: 'app/**/*.tar.gz', fingerprint: true)
        echo '单元测试完成.'
      }
    }
    stage('部署') {
      steps {
        echo '部署中...'
        echo '部署完成'
      }
    }
  }
}