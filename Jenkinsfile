pipeline {
    agent {
        // 此处设定构建环境，目前可选有
        // default, java-8, python-3.5, ruby-2.3, go-1.11 等
        // 详情请阅 https://dev.tencent.com/help/knowledge-base/how-to-use-ci#agents
        // label "default"
        docker {
            image 'circleci/node:10.14-browsers'
        }
    }
    stages  {

        stage('Checkout') {
            steps {
                git branch: 'master', credentialsId: 'fda5ef06-9d67-441e-b774-7276610eb277', url: 'git@e.coding.net:mafeifan/angular-quickstart.git'
                // checkout([$class: 'GitSCM', branches: [[name: 'master']],
                //         userRemoteConfigs: [[url: 'git@e.coding.net:mafeifan/angular-quickstart.git', credentialsId: 'fda5ef06-9d67-441e-b774-7276610eb277' ]]])
            }
        }

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
