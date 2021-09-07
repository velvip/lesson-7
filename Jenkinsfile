#!groovy
pipeline {
    agent any
    stages { 
        stage("Create docker image") {
            agent any
            steps {
                echo '++++++++++++++++++ Docker Build ++++++++++++++++++'
                sh 'ls'
            }
        }
    
        stage ("Test Container") {
            agent any
            steps {
                echo '++++++++++++++++++ Docker Test in port 8080 ++++++++++++++++++'
                sh 'docker stop node:test'
                sh 'docker run -p 8080:8080 -d node:test'
            }
        }
        stage ("Apply?") {
            steps{
                    script {
                    env.Apply = input message: 'User input required', ok: 'Deploy!'
                }
            echo "${env.Apply}"
            }
        
        }
        stage ("Deploy") {
            agent any
            steps{
                    echo '++++++++++++++++++ Deploy on prod ++++++++++++++++++'
                    sh 'docker stop $(docker ps -a -q)'
                    sh 'docker rm $(docker ps -a -q)'
                    sh 'docker run -p 80:8080 -d node:prod'
                }
        }
    }
}