pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Sathana-V/docker_pipeline'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

       

        stage('Test') {
            steps {
                sh 'npm test' // Adjust if your test script has a different name
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '🎉 Build and test succeeded!'
        }
        failure {
            echo '💥 Build failed!'
        }
    }
}
