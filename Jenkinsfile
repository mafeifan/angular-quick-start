 // https://e.coding.net/help/knowledge-base/ci-ways/

 node {
     stage("检出") {
         sh 'pwd'
         sh 'ls -la'
         sh 'cat ci-init'
         sh 'ci-init'
         checkout(
           [$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], userRemoteConfigs: [[url: env.GIT_REPO_URL]]]
         )
         sh 'pwd'
         sh 'ls -la'
     }
     docker.image('circleci/node:10.14-browsers') {
        stage("安装") {
            steps {
                echo "安装中..."
                sh 'node -v'
                sh 'npm install --verbose'
                echo "安装依赖完成."
            }
        }

        stage("测试") {
            steps {
                echo "单元测试中..."
                sh 'npm run lint && npm run citest'
                sh 'tar -zcvf reports.tar.gz ./reports/*'
                junit 'reports/*.xml'
                archiveArtifacts artifacts: '**/*.tar.gz', fingerprint: true
                echo "单元测试完成."
            }
        }

        stage("部署") {
            steps {
                echo "部署中..."
                // 请在这里放置收集单元测试报告的调用过程
                echo "部署完成"
            }
        }
    }
}
