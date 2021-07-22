@Library('jenkins-pipeline') _
import com.figure.Common

def common
pipeline {
    agent { label 'autoscale-nodejs' }
    environment {
      NODE_CONTAINER = "node12"
    }

    stages {
        stage('Stage Checkout') {
            steps {
                script {
                    common = new Common(this)
                }
                gitCheckout()
            }
        }
        stage('Npm Install') {
            steps {
                container("${NODE_CONTAINER}") {
                    npmInstall()
                }
            }
        }
        stage('Npm Build') {
            steps {
                script{
                    container("${NODE_CONTAINER}") {
                        def react_env = env.CI_BRANCH == "main" ? "production" : "staging"
                        npmRun("build:${react_env}")
                    }
                }
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    dockerBuild("./", common.dockerTag(), "docker/Dockerfile")
                    if (env.BRANCH_NAME == env.CI_BRANCH) {
                        dockerTag(common.dockerTag, common.dockerLatestTag)
                    }
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    dockerPush(common.dockerTag())
                    if (env.BRANCH_NAME == env.CI_BRANCH) {
                        dockerPush(common.dockerLatestTag)
                    }
                }
            }
        }
        stage('Git Tag') {
            steps {
                script {
                    if (env.BRANCH_NAME == "main") {
                        gitTag(this, env.BUILD_NUMBER, env.GIT_COMMIT, env.GIT_URL)
                    }
                }
            }
        }
        stage('Apply & Service Image Deploy') {
            steps {
                script {
                    if (env.BRANCH_NAME == env.CI_BRANCH) {
                        def env = env.CI_BRANCH == "main" ? "prod" : "test"
                        provenanceApplyDeploy() //kubectl apply -f deployment.yaml
                        provenancePatchDeploy("apis", "${common.repoName}",
                                [[ op: "replace",
                                   path: "/spec/template/spec/deployment/image/${env}",
                                   value: "${common.dockerTag}"]],
                                "pd", "json")
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                rmrf('build', 'node_modules')
                dockerRmi(common.dockerTag())
            }
        }
    }
}