pipeline {
  agent {
    docker {
      image 'circleci/node:10.14-browsers'
    }

  }
  stages {
    stage('Checkout') {
      steps {
        git(branch: 'master', credentialsId: "5fcfdf78-991f-4d1c-a65c-ba60862cadda", url: 'https://e.coding.net/mafeifan/angular-quickstart.git')
      }
    }
    stage('安装') {
      steps {
        echo '安装中...'
        sh 'node -v'
        sh 'npm install --verbose'
        echo '安装依赖完成.'
      }
    }
    stage('测试') {
      steps {
        echo '单元测试中...'
        sh 'npm run lint && npm run citest'
        sh 'tar -zcvf reports.tar.gz ./reports/*'
        junit 'reports/*.xml'
        archiveArtifacts(artifacts: '**/*.tar.gz', fingerprint: true)
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
  environment {
    aa = '11'
  }
}