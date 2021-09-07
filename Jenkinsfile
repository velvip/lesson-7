#!groovy
pipeline {
    agent any
    stages { 
        stage("Create docker image") {
            agent any
            steps {
                echo '++++++++++++++++++ Docker Build ++++++++++++++++++'
                sh 'docker build . -t node:test'
                sh 'docker build . -t node:prod'
            }
        }
    
        stage ("Test Container") {
            agent any
            steps {
                echo '++++++++++++++++++ Docker Test in port 8080 ++++++++++++++++++'
                try {
                    sh 'docker stop node:test' 
                        return true
                        }
                sh 'docker run -p 8080:8080 -d node:test'
            }
        }
        stage ("Apply?") {
            try {
                timeout(time:120,unit: 'SECONDS'){
                    response = input message: 'User input required', ok: 'Check TEST and Deploy to Prod!' 
                    return true
                    }
                    }
                    catch (err){
                        return false
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