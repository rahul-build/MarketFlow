pipeline {

    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 45, unit: 'MINUTES')

        buildDiscarder(logRotator(
            numToKeepStr: '20',
            artifactNumToKeepStr: '20'
        ))
    }

    tools {
        nodejs 'NodeJs22'
    }

    environment {

        APP_NAME = 'MarketFlow'

        FRONTEND_DIR = 'frontend'
        BACKEND_DIR  = 'backend'

        DOCKER_NAMESPACE = 'rahul569'

        FRONTEND_IMAGE = 'marketflow-frontend'
        BACKEND_IMAGE  = 'marketflow-backend'

        IMAGE_TAG = "${BUILD_NUMBER}"

        GIT_SHORT_SHA = ''
        GIT_BRANCH_NAME = ''
        GIT_COMMIT_MESSAGE = ''
    }

    stages {

        stage('Checkout') {
            steps {

                cleanWs()

                checkout scmGit(
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        credentialsId: 'github-pat',
                        url: 'https://github.com/rahul-build/MarketFlow.git'
                    ]]
                )

                script {

                    env.GIT_SHORT_SHA = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()

                    // Jenkins checks out a detached HEAD.
                    env.GIT_BRANCH_NAME = env.BRANCH_NAME ?: 'main'

                    env.GIT_COMMIT_MESSAGE = sh(
                        script: 'git log -1 --pretty=%s',
                        returnStdout: true
                    ).trim()

                    echo "Branch : ${env.GIT_BRANCH_NAME}"
                    echo "Commit : ${env.GIT_SHORT_SHA}"
                    echo "Message: ${env.GIT_COMMIT_MESSAGE}"
                }

                sh 'git status'
            }
        }

        stage('Build Docker Images') {

            parallel {

                stage('Frontend Image') {
                    steps {

                        sh """
                            docker build \
                                -t ${DOCKER_NAMESPACE}/${FRONTEND_IMAGE}:${IMAGE_TAG} \
                                -f ${FRONTEND_DIR}/Dockerfile \
                                ${FRONTEND_DIR}
                        """
                    }
                }

                stage('Backend Image') {
                    steps {

                        sh """
                            docker build \
                                -t ${DOCKER_NAMESPACE}/${BACKEND_IMAGE}:${IMAGE_TAG} \
                                -f ${BACKEND_DIR}/Dockerfile \
                                ${BACKEND_DIR}
                        """
                    }
                }

            }
        }

        stage('Docker Hub Login') {
            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {

                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                        -u "$DOCKER_USERNAME" \
                        --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Images') {
            steps {

                sh """
                    docker push ${DOCKER_NAMESPACE}/${FRONTEND_IMAGE}:${IMAGE_TAG}
                    docker push ${DOCKER_NAMESPACE}/${BACKEND_IMAGE}:${IMAGE_TAG}
                """
            }
        }
    }

    post {

        always {
            sh 'docker logout || true'
            cleanWs()
        }

        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
